<template>
  <el-menu
    :router="true"
    
    class="el-menu-demo"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    text-align="left"
    style = "width: 100%">
    <el-menu-item index="1" >Processing Center</el-menu-item>
    <el-submenu index="2">
      <template slot="title">Workspace</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
      <el-submenu index="2-4">
        <template slot="title">item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="3" disabled>Info</el-menu-item>
    <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">Orders</a></el-menu-item>
    
    
    <div v-if="loggedIn" style="float: right; color: white">loggedIn</div>
    <el-dropdown background-color="#545c64"
      text-color="#fff" @command="handleCommand">
      <i class="el-icon-setting" style="margin-right: 15px; font-size: 30px; color: white"></i>
      <el-dropdown-menu slot="dropdown" :router="true">
        <el-dropdown-item command="signOut">logout</el-dropdown-item>
        <el-dropdown-item>Add</el-dropdown-item>
        <el-dropdown-item>Delete</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>          
  </el-menu>
</template> 

<script>
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  
  data(){
    return{
      loggedIn: false
    }
  },
  created(){
    firebase.auth().onAuthStateChanged(user=>{
      
      this.loggedIn = !!user
      
    })
  },
  methods: {
    handleCommand(command) {
      
      if(command == 'signOut'){
        console.log('signOut')
        try{
           const data =  firebase.auth().signOut()
           console.log(data)
           this.$router.replace({name: 'login'})
        }catch(err){
          console.log(err)
        }
      }
    },
    
    
  }
}
</script>

