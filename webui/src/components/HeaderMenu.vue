<template>
  <el-menu
    :router="true"
    
    class="el-menu-demo"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    text-align="left"
    style = "height:60px; width: 100%; padding-left: 20px;padding-right: 20px; border-bottom:0px;">
    <el-submenu index="2-4">
      <template slot="title">language</template>
      <el-menu-item @click="changeLang('cn')">cn</el-menu-item>
      <el-menu-item @click="changeLang('jp')">jp</el-menu-item>
      <el-menu-item index="2-4-3">item three</el-menu-item>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title">Workspace</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
      
    </el-submenu>
    <el-menu-item index="3" disabled>Info</el-menu-item>
    <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">Orders</a></el-menu-item>
    
    
    <div v-if="loggedIn" style="float: right; color: white">loggedIn</div>
    <el-dropdown background-color="#545c64"
      text-color="#fff" @command="handleCommand">
      <i class="el-icon-setting" style="margin: 15px; font-size: 30px; color: white"></i>
      <el-dropdown-menu slot="dropdown" :router="true">
        <el-dropdown-item command="login">login</el-dropdown-item>
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
      
      if(command == 'login'){
        console.log('login')
        try{
           const data =  firebase.auth().signOut()
           console.log(data)
           this.$router.replace({name: 'login'})
        }catch(err){
          console.log(err)
        }
      }
    },
    changeLang(language){
      console.log(this.$router.currentRoute)
      this.$root.$i18n.locale = language
      this.$router.push({name: this.$router.currentRoute.name, params:{lang: language} })
      
    }
    
    
  }
}
</script>

