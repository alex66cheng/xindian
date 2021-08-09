<template>
  <div>
    <el-row>
      <el-col :span="24">
        <div>{{ id }} </div>
        <div>{{$t("time")}}: {{datetime}}</div>
      </el-col>  
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card class="box-card dashboard_data" >
          <div slot="header" class="clearfix">
            <span>{{$t("city_temperature_Label")}}</span>
            <el-button style="float: right; padding: 3px 0" type="text">詳細資料</el-button>
          </div>
          <div class="text item" id="temperature">
            {{temperature}}
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
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
      <el-col :span="6">
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
      <el-col :span="6">
        <el-card class="box-card dashboard_data">
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
      id: '',
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
    
    //this.$router.push({ name: 'gateway603'})
  },
  methods: {
    getSensorsData() {
       this.$ajax({
         method: 'GET',
         url: 'http://52.197.39.218:8080/sensordata'
       })
       .then( res => {
          var objstr = JSON.stringify(res.data)
          console.log(objstr)
          var objres = JSON.parse(objstr)
          this.datetime = objres.datetime

          this.id = this.$route.params.id
          for(var room of objres.area){
            console.log('room name ' + room.name)
            console.log('this.id ' + this.id)
            if(room.name == this.id){
              this.peoplecount = room.peoplecount
              this.temperature = room.temperature + ' °C'
              this.humidity = room.humidity
              this.pm25 = room.pm25
              for(var attributename in room){
                console.log(attributename + ': ' + room[attributename])
              }
            }
          }
       })
       .catch( error => {
          console.log(error)
       })
    }
  },
  watch:{
    temperature: function() {
        if(parseFloat(this.temperature) > 25){
          console.log(this.temperature)
          document.getElementById('temperature').style.color = 'red'
        }else{
          document.getElementById('temperature').style.color = 'black'
        }
      }
  }
}
</script>

<style scoped>
</style>