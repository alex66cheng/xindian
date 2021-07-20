<template>
  <div id="dashboard">
    <el-row>
      <el-col :span="24">
        <div>{{area}} </div>
        <div>{{$t("time")}}: {{datetime}}</div>

      </el-col>  
    </el-row>
    <el-row>
      <el-col :span="12"><div>{{$t("city_temperaturei_Label")}}: {{temperature}}</div></el-col>
      <el-col :span="12"><div>{{$t("people_count")}}: {{peoplecount}}</div></el-col>
    </el-row>
    <el-row>
      <el-col :span="12"><div>{{$t("humidity")}}: {{humidity}}</div></el-col>
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
          this.area = objres.area[1].name
          this.datetime = objres.datetime
          this.peoplecount = objres.area[1].peoplecount
          this.temperature = objres.area[0].temperature + ' °C'
          this.humidity = objres.area[0].humidity
          
          

          
          //var date = new Date()
          //this.upload_time = date.toString()
          
         
       })
       .catch( error => {
          console.log(error)
       })

       // this.outdoor_tempature = '19.5°'
    }
  }
}
</script>

<style>
</style>