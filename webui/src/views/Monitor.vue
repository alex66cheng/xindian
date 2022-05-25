<template> 
  <el-container style="height: 100%; border: 1px solid #eee">
    <!-- left side menu for different pages-->
    <el-aside class="drop-shadow" width="15%" style="background-color: rgb(238, 241, 246) ">
      <AsideMenu/>
    </el-aside>
    <!--header containing different tag and main-->
    <el-container style = "height: 100%">
      <!--tage header-->
      <el-header style="text-align: right; font-size: 12px; background-color: #545c64 ">
        <HeaderMenu/>
      </el-header>
      <!--main pages-->
      <el-main>

        <router-view/>
        
      </el-main>
      
      
    </el-container>


  </el-container>
</template>


<script>
  // import firebase from 'firebase'
  // import 'firebase/messaging'

  import AsideMenu from '../components/AsideMenu.vue'
  import HeaderMenu from '../components/HeaderMenu.vue'
  export default {
    
    name : 'monitor',
    created(){
      // const messaging = firebase.messaging()
      // // These registration tokens come from the client FCM SDKs.
      // const registrationTokens = [
      //   this.$store.getMessageToken
      // ];

      // console.log(messaging)
      // console.log(registrationTokens)

      // // Subscribe the devices corresponding to the registration tokens to the
      // // topic.
      // const topic = 'test'
      // messaging.subscribeToTopic(registrationTokens, topic)
      //   .then((response) => {
      //     // See the MessagingTopicManagementResponse reference documentation
      //     // for the contents of response.
      //     console.log('Successfully subscribed to topic:', response);
      //   })
      //   .catch((error) => {
      //     console.log('Error subscribing to topic:', error);
      //   });
    },
    data() {
      return {
      }
    },
    components: {
      AsideMenu,
      HeaderMenu
    },
    
    
  }
</script>



<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
    background-color:#f1f5f7;
     
  }

  .el-main {
    position: relative;
  }

  .first-title {
    font-family: PingFangSC-Regular;
    font-size: 36px;
    color: #31394d;
    letter-spacing: 0;
    text-align: left;
    margin-top: 34px;
    margin-bottom: 28px;
  }

  .bg-write {
  min-width: 930px;
  max-width: 945px;
  overflow: hidden;
  background: #ffffff;
  box-shadow: 0 1px 4px 0 #e5e9f2;
  border-radius: 5px;
  }

  .left-message {
      @media (min-width: 768px) {
        float: right;
      }
      @media (min-width: 1280px) {
        float: left;
      }
  }

  .float-left {
    float: left;
  }

  .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }


  
</style>