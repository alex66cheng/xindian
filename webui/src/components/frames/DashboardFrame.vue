<template>
  <router-tab :i18n="i18n" style="height: 100%"/>
</template>

<script>
  export default {
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

  .box-card {
    width: 60%;
    margin: 5% 20% 15% 20%;
  }

</style>