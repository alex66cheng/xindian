<template>
    <div>
      <router-tab :i18n="i18n"/>
    </div>
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
