<template>
<div>
  <router-tab :tabs="tabs" :i18n="i18n" style="height: 100%" class="drop-shadow"/>
</div>
</template>

<script>
  export default {
    data(){
      return {
        tabs: [
          '/jp/monitor/dashboard/gateway601',

          { to: '/jp/monitor/dashboard/gateway602', title: '602' },

          { to: '/jp/monitor/dashboard/gateway603', title: '603' }
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

  .text {
    font-size: 28px;
  }

  .item {
    margin: 5vh;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .dashboard_data {
    width: 60%;
    margin: 5% 20% 15% 20%;
  }

  .router-tab__nav{
    float: left;
  }

</style>