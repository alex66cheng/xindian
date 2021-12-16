<template>
  <el-container style="display: block; padding: 20px">
    <el-container style="width: 100%">
      <el-button type="primary" @click="openAddDialog()" style="float: right">添加</el-button>
    </el-container>
    <el-table
    :data='deviceData'
    style='width: 100%;'>
      <el-table-column type='expand'>
        <template slot-scope='props'>
          <el-container style="display: flex">
            <el-container style="width: 50%">
              <DeviceTable :interfaceId="props.row.id"></DeviceTable>
            </el-container>
            <el-container style="width: 50%">
              <ParamTable :interfaceId="props.row.id"></ParamTable>
            </el-container>
          </el-container>
        </template>
      </el-table-column>
      <el-table-column
        label='ID'
        prop='id'>
      </el-table-column>
      <el-table-column
        label='Device'
        prop='interface.dev'>
      </el-table-column>
      <el-table-column
        label='Protocal'
        prop='protocal.type'>
      </el-table-column>
      <el-table-column>
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="openEditDialog(scope.$index, scope.row)">Edit</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      title="提示"
      v-if="editDialogVisible"
      :visible.sync="editDialogVisible"
      width="30%">
      <InterfaceEditForm :InterfaceId="editInterfaceId"/>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="editDialogVisible = false">關閉</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="Interface 設置"
      v-if="addDialogVisible"
      :visible.sync="addDialogVisible"
      width="30%">
      <InterfaceAddForm />
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="addDialogVisible = false">關閉</el-button>
      </span>
    </el-dialog>
  </el-container>
</template>

<script>
import DeviceTable from './Device/DeviceTable.vue'
import ParamTable from './Param/ParamTable.vue'
import InterfaceAddForm from './InterfaceAddForm.vue'
import InterfaceEditForm from './InterfaceEditForm.vue'

export default {
  data(){
    return {
      addDialogVisible: false,
      editDialogVisible: false,
      editInterfaceData: {}
    }
  },
  components:{
    DeviceTable,
    ParamTable, 
    InterfaceAddForm,
    InterfaceEditForm
  },
  computed: {
    deviceData: function(){
      return this.$store.state.config.all
    },
    deviceInfo: function(){
      console.log(Object.assign({}, this.$store.state.config.my, this.$store.state.config.mqtt))
      return Object.assign({}, this.$store.state.config.my, this.$store.state.config.mqtt)
    }
  },
  methods: {
    openAddDialog() {
      this.addDialogVisible = true
    },
    openEditDialog(index, row) {
      console.log(index, row)
      this.editInterfaceId = index
      this.editDialogVisible = true

      console.log(this.editInterfaceId)
    },
    handleDelete(index, row) {
      console.log(index, row)
    }
  },
  created(){
    this.device = this.$route.params.device
  }
}
</script>

<style scoped>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
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
    width: 480px;
  }
</style>
