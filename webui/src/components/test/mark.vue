<template>
  
  <div>
    <el-button @click="add">plus</el-button>
    <ParamTable :interfaceId="interfaceId"></ParamTable>
  </div>
</template>
<script>
import ParamTable from '../gatewayConfig/ParamTable.vue'
export default {
  components: {
    ParamTable
  },
  data(){
    return {
      interfaceId: '1',
    }
  },
  methods:{
    add(){
      this.interfaceId = String(parseInt(this.interfaceId,10)+1);
    }
  }
  
}
</script>
<style>
  
</style>