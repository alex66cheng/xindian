<template>
  <div>
    <el-row>
      <el-col :span="24">
        <div>
          <el-dropdown @command="gotoGateway">
            <el-button type="primary">
              {{currentArea}}<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown" >
              <el-dropdown-item command="601">601</el-dropdown-item>
              <el-dropdown-item command="602">602</el-dropdown-item>
              <el-dropdown-item command="603">603</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
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
            {{temperature[currentArea]}}
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
            {{peoplecount[currentArea]}}
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
            {{humidity[currentArea]}}
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
            {{pm25[currentArea]}}
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
      peoplecount: [],
      temperature: [],
      humidity: [],
      pm25: [],
      datetime: '',
      polling: null
    }
  },
  created() {
    this.getSensorsData()
    this.polling = setInterval( this.getSensorsData, 6000 )
    //this.gwid = this.$session.get( 'loginUser')
    //console.log('Dashboard gwid=' + this.gwid )
    
    //this.$router.push({ name: 'gateway603'})
  },
  beforeDestroy(){
    clearInterval( this.polling)
    console.log('destroy')
  },
  computed:{
    currentArea: function(){
      return this.$route.params.id
    }
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
            //console.log('room name ' + room.name)
            //console.log('this.id ' + this.id)
            var nn = String(room.name)
            this.peoplecount[nn] = room.peoplecount
            this.temperature[nn] = room.temperature + ' °C'
            this.humidity[nn] = room.humidity
            this.pm25[nn] = room.pm25
            /*if(room.name == this.id){
              for(var attributename in room){
                //console.log(attributename + ': ' + room[attributename])
              }
            }*/
          }
       })
       .catch( error => {
          console.log(error)
       })
    },gotoGateway(command){
      this.$router.replace({namd: 'dashboard', params:{id: command}})
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