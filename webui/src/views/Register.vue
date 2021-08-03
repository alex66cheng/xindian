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
        <span>Already have account? Click here to <el-link type="primary" @click="toLogin">login</el-link></span>
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
      errors: []
    }
  },
  methods:{
    checkForm: function () {
      this.errors = []

      if (!this.email)
        this.errors.push('Email required.')
      else if (!this.validEmail(this.email)) 
        this.errors.push('Valid email required.')

      if (!this.password && !this.check_password)
        this.errors.push('Password required.')
      else if (this.password != this.check_password)
        this.errors.push('Check Password is invalid.')
      
      if (this.errors.length == 0){
        return true
      }else{
        this.$message({
          message: this.errors[0],
          type: 'warning'
        });
        return false;
      }
    },

    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    },

    async onSubmit(){
      if(this.checkForm()){
        try{
          const user = firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
          console.log(user)
          this.$router.replace({name: 'login'})

        }catch(err){
          console.log(err)
          this.$message({
            message: err.message,
            type: 'warning'
          });
        }
        
        alert('submitted')
      }
    },

    toLogin(){
      this.$router.replace({name: 'login'})
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
