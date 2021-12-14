<template>
  <div >
    <el-row>
      <el-col :span="24">
        <el-button v-if="disableEdit" @click="disableEdit = !(disableEdit)" style="">Edit</el-button>
        <el-button v-if="!(disableEdit)" @click="disableEdit = !(disableEdit)" style="">Done</el-button>
      </el-col>
    </el-row>
    
    <el-row :gutter="12" style="margin-bottom: 10px">

      <el-col :span="6">
        <div>fun</div>
        <el-input
          v-model="fun"
          :disabled="disableEdit"
          clearable>
        </el-input>
      </el-col>

      <el-col :span="6">
        <div>start</div>
        <el-input
          v-model="start"
          :disabled="disableEdit"
          clearable>
        </el-input>
        <div></div>
      </el-col>
      
      <el-col :span="6">
        <div>length</div>
        <el-input
          v-model="length"
          :disabled="disableEdit"
          clearable>
        </el-input>
      </el-col>

     <el-col :span="6">
        <div>aaa</div>
        <el-input
          v-model="aaa"
          :disabled="disableEdit"
          clearable>
        </el-input>
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
      deviceIndex: Number,
      //outerSetting: Object,
    },
    data() {
      return {
        
        disableEdit: true,
        confirmOk: true,
        modbusOk: false,
        deviceSettingOk: false,
      }    
    },
    created: function(){
      
    },
    computed:{
      deviceSetting:function(){
        console.log(this.deviceIndex)
        let all = this.$store.state.config.all
        let devices = all.find(x => x.id === this.interfaceId).devices
        return devices[this.deviceIndex]
        
      },
      fun:{
        get(){
          return this.deviceSetting.fun
        },
        set(newFun){
          this.$store.commit('setDeviceFun', {
            interfaceId: this.interfaceId,
            deviceIndex: this.deviceIndex,
            newFun: newFun
          })
        }
      },
      start:{
        get(){
          return this.deviceSetting.start
        },
        set(newStart){
          this.$store.commit('setDeviceStart', {
            interfaceId: this.interfaceId,
            deviceIndex: this.deviceIndex,
            newStart: newStart
          })
        }
      },
      
      length:{
        get(){
          return this.deviceSetting.length
        },
        set(newLength){
          this.$store.commit('setDeviceLength',{
            interfaceId: this.interfaceId,
            deviceIndex: this.deviceIndex,
            newLength: newLength
          })
        }
      },
      
      aaa:{
        get(){
          return 'aaa'
        },
        set(newLength){
          this.$store.commit('setDeviceLength',{
            interfaceId: this.interfaceId,
            deviceIndex: this.deviceIndex,
            newLength: newLength
          })
        }
      }
      
    },
    watch:{
    },
    methods:{
     
      sendCommand(){
        
      },
      cancelEdit(){     
        this.$emit('done')
      },
      confirmEdit(){
        this.sendCommand()
        this.disableEdit = true  
        this.$emit('done')
      },
      

    }
  }
</script>
<style scoped>

</style>
