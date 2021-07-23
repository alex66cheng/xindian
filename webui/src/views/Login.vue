<template>
  <div>
    login
    <form @submit.prevent="pressed">
      <div>
        <input type="email" placeholder="email" v-model="email">    
      </div>
      <div>
        <input type="password" placeholder="password" v-model="password">
      </div>
      <button type="submit">Login</button>
    </form>
    <div class="error" v-if="error">{{error.message}}</div>
    <span>Need an account? Click here to <router-link to="/register">register</router-link></span>
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
    async pressed(){
      try{
        const val = await firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        console.log(val)
        this.$router.replace({name: 'gateway601'})
      }catch(err){
        console.log(err)
      }
      
    }
  }
}

</script>

<style scoped>


</style>
