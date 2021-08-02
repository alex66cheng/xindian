<template>
  <div style="padding: 20px;">
    <el-row>
      <el-col :span="2">
        <el-button type="primary">{{$t('add')}}</el-button>
      </el-col>
      <el-col :span="2">
        <el-button >{{$t('delete')}}</el-button>
      </el-col>
      <el-col :span="20" align="right">
        <el-input
          scope
          style="width: 240px;"
          v-model="search"
          :placeholder="$t('search_input_placeholder')"
        />
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-table
          :data="tableData"
          height="100%"
          stripe
          style="width: 100%;">
          <el-table-column 
            prop="select"
            type="selection" 
            :reserve-selection="true" 
            width="50">
          </el-table-column>
          <el-table-column
            prop="id"
            label="ID"
            width="90">
          </el-table-column>
          <el-table-column
            prop="sn"
            label="S/N"
            width="180">
          </el-table-column>
          <el-table-column
            prop="type"
            :label="$t('Type')"
            width="180">
          </el-table-column>
          <el-table-column
            prop="status"
            :label="$t('Status')">
            <template slot-scope="scope">
              <el-switch active-color="#13ce66" inactive-color="#ff4949" v-model="scope.row.status" @change=changeStatus(scope.row)>
              </el-switch>
            </template>
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="100">
            <template slot-scope="scope">
              <el-button @click="gotoConfig(scope.row.sn)" type="text" size="big">config</el-button>
              <el-button @click="gotoConfig(scope.row.sn)" type="text" size="big">modbus</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script>


export default {
    data(){
      return{
        search: '',
        deviceData:[
          {
            id: 1,
            sn: 'KA-00001',
            type: '700',
            status: true
          },
          {
            id: 2,
            sn: 'KA-00002',
            type: '700',
            status: true
          }
        ]
      }
    },
    computed: {
      // 實時監聽表格
      tableData: function() {
          const search = this.search
          if (search) {
              return this.deviceData.filter(deviceData => {
                  return Object.keys(deviceData).some(key => {
                      return String(deviceData[key]).toLowerCase().indexOf(search) > -1
                  })
              })
          }
          return this.deviceData
      }
    },
    methods:{
      gotoConfig(target_sn){
        this.$router.push({name:'gatewayConfig', params:{device: target_sn}})
      },
      changeStatus(row){ // 到時候修該 status 要用到
        const data = {
          id: row.id,
          status: row.status,
        }
      }
    }

}
</script>

<style scoped>
.device-parameter{
  position: relative;
  top: 50px;
}
.device-value{
  position: relative;
  top: 30px;
}
</style>
