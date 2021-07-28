<template>
  <el-container style="height: 100%;">
    <el-menu  :router="true" style="height: 100%; width: 100%" :default-openeds="['dashboard']">

      <img href="/" v-bind:src="logo" height="60px" style="margin: 10%"> 
      
      
      <el-menu-item @click="gotoPage('/monitor/dashboard/gateway601')">{{ $t("Dashboard_Title") }}</el-menu-item>
      <el-menu-item @click="gotoPage('/monitor/deviceStatus')">Device Status</el-menu-item>
      <el-menu-item @click="gotoPage('/monitor/deviceManager')">{{ $t("Gateway_Command")}}</el-menu-item>
      <el-menu-item @click="gotoPage('/monitor/problem/solved')">{{ $t("problem")}}</el-menu-item>

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
      logo: '',
      
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
    },
    gotoPage(paths){
      let finalPath = '/'+ this.$router.currentRoute.params.lang + paths
      console.log(finalPath)
      this.$router.push({path : finalPath})
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
