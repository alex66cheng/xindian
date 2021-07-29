<template>
  <div class="router-page">
    <el-row>
      <el-col :span="24">{{$t("send")}}:</el-col>
    </el-row>
    <el-row :gutter="12">
      <el-col :span="4">
        <div>{{$t("target")}}:</div>
        <el-input
          placeholder="target"
          v-model="modbusCommand.target"
          clearable>
        </el-input>
      </el-col>
      <el-col :span="4">
        <div>ID</div>
        <el-select v-model="modbusCommand.id" clearable placeholder="ID">
          <el-option
            v-for="item in idOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="4">
        <div>func</div>
        <div>  
          <el-select v-model="modbusCommand.functionCode" clearable placeholder="function code">
            <el-option
              v-for="item in functionCodeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      </el-col>
      <el-col :span="4">
        <div>start address</div>
        <div>  
          <el-input
            placeholder=" <= FFFF"
            v-model="modbusCommand.startAddress"
            clearable>
          </el-input>
        </div>
      </el-col>
      <el-col :span="4">
        <div>length</div>
        <el-input
          placeholder=">=0001 && <=007D"
          v-model="modbusCommand.dataLength"
          clearable>
        </el-input>
      </el-col>
      <el-col :span="4">
        <el-button :disabled="confirmOk" @click="displayFinalCommand" style="height:40px;">{{$t("confirm")}}</el-button>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <div>Command: {{final.finalCommand}}</div>
        <div>Target: {{final.finalTarget}}</div>
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
        modbusCommand:{  
          target: '',
          node: '',
          id: '',
          functionCode: '',
          startAddress: '',
          dataLength: '',
        },
        confirmOk: true,
        sendOk: true,
        
        final:{
          finalCommand: '',
          finalTarget: '',
          finalNode:''
        }
      }    
    },
    watch:{
      modbusCommand:{
        handler: function () {
          
          this.addressVal = parseInt(this.modbusCommand.startAddress, 16)
          this.dataLengthVal = parseInt(this.modbusCommand.dataLength, 16)
          this.confirmOk = (this.modbusCommand.id.length == 0 || this.modbusCommand.functionCode.length == 0
            || this.modbusCommand.startAddress.length != 4|| this.addressVal < 0x0000 || this.addressVal > 0xFFFF 
            || this.modbusCommand.dataLength.length != 4 || this.dataLengthVal < 0x0000 || this.dataLengthVal > 0x7D)
        },
        deep: true
      },
      final:{
        handler: function(){
          
          this.sendOk = (this.final.finalTarget.length == 0 || this.final.finalCommand.length == 0)  
          console.log(this.final.finalTarget.length)
          console.log(this.final.finalCommand.length)    
        },
        deep: true
      }


    },
    methods:{
      displayFinalCommand(){
        this.final.finalCommand = this.modbusCommand.id + this.modbusCommand.functionCode 
                       + this.modbusCommand.startAddress + this.modbusCommand.dataLength
                       
        this.final.finalCommand =   this.final.finalCommand + crc16modbus(this.final.finalCommand).toString(16).toUpperCase()
        this.final.finalTarget = this.modbusCommand.target 

      },
      sendCommand(){

      }
    }
  }
</script>
<style scoped>

</style>