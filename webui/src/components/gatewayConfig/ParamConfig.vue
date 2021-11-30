<template>
  <div >
    <el-row>
      <el-col :span="24">{{$t("send")}}:</el-col>
    </el-row>
    
    <el-row :gutter="12" style="margin-bottom: 10px">
      <el-col :span="6">
        <div>unit</div>
        <el-input
          placeholder="unit"
          v-model="paramSetting.unit"
          :show-password="false"
          clearable>
        </el-input>
      </el-col>
      <el-col :span="6">
        <div>scale</div>
        <el-input
          placeholder="scale"
          v-model="paramSetting.scale"
          clearable>
        </el-input>
      </el-col>
      <el-col :span="6">
        <div>min</div>
        <el-input
          placeholder="min"
          v-model="paramSetting.min"
          clearable>
        </el-input>
      </el-col>
      <el-col :span="6">
        <div>max</div>
        <el-input
          placeholder="max"
          v-model="paramSetting.max"
          clearable>
        </el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6">
        <div v-for="(item, index) in paramSetting.value" :key="index">  
          <el-input           
            :placeholder="'Value'+'('+(index+1)+')'"
            v-model="paramSetting.value[index].byte"
            clearable>
          </el-input>
        </div>
      </el-col>
    </el-row>

    <el-row style="text-align:center; position: relative; bottom:0; margin-top: 20px"> 
      <el-col :span="12" style="text-align: right; padding-right: 20px;">
        <el-button @click="cancelEdit" style="">Cancel</el-button>
      </el-col>
      <el-col :span="12" style="text-align: left; padding-left: 20px;">
        <el-button @click="confirmEdit" type="primary">Confirm</el-button>
      </el-col>
    </el-row>
    
  
  </div>

</template>

<script>
  import crc16modbus from 'crc/crc16modbus'
  export default {
    props:{
      interfaceId: String,
    },
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
        }],

        pa_id: '',
        pa_name: '',

        modbusCommand:{  
          if_id: '',
          id: '',
          functionCode: '',
          startAddress: '',
          dataLength: '',
        },
        paramSetting:{
          unit: '',
          scale: '',
          min: '',
          max: '',
          value:[
            {
              byte: '',
            },
            {
              byte: '',
            }
          ]
        },      
        
        confirmOk: true,
        modbusOk: false,
        paramSettingOk: false,
      }    
    },
    watch:{
      modbusCommand:{
        handler: function () {
          
          this.addressVal = parseInt(this.modbusCommand.startAddress, 16)
          this.dataLengthVal = parseInt(this.modbusCommand.dataLength, 16)
          this.confirmOk = (this.modbusCommand.if_id.length == 0 || this.modbusCommand.id.length == 0 || this.modbusCommand.functionCode.length == 0
            || this.modbusCommand.startAddress.length != 4|| this.addressVal < 0x0000 || this.addressVal > 0xFFFF 
            || this.modbusCommand.dataLength.length != 4 || this.dataLengthVal < 0x0000 || this.dataLengthVal > 0x7D)
        },
        deep: true
      },
      final:{
        handler: function(){
          
          this.modbusOk = this.final.finalCommand.length != 0 
          console.log(this.final.final_if_id.length)
          console.log(this.final.finalCommand.length)    
        },
        deep: true
      },
      paramSetting:{
        handler: function(){
          this.paramSettingOk = (this.paramSetting.unit.length != 0 && this.paramSetting.scale.length != 0
                                  && this.paramSetting.interval.length != 0)
        },
        deep: true
      }
      


    },
    methods:{
      displayFinalCommand(){
        this.final.finalCommand = this.modbusCommand.id + this.modbusCommand.functionCode 
                       + this.modbusCommand.startAddress + this.modbusCommand.dataLength
                       
        this.final.finalCommand =   this.final.finalCommand + crc16modbus(this.final.finalCommand).toString(16).toUpperCase()
        this.final.final_if_id = this.modbusCommand.if_id 

      },
      sendCommand(){
        const finalObject = {
          d_id : this.$route.params.device,
          
          
          parameter:{
            pa_id : this.outer_pa_id,
            pa_name: this.outer_pa_name,
            modbus:{
              if_id : this.modbusCommand.if_id,
              slave: this.modbusCommand.id,
              function_code: this.modbusCommand.functionCode,
              start: this.modbusCommand.startAddress,
              length: this.modbusCommand.dataLength,
            },
            unit: this.paramSetting.unit,
            scale: this.paramSetting.scale,
            interval: this.paramSetting.interval,
          }

        }
        console.log(this.test)
        console.log(finalObject)
      },
      initData(){
        this.paramSetting.unit = ''
        this.paramSetting.scale = ''
        this.paramSetting.interval = ''
        this.modbusCommand.id = ''
        this.modbusCommand.functionCode = ''
        this.modbusCommand.startAddress = ''
        this.modbusCommand.dataLength = ''
      },
      cancelEdit(){
        this.initData()
        this.$emit('done')
      },
      confirmEdit(){
        this.sendCommand()
        this.initData()
        this.$emit('done')
      }


    }
  }
</script>
<style scoped>

</style>