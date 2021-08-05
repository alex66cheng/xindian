<template>
  <div>
    <h1> Welcome! </h1>
    <el-button type="primary" @click="$router.push({name: 'login'})">導向 monitor</el-button>
    <el-row :gutter="10">
      <el-col :span="8" :offset="8">
      <el-button type="primary" class="button" @click="$router.push({name: 'login'})">登入</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default{
 methods:{
    
 }
}
</script>


<style scoped>
  .big-logo{
    height: 100px;
  }
</style>