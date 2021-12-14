<template>
  
  <div>
    <p>test</p>
    <DeviceTable :interfaceId="interfaceId"></DeviceTable>
    
  </div>
</template>
<script>
import DeviceTable from '../deviceConfig/DeviceTable.vue'

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
