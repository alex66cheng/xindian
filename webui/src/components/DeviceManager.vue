<template>
  <div style="padding: 20px;">
    <el-row>
      <!--加入機器開始-->
      <el-col :span="2">
        <el-button type="primary" @click="dialogVisible = true">{{$t('add')}}</el-button>
      </el-col>
      <el-dialog
        title="加入一台新的機器"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
        <el-form ref="form" :model="addForm" label-position="top" style="padding-left: 30px; padding-right: 30px">
          <el-form-item>
            <el-input v-model="addForm.id" placeholder="ID"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="addForm.type" placeholder="Type"></el-input>
          </el-form-item>
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" :disabled="addDisable" @click="addDevice">立即創建 </el-button>
        </el-form>
      </el-dialog>
      <!--加入機器結束-->
      
      <!--刪除機器開始-->
      <el-col :span="2">
        <el-button >{{$t('delete')}}</el-button>
      </el-col>
      <!--刪除機器結束-->
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
          :data="deviceData"
          style="width: 100%; float: left;">
          <el-table-column
            label="id"
            width="150">
            <template slot-scope="scope">
              <span >{{scope.row.id}}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="type"
            width="150">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{scope.row.type}}</span>
            </template>
          </el-table-column>
          <el-table-column
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
              <el-button @click="gotoConfig(scope.row.id)" type="text" size="big">config</el-button>
              <el-button @click="gotoConfig(scope.row.id)" type="text" size="big" style="margin-left: 0px">modbus</el-button>
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
        dialogVisible: false,
        deviceData:[
          {
            id: 'xa00001',
            type: '700',
            status: true
          },
          {
            id: 'KA-00002',
            type: '700',
            status: true
          },
         
        ],
        addForm:{
          id: '',
          type: ''
        }
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
      },
      addDisable: function(){
        return this.addForm.id.length == 0 || this.addForm.type.length == 0
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
      },
      handleClose(done) {
        this.$confirm('確定取消?')
          .then(_ => {
            done()
          })
          .catch(_ => {})
      },
      addDevice(){
        this.deviceData.push({id: this.addForm.id, type: this.addForm.type, status: true})
        console.log({id: this.addForm.id, type: this.addForm.type, status: true})
        console.log(this.deviceData)
        this.addForm.id = ''
        this.addForm.type = ''
        this.dialogVisible = false
        

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
