<template>
  <div id="dashboard">
    <el-row>
      <el-col :span="24">
        <div style="float: left">
          <el-dropdown @command="gotoGateway">
            <el-button type="primary">
              gateway<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown" >
              <el-dropdown-item command="gateway601">601</el-dropdown-item>
              <el-dropdown-item command="gateway602">602</el-dropdown-item>
              <el-dropdown-item command="gateway603">603</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div>{{area}} </div>
        <div>{{$t("time")}}: {{datetime}}</div>
      </el-col>  
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-card class="box-card dashboard_data">
          <div slot="header" class="clearfix">
            <span>{{$t("city_temperature_Label")}}</span>
            <el-button style="float: right; padding: 3px 0" type="text">詳細資料</el-button>
          </div>
          <div class="text item" id="temperature603">
            {{temperature}}
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="box-card dashboard_data">
          <div slot="header" class="clearfix">
            <span>{{$t("people_count")}}</span>
            <el-button style="float: right; padding: 3px 0" type="text">詳細資料</el-button>
          </div>
          <div class="text item">
            {{peoplecount}}
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-card class="box-card dashboard_data">
          <div slot="header" class="clearfix">
            <span>{{$t("humidity")}}</span>
            <el-button style="float: right; padding: 3px 0" type="text">詳細資料</el-button>
          </div>
          <div class="text item">
            {{humidity}}
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'dashboard',
  
  data() {
    return {
      area: '',
      peoplecount: '0',
      temperature: '',
      humidity: '0',
      pm25: '0',
      datetime: ''

    }
  },
  created() {
    this.getSensorsData()
    setInterval( this.getSensorsData, 6000 )
    //this.gwid = this.$session.get( 'loginUser')
    //console.log('Dashboard gwid=' + this.gwid )
    
  },
  methods: {
    
    getSensorsData() {
       this.$ajax({
         method: 'GET',
         url: 'http://52.197.39.218:8080/sensordata'
         //url: 'http://47.74.5.223:7542/query?gwid=KASO03HM'
       })
       .then( res => {
          var objstr = JSON.stringify(res.data)
          console.log(objstr)
          var objres = JSON.parse(objstr)
          this.area = objres.area[2].name
          this.datetime = objres.datetime
          this.peoplecount = objres.area[2].peoplecount
          this.temperature = objres.area[2].temperature + ' °C'
          this.humidity = objres.area[2].humidity

          // 改變溫度顏色
          /*if(parseFloat(this.temperature) >= 25){
            console.log('temperature is too high')
            document.getElementById('temperature').style.color = 'red'
          }else{
            document.getElementById('temperature').style.color = 'black'
          }*/
       })
       .catch( error => {
          console.log(error)
       })
       // this.outdoor_tempature = '19.5°'
    },
    gotoGateway(command){
      this.$router.replace({name: command})
    }
  },
  watch:{
    temperature: {
      handler: function() {
        if(parseFloat(this.temperature) > 25){
          console.log(this.temperature)
          document.getElementById('temperature603').style.color = 'red'
        }else{
          document.getElementById('temperature603').style.color = 'black'
        }
        
        
      }
    }
  }
}
</script>