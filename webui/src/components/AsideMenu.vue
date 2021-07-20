<template>
  <el-container style="height: 100%; border : 1px ">
    <el-menu  :router="true" style="width: 100%">
      <nav id="app" style = "padding: 12px" >
        <a href="/" >
          <div style="width: 100%">  
            <img src="../assets/img/logo.png" 
            width="59px" height="33px">
          </div>
        </a>
      </nav>      
      
      <el-submenu index="dashboard">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{ $t("Dashboard_Title") }}</span>
        </template>
        <el-menu-item-group id="room-group" :title="$t('room')">
          <el-menu-item index="/monitor/dashboard/gateway601">601</el-menu-item>
          <el-menu-item index="/monitor/dashboard/gateway602">602</el-menu-item>
          <el-menu-item index="/monitor/dashboard/gateway603">603</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="/monitor/deviceStatus">Device Status</el-menu-item>
      <el-menu-item index="/monitor/gatewayCommand">{{ $t("Gateway_Command")}}</el-menu-item>
      <el-menu-item index="/monitor/problem/solved">{{ $t("problem")}}</el-menu-item>
             
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
  methods:{
    ative(){
      console.log('dosoth')
    }
  }
})
</script>

<style>
#room-group{
  padding: 7px 8px 7px 14px;
    line-height: normal;
    font-size: 12px;
    color: #909399;
}
</style>
