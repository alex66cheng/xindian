<template>
  <el-container>
    <el-table
    :data="paramArr"
    style="width: 100%; float: left;">
      <el-table-column
        label="id"
        width="80">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{scope.row.id}}</span>
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('name')"
        width="110">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{scope.row.name}}</span>
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('device')"
        width="80">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{scope.row.dev}}</span>
        </template>
      </el-table-column>
      <el-table-column>
        <template slot="header" slot-scope="scope">
          <el-button @click="centerDialogVisible = true">{{$t("add")}}</el-button>
        </template>
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">{{ $t("Setup")}}</el-button>
          <el-button
            size="mini"
            @click="handelDelete(scope.$index, scope.row)">{{ $t("Delete")}}</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      title="add sensor"
      :visible.sync="centerDialogVisible"
      width="30%"
      center>
      <el-row :gutter="10">
        <el-col :span="8">
          <div>id</div>
          <div>
            <el-input
              v-model="addParam.id"
              clearable>
            </el-input>
          </div>
        </el-col>
        <el-col :span="8">
          <div>name</div>
          <div>  
            <el-input
              v-model="addParam.name"
              clearable>
            </el-input>
          </div>
        </el-col>
        <el-col :span="8">
          <div>device</div>
          <div>  
            <el-input
              v-model="addParam.dev"
              clearable>
            </el-input>
          </div>
        </el-col>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button @click="clearNewSensor">Cancel</el-button>
        <el-button type="primary" @click="confirmNewSensor">Confirm</el-button>
      </span>
    </el-dialog>

    <el-dialog
      title="add sensor"
      :visible.sync="setUpDialogVisible"
      width="70%"
      center>
      <ParamConfig
        :interfaceId="interfaceId"
        :paramIndex="paramIndex"
        @done="setUpDialogVisible = false"/>
      
    </el-dialog>
  </el-container>
</template>
<script>
import ParamConfig from './ParamConfig.vue'

export default {
  components:{
    ParamConfig
  },
  props:{
    interfaceId: String,
  },
  data(){
    return{
      centerDialogVisible: false,
      
      
      addParam:{
        id: '', 
        name: '',
        dev: ''        
      },
      
      setUpDialogVisible: false,
      sensorIndex: 0,
      paramIndex: 0,
    }
  },
  computed:{
    paramArr: function(){
      let all = this.$store.state.config.all
      return all.find(x => x.id === this.interfaceId).protocal.param
    },
    testid: function(){
      return this.$store.state.testid
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row)
      console.log(row.id)
      this.sensorIndex = index
      this.paramIndex = index
      this.setUpDialogVisible = true
    },
    
    clearNewSensor(){
      this.addParam.area = ''
      this.addParam.pa_id = ''
      this.addParam.sensor = ''
      this.setUpDialogVisible = false
    },
    confirmNewSensor(){
      this.paramArr.push({id: this.addParam.id, name: this.addParam.name ,dev: this.addParam.dev})
      this.addParam.id = ''
      this.addParam.name = ''
      this.addParam.dev = ''
      this.centerDialogVisible = false
      this.paramArr.sort(function(a, b){
        return (a.area-b.area)
      })
      console.log('confirm')
    }
    
  },
  
}
</script>
<style lang="">
  
</style>