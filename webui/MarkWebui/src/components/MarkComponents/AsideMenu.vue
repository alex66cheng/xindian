<template>
  <el-container style="height: 100%; border : 1px ">
    <el-menu  :router="true" style="width: 100%">
      <nav id="app" style = "padding: 12px" >
        <a href="/" >
          <div style="width: 100%">  
            <img src="../../assets/img/logo.png" 
            width="59px" height="33px">
          </div>
        </a>
      </nav>      
      <el-menu-item index="/markHome/dashboard">{{ $t("Dashboard_Title") }}</el-menu-item>
      <el-menu-item index="/markHome/deviceStatus">Device Status</el-menu-item>
      <el-menu-item index="/markHome/problem/solved">{{ $t("problem")}}</el-menu-item>       
    </el-menu>
  </el-container>       
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'menu1',
  data() {
    return {
    }
  },
  components: {

  },
})
</script>

<style>

</style>
