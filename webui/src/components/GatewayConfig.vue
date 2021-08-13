<template>
  <div>
    <el-row>
      <el-col :span="11">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>{{device}}</span>
            <el-button style="float: right; padding: 3px 0" type="text">Operation button</el-button>
          </div>
          <div align="left" class="text item">
            Interface: {{device_interface}}
          </div>
        
          <div align="left" class="text item">
            Bitrate: {{bitrate}}
          </div >
          <div align="left" class="text item">
            Datbit: {{datbit}}
          </div>
          <div align="left" class="text item">
            Protocol: {{protocol}}
            <div style="float: right;">
              <el-button @click="gotoSetup">{{ $t("Setup")}}</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="13">
        <div>
          <el-table
          :data="sensorArr"
          style="width: 100%; float: left;">
            <el-table-column
              label="area"
              width="100">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{scope.row.area}}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="pa_id"
              width="100">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{scope.row.pa_id}}</span>
              </template>
            </el-table-column>
            <el-table-column
              :label="$t('sensor')"
              width="100">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{$t(scope.row.sensor)}}</span>
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
      </el-col>
    </el-row>
    <el-dialog
      title="add sensor"
      :visible.sync="centerDialogVisible"
      width="30%"
      center>
      <el-row :gutter="10">
        <el-col :span="8">
          <div>area</div>
          <div>
            <el-input
              v-model="addSensor.area"
              clearable>
            </el-input>
          </div>
        </el-col>
        <el-col :span="8">
          <div>pa_id</div>
          <div>  
            <el-input
              v-model="addSensor.pa_id"
              clearable>
            </el-input>
          </div>
        </el-col>
        <el-col :span="8">
          <div>sensor name</div>
          <div>  
            <el-input
              v-model="addSensor.sensor"
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
      device: '',
      device_interface: 'dev/ttymxc03',
      bitrate: '',
      datbit: '',

      protocol: 'modbus',
      centerDialogVisible: false,
      
      sensorArr: [
        {
          area: '601',
          pa_id: 'tamp',
          sensor: 'green_house_outdoor_label',
          value: '25'
        },
        {
          area: '602',
          pa_id: 'humi',
          sensor: 'green_house_humidity_label',
          value: '70%'
        }
      ],
      addSensor:{
        area: '',
        pa_id: '',
        sensor: '',
        
      },
      
      setUpDialogVisible: false,
      sensorIndex: 0,
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row)
      this.sensorIndex = index
      this.setUpDialogVisible = true
    },
    gotoSetup(){
      this.$router.push({name: 'modbus' ,params: {device: this.$route.params.device}})
    },
    clearNewSensor(){
      this.addSensor.area = ''
      this.addSensor.pa_id = ''
      this.addSensor.sensor = ''
      this.setUpDialogVisible = false
    },
    confirmNewSensor(){
      this.sensorArr.push({area: this.addSensor.area, pa_id: this.addSensor.pa_id ,sensor: this.addSensor.sensor})
      this.addSensor.area = ''
      this.addSensor.pa_id = ''
      this.addSensor.sensor = ''
      this.centerDialogVisible = false
      this.sensorArr.sort(function(a, b){
        return (a.area-b.area)
      })
      console.log('confirm')
    }
    
  },
  created(){
    this.device = this.$route.params.device
  }
}
</script>

<style scoped>
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
