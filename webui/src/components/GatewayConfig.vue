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
            interface: {{device_interface}}
          </div>
        
          <div align="left" class="text item">
            bitrate: {{bitrate}}
          </div >
          <div align="left" class="text item">
            datbit: {{datbit}}
          </div>
          <div align="left" class="text item">
            protocol: {{protocol}}
            <div style="float: right;">
              <el-button @click="gotoSetup">Setup</el-button>
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
              :label="$t('sensor')"
              width="180">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{$t(scope.row.sensor)}}</span>
              </template>
            </el-table-column>
            <el-table-column
              :label="$t('value')"
              width="180">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{scope.row.value}}</span>
              </template>
            </el-table-column>
            <el-table-column>
              <template slot="header" slot-scope="scope">
                <el-button>Add</el-button>
              </template>
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>


export default {
  data(){
    return{
      device: '',
      device_interface: 'dev/ttymxc03',
      bitrate: '',
      datbit: '',
      protocol: 'modbus',
      sensorArr: [
        {
          sensor: 'green_house_outdoor_label',
          value: '25'
        },
        {
          sensor: 'green_house_humidity_label',
          value: '70%'
        }
      ],
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row)
    },
    gotoSetup(){
      this.$router.push({name: 'modbus'})
    }
    
  },
  created(){
    this.device = this.$route.params.device
  }
}
</script>

<style>
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
