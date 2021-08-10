<template>
  <router-tab v-if="tabs.length > 0" :tabs="tabs" :i18n="i18n" style="height: 100%" class="drop-shadow"/>
</template>

<script>
  export default {
    data(){
      return {
        tabs: []
      }
    },
    created(){
      this.getTabs()
    },
    methods: {
      // custom method
      i18n(key, params) {
        // $getI18n() is the global method for internationalization in real projects
        return this.$getI18n(key, params)
      },
      getTabs() {
        this.$ajax({
          method: 'GET',
          url: 'http://52.197.39.218:8080/sensordata',
          async: false
        })
        .then( res => {
          var objstr = JSON.stringify(res.data)
          var objres = JSON.parse(objstr)
          var all_tabs = []
          for(var room of objres.area){
            console.log('get all room name ' + room.name)
            console.log('/jp/monitor/dashboardManager/dashboard/' + room.name)
            all_tabs.push('/jp/monitor/dashboardManager/dashboard/' + room.name)
          }
          console.log('all_data: ' + JSON.stringify(all_tabs))
          
          this.tabs = all_tabs
        })
        .catch( error => {
          console.log(error)
        })
      }
    },
    computed:{
       
    }
  }
</script>

<style>
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .router-tab__nav{
    float: left;
  }

</style>