<template>
<div>
  <el-row>
    <el-col span="4">
      <div class="device-parameter">
        <el-tag>S/N</el-tag>
        <div>{{SN}}</div>
      </div>
    </el-col>
    <el-col span="4">
      <div class="device-parameter">
        <el-tag>Type</el-tag>
        <div>{{type}}</div>
      </div>
    </el-col>
    <el-col span="4">
      <div class="device-parameter">
        <el-tag>Status</el-tag>
        <div>{{status}}</div>
      </div>
    </el-col>
    <el-col span="4">
      
    </el-col>
    <el-col span="4">
    </el-col>
    <el-col span="4">
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
    }

}
</script>

<style scoped>
.device-parameter{
  position: relative;
  top: 50px;
}
</style>
