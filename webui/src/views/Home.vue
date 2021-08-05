<template>
  <div>
    <h1> Welcome! </h1>
    <el-button type="primary" @click="toMonitor">導向 monitor</el-button>
    <el-row :gutter="10">
      <el-col :span="8" :offset="8">
        <el-card :body-style="{ padding: '50px' }">
          <img class="big-logo image" src="../assets/img/KASO_logo.png">
          <div style="padding: 14px;">
            <span>挖喜 KASO</span>
            <el-button type="primary" class="button" @click="toLogin">登入</el-button>
          </div>
        </el-card>
      </el-col>
      
    </el-row>
  </div>
</template>

<script>
export default{
 methods:{
    toLogin(){
      this.$router.push({name: 'login'})
    },
    toMonitor(){
      this.$router.push({name: 'monitor'})
    }
 }
}
</script>


<style scoped>
  .big-logo{
    height: 100px;
  }
</style>