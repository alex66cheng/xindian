<template>
  <el-contianer style="display: flex">
    <el-container style="width: 30%">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span> {{ deviceInfo.my.id }} </span>
          <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
        </div>
        <div v-for="(param, index) in deviceInfo.mqtt" :key="index" class="text item" style="float: left; ">
          {{ index + ": " + param }}
        </div>
      </el-card>
    </el-container>
    <el-container style="width: 60%; display: block; padding: 20px">
      <el-container style="width: 100%">
        <el-button type="primary">添加</el-button>
        <el-button type="danger">刪除</el-button>
      </el-container>
      <el-table
      :data='deviceData'
      style='width: 100%;'>
        <el-table-column type='expand'>
          <template slot-scope='props'>
            <el-container style="display: flex">
              <el-container style="width: 50%">
                <el-form label-position='left' inline class='demo-table-expand'>
                  <el-form-item v-for="(item, key) in props.row.protocal" :key="key" :label=key style="width: 100%">
                    <span> {{ item }} </span>
                  </el-form-item>
                </el-form>
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
              @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-container>
  </el-contianer>
</template>

<script>
import ParamTable from "./gatewayConfig/ParamTable.vue"

export default {
  components:{
    ParamTable
  },
  computed: {
    deviceInfo: () => {
      return this.$store.state.config.my + ',' + this.$store.state.config.mqtt
    },
    deviceData: () => {
      return this.$store.state.config.all
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row)
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
