<template>
  
  <div>
    <p>test</p>
    <DeviceTable :interfaceId="interfaceId"></DeviceTable>
    
  </div>
</template>
<script>
import DeviceTable from '../Interface/Device/DeviceTable.vue'

export default {
  components: {
    DeviceTable,
  },
  data(){
    return {
      interfaceId: '1',
    }
  }
  
}
</script>
