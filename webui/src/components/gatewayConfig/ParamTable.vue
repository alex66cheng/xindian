<template>
  <div>  
    <div>
      <el-table
      :data="sensorArr"
      style="width: 100%; float: left;">
        <el-table-column
          label="id"
          width="100">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{scope.row.id}}</span>
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('name')"
          width="100">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{scope.row.name}}</span>
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('device')"
          width="100">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{$t(scope.row.dev)}}</span>
          </template>
        </el-table-column>
        <el-table-column
          :label="$t('value')"
          width="100">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{scope.row.value}}</span>
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
          </template>
        </el-table-column>
      </el-table>
    </div>
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
              v-model="addSensor.id"
              clearable>
            </el-input>
          </div>
        </el-col>
        <el-col :span="8">
          <div>name</div>
          <div>  
            <el-input
              v-model="addSensor.name"
              clearable>
            </el-input>
          </div>
        </el-col>
        <el-col :span="8">
          <div>device</div>
          <div>  
            <el-input
              v-model="addSensor.dev"
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
      <ParamConfig  outer_pa_id="temp" outer_if_id="usb0" :outer_pa_name="sensorArr[sensorIndex].sensor" 
        @done="setUpDialogVisible = false"/>
      
    </el-dialog>
  </div>
</template>
<script>
import ParamConfig from './ParamConfig.vue'

export default {
  components:{
    ParamConfig
  },
  data(){
    return{
      centerDialogVisible: false,
      
      sensorArr: [
        {
          id: '601',
          name: 'temp',
          dev: '1',
          unit: '25'
        },
        {
          id: '602',
          name: 'humi',
          dev: '1',
          unit: '70'
        }
      ],
      addSensor:{
        id: '', 
        name: '',
        dev: ''        
      },
      
      setUpDialogVisible: false,
      sensorIndex: 0,
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row)
      console.log(row.id)
      this.sensorIndex = index
      this.setUpDialogVisible = true
    },
    
    clearNewSensor(){
      this.addSensor.area = ''
      this.addSensor.pa_id = ''
      this.addSensor.sensor = ''
      this.setUpDialogVisible = false
    },
    confirmNewSensor(){
      this.sensorArr.push({id: this.addSensor.id, name: this.addSensor.name ,dev: this.addSensor.dev})
      this.addSensor.id = ''
      this.addSensor.name = ''
      this.addSensor.dev = ''
      this.centerDialogVisible = false
      this.sensorArr.sort(function(a, b){
        return (a.area-b.area)
      })
      console.log('confirm')
    }
    
  },
  
}
</script>
<style lang="">
  
</style>