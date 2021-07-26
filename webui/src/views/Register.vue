<template>
  <div style="height: 100%; background-color: #f5f7fa">
      <el-page-header @back="goBack" content="Register" style="background-color: white"></el-page-header>
      <el-card class="middle-input-card box-card">
        <h1 style="margin-top: 100px;">Register</h1>
        <form class="middle-input-form" @submit.prevent="pressed">
          <el-input class="middle-input-box" placeholder="Email" v-model="email"></el-input>
          <el-input class="middle-input-box" placeholder="Password" v-model="password" show-password></el-input>
          <el-input class="middle-input-box" placeholder="Check Password" v-model="check_password" show-password></el-input>
          <el-button style="margin-bottom: 20px;" type="primary" @click="onSubmit">Register</el-button>
        </form>
        <div class="error" v-if="error">{{error.message}}</div>
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
      check_password: '', 
      error: ''
    }
  },
  methods:{
    async onSubmit(){
      try{
        const user = firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        console.log(user)
        this.$router.replace({name: 'gateway601'})

      }catch(err){
        console.log(err)
      }
      
      alert('submitted')
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
