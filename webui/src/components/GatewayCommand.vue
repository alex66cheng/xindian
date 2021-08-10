<template>
  <div class="router-page">
    <el-row>
      <el-col :span="24">{{$t("send")}}:</el-col>
    </el-row>
    
    <el-row :gutter="10">
      <el-col :span="5" :offset="0">
        <div>area</div>
        <el-input
          placeholder=""
          v-model="area"
          clearable>
        </el-input>
      </el-col>
      <el-col :span="5">
        <div>pa_id</div>
        
          <el-input
            placeholder=""
            v-model="pa_id"
            clearable>
          </el-input>
        
        
      </el-col>
    </el-row>
    </el-row>
    <el-row :gutter="12" style="margin-top: 30px">
      <el-col :span="4">
        <div>{{$t("interface")}}:</div>
        <el-input
          placeholder=""
          v-model="modbusCommand.if_id"
          clearable>
        </el-input>
      </el-col>
      <el-col :span="4" >
        <div>
          <div>func</div>
          <div>  
            <el-select v-model="modbusCommand.functionCode" clearable placeholder="choose">
              <el-option
                v-for="item in functionCodeOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
        </div>
      </el-col>
      <el-col :span="4">
        <div>ID</div>
        <el-select v-model="modbusCommand.id" clearable placeholder="choose">
          <el-option
            v-for="item in idOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      
      <el-col :span="4">
        <div>
          <div>start address</div>
          <div>  
            <el-input
              placeholder="0000 ~ FFFF"
              v-model="modbusCommand.startAddress"
              :disabled="!(modbusCommand.functionCode == '03' || modbusCommand.functionCode == '04')"
              clearable>
            </el-input>
          </div>
        </div>
        <div class="register">
          <div>register address</div>
          <div>  
            <el-input
              placeholder="0000 ~ FFFF"
              v-model="modbusCommand.registerAddress"
              :disabled="!(modbusCommand.functionCode == '06')"
              clearable>
            </el-input>
          </div>
        </div>
        
      </el-col>
      <el-col :span="4">
        <div>
          <div>length</div>
          <el-input
            placeholder="0001 ~ 007D"
            v-model="modbusCommand.dataLength"
            :disabled="!(modbusCommand.functionCode == '03' || modbusCommand.functionCode == '04')"
            clearable>
          </el-input>
        </div>
        <div>
          <div>register value</div>
          <el-input
            placeholder="0000 ~ FFFF"
            v-model="modbusCommand.registerValue"
            :disabled="!(modbusCommand.functionCode == '06')"
            clearable>
          </el-input>
        </div>
      </el-col>
      <el-col :span="4">
        <el-button :disabled="confirmDisable" @click="displayFinalCommand" style="height:40px; margin-top: 20px">{{$t("confirm")}}</el-button>
      </el-col>
    </el-row>

    <el-row style="margin-top: 50px">
      <el-col :span="12">
        <div>Command: {{final.finalCommand}}</div>
        <div>Interface: {{final.final_if_id}}</div>
      </el-col>

      <el-col :span="12">
        <el-button :disabled="sendOk" @click="sendCommand">send</el-button>
      </el-col>
    </el-row>
  </div>

</template>

<script>
  import crc16modbus from 'crc/crc16modbus'
  export default {
    data() {
      return {
        idOptions: [{
          value: '00',
          label: '00'
        }, {
          value: '01',
          label: '01'
        }, {
          value: '02',
          label: '02'
        }, {
          value: '03',
          label: '03'
        }],

        functionCodeOptions:[{
          value: '03',
          label: '03',
        },{
          value: '04',
          label: '04'
        },{
          value: '06',
          label: '06',
        },{
          value: '16',
          label: '16'
        }],

        area: '',
        pa_id: '',
        modbusCommand:{  
          if_id: '',
          node: '',
          id: '',
          functionCode: '',
          startAddress: '',
          dataLength: '',
          registerAddress: '',
          registerValue: ''
        },
        confirmDisable: true,
        sendOk: true,
        
        final:{
          finalCommand: '',
          final_if_id: '',
          finalNode:''
        }
      }    
    },
    watch:{
      modbusCommand:{
        handler: function () {
          
          
          
          if(this.modbusCommand.functionCode == '04' || this.modbusCommand.functionCode == '03'){
            this.addressVal = parseInt(this.modbusCommand.startAddress, 16)
            this.dataLengthVal = parseInt(this.modbusCommand.dataLength, 16)
            this.confirmDisable = (this.modbusCommand.id.length == 0 || this.modbusCommand.functionCode.length == 0
              || this.modbusCommand.startAddress.length != 4|| this.addressVal < 0x0000 || this.addressVal > 0xFFFF 
              || this.modbusCommand.dataLength.length != 4 || this.dataLengthVal < 0x0000 || this.dataLengthVal > 0x7D)
          }else if(this.modbusCommand.functionCode == '06'){
            this.addressVal = parseInt(this.modbusCommand.registerAddress, 16)
            this.registerVal = parseInt(this.modbusCommand.registerValue, 16)
            this.confirmDisable = (this.modbusCommand.id.length == 0 || this.modbusCommand.functionCode.length == 0
              || this.modbusCommand.registerAddress.length != 4 || this.addressVal < 0x0000 || this.addressVal > 0xFFFF 
              || this.modbusCommand.registerValue.length != 4 || this.registerVal < 0x0000 || this.registerVal > 0xFFFF)
          }


        },
        deep: true
      },
      final:{
        handler: function(){
          
          this.sendOk = (this.final.final_if_id.length == 0 || this.final.finalCommand.length == 0)  
          console.log(this.final.final_if_id.length)
          console.log(this.final.finalCommand.length)    
        },
        deep: true
      }


    },
    methods:{
      displayFinalCommand(){
        if(this.modbusCommand.functionCode == '04' || this.modbusCommand.functionCode == '03'){
          this.final.finalCommand = this.modbusCommand.id + this.modbusCommand.functionCode 
                        + this.modbusCommand.startAddress + this.modbusCommand.dataLength
                        
          this.final.finalCommand = this.final.finalCommand + crc16modbus(this.final.finalCommand).toString(16).toUpperCase()
          this.final.final_if_id = this.modbusCommand.if_id 
        }
        else if(this.modbusCommand.functionCode == '06'){
          this.final.finalCommand = this.modbusCommand.id + this.modbusCommand.functionCode 
                        + this.modbusCommand.registerAddress + this.modbusCommand.registerValue
          this.final.finalCommand = this.final.finalCommand + crc16modbus(this.final.finalCommand).toString(16).toUpperCase()
        }
        // send final command with interface id
      },
      sendCommand(){

      }
    }
  }
</script>
<style scoped>

</style>