<template>
  <div>
    <h1> Welcome! </h1>
    <el-button type="primary" onclick="document.location.href='/monitor'">導向 monitor</el-button>
    <el-row gutter="20">
      <el-col :span="8" :offset="3">
        <el-card :body-style="{ padding: '50px' }">
          <img class="big-logo image" src="..\assets\img\KASO_logo.png">
          <div style="padding: 14px;">
            <span>挖喜 KASO</span>
            <el-button type="primary" class="button">登入</el-button>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8" :offset="2">
        <el-card :body-style="{ padding: '50px' }">
          <img class="big-logo image" src="..\assets\img\OHGA_logo.jpg">
          <div style="padding: 14px;">
            <span>挖喜 OHGA</span>
            <el-button type="primary" class="button">登入</el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
  .big-logo{
    height: 100px;
  }
</style>