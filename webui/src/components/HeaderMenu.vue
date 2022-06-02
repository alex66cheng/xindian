<template>
  <el-menu
    :router="true"
    
    class="el-menu-demo"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    text-align="left"
    style = "height:60px; width: 97%; padding-left: 20px;padding-right: 20px; border-bottom:0px;">
    <el-submenu index="2-4">
      <template slot="title">{{$t('language')}}</template>
      <el-menu-item @click="changeLang('cn')">{{$t('cn')}}</el-menu-item>
      <el-menu-item @click="changeLang('jp')">{{$t('jp')}}</el-menu-item>
      <el-menu-item @click="changeLang('en')">{{$t('en')}}</el-menu-item>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title">Workspace</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
      
    </el-submenu>
    <el-menu-item index="3" disabled>Info</el-menu-item>
    <el-menu-item @click="registeFCM">>Registe FCM</el-menu-item>
    
    
    <div style="float: right">
      <el-dropdown background-color="#545c64"
        text-color="#fff" @command="handleCommand"> 
        <i class="el-icon-setting" style="margin: 15px; font-size: 30px; color: white"></i>
        <el-dropdown-menu slot="dropdown" :router="true">
          <el-dropdown-item command="login">logout</el-dropdown-item>
          <el-dropdown-item>Add</el-dropdown-item>
          <el-dropdown-item>Delete</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>     
    </div>
    <div style="float: right; color: white" v-if="loggedIn">loggedIn</div>
  </el-menu>
</template> 

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/messaging'

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
      
      if(command == 'logout'){
        console.log('logout')
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
      
    },

    /** FCM */
    initFCM () {
      this.$messaging.onTokenRefresh(() => {
        this.$messaging.getToken().then((refreshedToken) => {
          console.log('Token refreshed.')
          this.setTokenSentToServer(false)
          this.sendTokenToServer(refreshedToken)
        })
      })
    },
    registeFCM () {
      this.$messaging.requestPermission().then(() => {
        console.log('Notification permission granted.')
        this.getToken()
      }).catch((err) => {
        console.log('Unable to get permission to notify.', err)
      })
    },
    getToken () {
      this.$messaging.getToken().then((currentToken) => {
        if (currentToken) {
          this.sendTokenToServer(currentToken)
        } else {
          console.log('No Instance ID token available. Request permission to generate one.')
          // Show permission UI.
          this.setTokenSentToServer(false)
        }
      }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err)
        this.setTokenSentToServer(false)
      })
    },
    sendTokenToServer (token) {
      // TODO: Send Token To Your Server
    },
    setTokenSentToServer (type) {
      if (type) return
      // TODO: Delete Register Token From Your Server
    }
    
  }
}
</script>

