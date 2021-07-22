<template>
  <div id="dashboard">
    <el-row>
      <el-col :span="24">
        <div>{{area}} </div>
        <div>{{$t("time")}}: {{datetime}}</div>
      </el-col>  
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>{{$t("city_temperaturei_Label")}}</span>
            <el-button style="float: right; padding: 3px 0" type="text">詳細資料</el-button>
          </div>
          <div class="text item" id="temperature">
            {{temperature}}
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="box-card">
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
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>{{$t("humidity")}}</span>
            <el-button style="float: right; padding: 3px 0" type="text">詳細資料</el-button>
          </div>
          <div class="text item">
            {{humidity}}
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>PM2.5</span>
            <el-button style="float: right; padding: 3px 0" type="text">詳細資料</el-button>
          </div>
          <div class="text item">
            {{pm25}}
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
          this.area = objres.area[0].name
          this.datetime = objres.datetime
          this.peoplecount = objres.area[0].peoplecount
          this.temperature = objres.area[0].temperature + ' °C'
          this.humidity = objres.area[0].humidity
          this.pm25 = objres.area[0].pm25

          // 改變溫度顏色
          if(parseFloat(this.temperature) >= 25){
            console.log('temperature is too high')
            document.getElementById('temperature').style.color = 'red'
          }else{
            document.getElementById('temperature').style.color = 'black'
          }
       })
       .catch( error => {
          console.log(error)
       })
    }
  }
}
</script>

<style>

  .text {
    font-size: 28px;
  }

  .item {
    margin: 5vh;
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
    width: 60%;
    margin: 5% 20% 15% 20%;
  }

</style>