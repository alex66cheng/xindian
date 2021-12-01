<template>
  <div >
    <el-row>
      <el-col :span="24">{{$t("send")}}:</el-col>
    </el-row>
    
    <el-row :gutter="12" style="margin-bottom: 10px">
      <el-col :span="6">
        <div>unit</div>
        <el-input
          :placeholder="paramSetting.unit"
          v-model="paramSettingLocal.unit"
          :show-password="false"
          clearable>
        </el-input>
        <div></div>
      </el-col>
      <el-col :span="6">
        <div>scale</div>
        <el-input
          :placeholder="paramSetting.scale"
          v-model="paramSettingLocal.scale"
          clearable>
        </el-input>
      </el-col>
      <el-col :span="6">
        <div>min</div>
        <el-input
          :placeholder="paramSetting.min"
          v-model="paramSettingLocal.min"
          clearable>
        </el-input>
      </el-col>
      <el-col :span="6">
        <div>max</div>
        <el-input
          :placeholder="paramSetting.max"
          v-model="paramSettingLocal.max"
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
      paramIndex: Number,
      outerSetting: Object,
    },
    data() {
      return {
        

        pa_id: '',
        pa_name: '',

       
        paramSettingLocal:{
          id: '',
          name: '',
          dev: '',
          unit: '',
          scale: '',
          min: '',
          max: '',
          value:[]

        },      
        
        confirmOk: true,
        modbusOk: false,
        paramSettingOk: false,
      }    
    },
    created: function(){
      
    },
    computed:{
      paramSetting:function(){
      
        let all = this.$store.state.config.all
        let params=all.find(x => x.id === this.interfaceId).protocal.param
        return params[this.paramIndex]
        
      },
      
    },
    watch:{
      

    },
    methods:{
     
      sendCommand(){
        
      },
      initData(){
        this.paramSettingLocal.unit = ''
        this.paramSettingLocal.scale = ''
      
      },
      cancelEdit(){     
        this.$emit('done')
      },
      confirmEdit(){
        this.sendCommand()
        this.$emit('done')
      }


    }
  }
</script>
<style scoped>

</style>