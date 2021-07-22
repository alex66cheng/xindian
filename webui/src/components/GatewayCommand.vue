<template>
  <div>
    <el-row>
      <el-col :span="24">{{$t("send")}}:</el-col>
    </el-row>
    
    <el-row>
      <el-col :span="5">
        <div>ID</div>
        <div>  
          <el-select v-model="modbusCommand.id" clearable placeholder="ID">
            <el-option
              v-for="item in idOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      </el-col>
      <el-col :span="5">
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
      <el-col :span="5">
        <div>start address</div>
        <div>  
          <el-input
            placeholder="start address"
            v-model="modbusCommand.startAddress"
            clearable>
          </el-input>
        </div>
      </el-col>
      <el-col :span="5">
        <div>length</div>
        <div>  
          <el-input
            placeholder="length"
            v-model="modbusCommand.dataLength"
            clearable>
          </el-input>
        </div>
      </el-col>
      <el-col :span="4">
        <div>
          <el-button :disabled="confirmOk" @click="displayFinalCommand">{{$t("confirm")}}</el-button>
        </div>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">
        <div>{{finalCommand}}</div>
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
          id: '',
          functionCode: '',
          startAddress: '',
          dataLength: '',
        },
        confirmOk: true,
        finalCommand: '',
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
      }

    },
    methods:{
      displayFinalCommand(){
        this.finalCommand = this.modbusCommand.id + this.modbusCommand.functionCode 
                       + this.modbusCommand.startAddress + this.modbusCommand.dataLength
                       
        this.finalCommand =   this.finalCommand + crc16modbus(this.finalCommand).toString(16).toUpperCase()

      }
    }
  }
</script>