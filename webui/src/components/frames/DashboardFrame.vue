<template>
  <router-tab :tabs="tabs" :i18n="i18n" style="height: 100%" class="drop-shadow"/>
</template>

<script>
  export default {
    data(){
      return {
        tabs: [
          '/jp/monitor/dashboardManager/dashboard/601',

          { to: '/jp/monitor/dashboardManager/dashboard/602', title: '602' },

          { to: '/jp/monitor/dashboardManager/dashboard/603', title: '603' }
        ]
      }
    },
    methods: {
      // custom method
      i18n(key, params) {
        // $getI18n() is the global method for internationalization in real projects
        return this.$getI18n(key, params)
      }
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