<template>
  <div style="height: 100%; background-color: #f5f7fa">
      <el-page-header @back="goBack" content="Login" style="background-color: white"></el-page-header>
      <el-card class="middle-input-card box-card">
        <h1 style="margin-top: 100px;">Login</h1>
        <form class="middle-input-form" @submit.prevent="pressed">
          <el-input class="middle-input-box" placeholder="Email" v-model="email"></el-input>
          <el-input class="middle-input-box" placeholder="Password" v-model="password" show-password></el-input>
          <el-button style="margin-bottom: 20px;" type="primary" @click="onSubmit">Login</el-button>
        </form>
        <div class="error" v-if="error">{{error.message}}</div>
        <span>Need an account? Click here to <router-link to="/register">register</router-link></span>
      </el-card>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  data(){
    return{
      email: '',
      password: '',
      error: '',
    }
  },
  methods: {
    async onSubmit(){
      try{
        const val = await firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        console.log(val)
        this.$router.replace({name: 'gateway601'})
      }catch(err){
        console.log(err)
      }
      
    },
    
    goBack() {
      console.log('go back')
      window.location.href = '/'
    }
  }
}

</script>

<style scoped>


</style>
