<template>
  <router-tab style="height: 100%"/>
</template>

<script>
  export default {
    data(){
      return {
        tabs: []
      }
    },
    /*created(){
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
          var all_tabs = [{to: '/' + this.$route.params.lang + '/monitor/dashboardManager/dashboard-table'}]
          /*for(var room of objres.area){
            console.log('get all room name ' + room.name)
            console.log('/' + this.$route.params.lang + '/monitor/dashboardManager/dashboard/' + room.name)
            all_tabs.push('/' + this.$route.params.lang + '/monitor/dashboardManager/dashboard/' + room.name)
          }
          console.log('all_tabs: ' + JSON.stringify(all_tabs))
          
          this.tabs = all_tabs

          console.log('this.tabs: ' + JSON.stringify(this.tabs))
        })
        .catch( error => {
          console.log(error)
        })
      }
    },
    */
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