<template>
  <div>
    
    <div vif="error" class="error">{{error.message}}</div>
    <form @submit.prevent="pressed">
      Register 
      <div class = "email">
        <input type="email" v-model="email" placeholder="email">
      </div>
      <div class="password">
        <input type="password" v-model="password" placeholder="password">
      </div>
      <button type="submit">Register</button>
    </form>
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
      error: ''
    }
  },
  methods:{
    async pressed(){
      try{
        const user = firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        console.log(user)
        this.$router.replace({name: 'login'})

      }catch(err){
        console.log(err)
      }
      
      alert('submitted')
    }
  }
}

</script>

<style scoped>
.error{
  color: red;
  font-size:18px;
}

input {
  width: 400px;
  padding: 30px;
  margin: 20px;
  font-size: 21px;

}

button{
  width: 400px;
  height:75px;
  font-size: 100%
}
</style>
