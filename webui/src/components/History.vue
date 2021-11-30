<template>
  <div>
    <line-chart :data="chartData"></line-chart>
  </div>
</template>

<script>
import VueChartkick from 'vue-chartkick'
export default {
  data(){
    return {
      chartData: [
        ['Jan', 44], 
        ['Feb', 27],
        ['Mar', 60],
        ['Apr', 55],
        ['May', 37],
        ['Jun', 40],
        ['Jul', 69],
        ['Aug', 33],
        ['Sept', 76],
        ['Oct', 90],
        ['Nov', 34],
        ['Dec', 22]
      ]
    }
  },
 
}
</script>
