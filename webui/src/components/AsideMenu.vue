<template>
  <el-container style="height: 100%;">
    <el-menu  :router="true" style="height: 100%; width: 100%" :default-openeds="['dashboard']">

<<<<<<< HEAD
      <img href="/" src="../assets/img/OHGA_logo.jpg" height="60px" style="margin: 10%"> 
=======
      <img href="/" v-bind:src="logo" height="60px" style="margin: 10%"> 
>>>>>>> 3fa9d229b321af547d4d0dde7c01eca0e921e6c5
      
      <el-submenu index="dashboard">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{ $t("Dashboard_Title") }}</span>
        </template>
        <el-menu-item-group id="room-group" :title="$t('room')">
          <el-menu-item index="/dashboard/gateway601">601</el-menu-item>
          <el-menu-item index="/dashboard/gateway602">602</el-menu-item>
          <el-menu-item index="/dashboard/gateway603">603</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
<<<<<<< HEAD
      <el-menu-item index="/deviceStatus">Device Status</el-menu-item>
      <el-menu-item index="/gatewayCommand">{{ $t("Gateway_Command")}}</el-menu-item>
      <el-menu-item index="/problem/solved">{{ $t("problem")}}</el-menu-item>
=======
      <el-menu-item @click="openDashboard" index="/monitor/dashboard/gateway603">{{ $t("Dashboard_Title") }}</el-menu-item>
      <el-menu-item index="/monitor/deviceStatus">Device Status</el-menu-item>
      <el-menu-item index="/monitor/gatewayCommand">{{ $t("Gateway_Command")}}</el-menu-item>
      <el-menu-item index="/monitor/problem/solved">{{ $t("problem")}}</el-menu-item>
>>>>>>> 3fa9d229b321af547d4d0dde7c01eca0e921e6c5

    </el-menu>
  </el-container>       
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import logoconfig from '../assets/config/logoconfig.json'
import firebase from 'firebase/app'
import 'firebase/auth'
export default defineComponent({
  name: 'menu1',
  data() {
    return {
      logo: ''
    }
  },
  components: {

  },
  methods:{
    ative(){
      console.log('dosoth')
    },
    openDashboard(){
      this.$tabs.open('/monitor/dashboard/gateway603')
      this.$tabs.open('/monitor/dashboard/gateway602')
      this.$tabs.open('/monitor/dashboard/gateway601')    
    }
  },
  created(){
    
    
    this.logo = logoconfig[String(firebase.auth().currentUser.email)]
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
