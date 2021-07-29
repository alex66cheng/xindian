<template>
<div>
  <el-row>
    <el-col :span="4">
      <div class="device-parameter">
        <el-tag>S/N</el-tag>
        <div class="device-value">{{SN}}</div>
      </div>
    </el-col>
    <el-col :span="4">
      <div class="device-parameter">
        <el-tag>Type</el-tag>
        <div class="device-value">{{type}}</div>
      </div>
    </el-col>
    <el-col :span="4">
      <div class="device-parameter">
        <el-tag>Status</el-tag>
        <div class="device-value">{{status}}</div>
      </div>
    </el-col>
    <el-col :span="4">
      <div class="button-configModbus">
        <el-button @click="gotoConfig">config</el-button>
      </div>

    </el-col>
    <el-col :span="4">
      <div class="">
        <el-button @click="gotoConfig">modbus</el-button>
      </div>
    </el-col>
    <el-col :span="4">
    </el-col>
  
  </el-row>
</div>
</template>

<script>


export default {
    data(){
      return{
        SN: 'KA-00001',
        type: '700',
        status: 'active'

      }
    },
    methods:{
      gotoConfig(){
        this.$router.push({name:'gatewayConfig', params:{device: this.SN}})
      }
    }

}
</script>

<style scoped>
.device-parameter{
  position: relative;
  top: 50px;
}
.device-value{
  position: relative;
  top: 30px;
}
</style>
