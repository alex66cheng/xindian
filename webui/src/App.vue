<template>
  <div id="app">
  <!--<fullscreen ref="fullscreen" @change="fullscreenChange">-->
    <router-view/>
  <!--</fullscreen>-->
  <!--<button type="button" @click="toggle" >Fullscreen</button>-->
  </div>
</template>


<script>
export default {
  name: 'app',
  changeLang() {
    let locale = localStorage.getItem('language') || 'jp'
    let temp = locale === 'jp' ? 'en' : 'jp'
    this.$i18n.locale = temp
    localStorage.language = temp
  },
  data() {
   return {
    fullscreen: false
   }
  },
  methods: {
    toggle() {
     this.$refs['fullscreen'].toggle()
   },
   fullscreenChange(fullscreen) {
     this.fullscreen = fullscreen
   }
  }
}
</script>

<style lang="scss">

// Jack 部分開始
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: auto;
}

router-tab{ 
  border: 2px gray;
}

.drop-shadow{ // 可用於幫物體加上 shadow
  filter: drop-shadow(1px 1px 12px rgba(0, 0, 0, 0.1));
}

html,body,#app{
  height: 100%;
}

// 此三個用在 login 跟 register
.middle-input-card{
    height: 500px;
    max-width: 600px;
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10%;
    margin-bottom: auto;
    border-radius: 10px;
  }

.middle-input-form{
  min-width: 250px;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
}

.middle-input-box{
  margin-bottom: 20px;
}

.error{
  color: red;
  font-size: 12px;
  text-align: initial;
}

.router-page{
  padding: 40px;
}
// Jack 部分結束
</style>
