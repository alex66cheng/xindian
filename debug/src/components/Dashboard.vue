<template>
  <div id="dashboard">
    <div class="content-block" id="home1">
      <div class="first-title">{{ $t("Dashboard_Title") }}</div>
      <div class="bg-write">
        <div :class="local_weather_backgrond">
          <div class="weather-title">{{green_house_city}}</div>
          <div class="weather-img"></div>
          <div class="weather-time">
            <div class="temperature">
              <small :style="{padding:'0 0 3px'}">{{ $t("city_temperaturei_Label") }}</small>
              <span>{{city_tempature}}</span>
            </div>
            <div class="temperature-time">
              <span>{{city_time}}</span>
              <small>{{city_date}}</small>
            </div>
          </div>
        </div>

        <div class="weather-content">
          <el-row :gutter="20">
            <el-col :span="16" class="second-title">{{ $t("green_house_outdoor_label") }}</el-col>
            <el-col :span="8" class="second-title">{{ $t("green_house_indoor_label") }}</el-col>

            <el-col :span="8">
              <div class="weather-content-border">
                <div class="float-left">
                  <i class="el-icon el-icon-temperature"></i>
                  <span class="weather-text">{{ $t("green_house_temperature_label") }}</span>
                </div>
                <span class="float-right weather-text-math">{{outdoor_tempature}}</span>
              </div>
              <div class="weather-content-border">
                <div class="float-left">
                  <i class="el-icon el-icon-humidity"></i>
                  <span class="weather-text">{{ $t("green_house_humidity_label") }}</span>
                </div>
                <span class="float-right weather-text-math">{{outdoor_humidity}}</span>
              </div>
              <div class="weather-content-border">
                <div class="float-left">
                  <i class="el-icon el-icon-windDirection"></i>
                  <span class="weather-text">{{ $t("green_house_wind_dir_label") }}</span>
                </div>
                <span class="float-right weather-text-math">{{wind_dir}}</span>
              </div>
              <div class="weather-content-border">
                <div class="float-left">
                  <i class="el-icon el-icon-windSpeed"></i>
                  <span class="weather-text weather-text">{{ $t("green_house_wind_speed_label") }}</span>
                </div>
                <span class="float-right weather-text-math">{{wind_speed}}</span>
              </div>
              <div class="weather-content-border border-bottom-no">
                <div class="float-left">
                  <i class="el-icon el-icon-windSpeed"></i>
                  <span class="weather-text">{{ $t("green_house_qwind_speed_label") }}</span>
                </div>
                <span class="float-right weather-text-math">{{qwind_speed}}</span>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="weather-content-border">
                <div class="float-left">
                  <i class="el-icon el-icon-illumination"></i>
                  <span class="weather-text">{{ $t("green_house_light_label") }}</span>
                </div>
                <span class="float-right weather-text-math">{{light_value}}</span>
              </div>
              <div class="weather-content-border">
                <div class="float-left">
                  <i class="el-icon el-icon-illumination"></i>
                  <span class="weather-text">{{ $t("green_house_light10_label") }}</span>
                </div>
                <span class="float-right weather-text-math">{{light10_value}}</span>
              </div>
              <div class="weather-content-border">
                <div class="float-left">
                  <i class="el-icon el-icon-illumination"></i>
                  <span class="weather-text">{{ $t("green_house_light2_label") }}</span>
                </div>
                <span class="float-right weather-text-math">{{light2_value}}</span>
              </div>
              <div class="weather-content-border">
                <div class="float-left">
                  <i class="el-icon el-icon-rainfall"></i>
                  <span class="weather-text">{{ $t("green_house_rain1_label") }}</span>
                </div>
                <span class="float-right weather-text-math">{{rain1_value}}</span>
              </div>
              <div class="weather-content-border border-bottom-no">
                <div class="float-left">
                  <i class="el-icon el-icon-rainfall"></i>
                  <span class="weather-text">{{ $t("green_house_rain2_label") }}</span>
                </div>
                <span class="float-right weather-text-math">{{rain2_value}}</span>
              </div>
            </el-col>

            <el-col :span="8">
              <div class="weather-content-border" style="display:inline-block">
                <div class="float-left">
                  <i class="el-icon el-icon-temperature"></i>
                  <span class="weather-text">{{ $t("green_house_temperature_label") }}</span>
                </div>
                <span class="float-right weather-text-math">{{indoor_tempature}}</span>
              </div>
              <div class="weather-content-border" style="display:inline-block">
                <div class="float-left">
                  <i class="el-icon el-icon-humidity"></i>
                  <span class="weather-text">{{ $t("green_house_humidity_label") }}</span>
                </div>
                <span class="float-right weather-text-math">{{indoor_humidity}}</span>
              </div>
              <div class="weather-content-border " :style="displayCo2" >
                <div class="float-left">
                  <i class="el-icon el-icon-Co2"></i>
                  <span class="weather-text">{{ $t("green_house_co2_label") }}</span>
                </div>
                <span class="float-right weather-text-math">{{indoor_co2}}</span>
              </div>
              <div class="weather-content-border border-bottom-no" style="display:inline-block">
                <div class="float-left">
                  <i class="el-icon el-icon-illumination"></i>
                  <span class="weather-text">{{ $t("green_house_light_label") }}</span>
                </div>
                <span class="float-right weather-text-math">{{soil_humidity}}</span>
              </div>
              <div class="weather-content-border border-bottom-no" :style="displaySoilH">
                <div class="float-left">
                  <i class="el-icon el-icon-temperature"></i>
                  <span class="weather-text">{{ $t("green_house_stmp_label") }}</span>
                </div>
                <span class="float-right weather-text-math">{{soil_tempature}}</span>
              </div>
              <div class="weather-content-img" :style="displaySoilIMG">
                <img :src="imgsrc" width="168px" height="128px" preview>
              </div>
            </el-col>
          </el-row>
          <div class="weather-content-gray">{{ $t("green_house_upload_time_label") }}：{{upload_time}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'dashboard',
  mqtt: {
    'techware':function(val) {
       console.log('mqtt receive:' + val)
       
       var valobj = JSON.parse(val)
       
       this.indoor_tempature = valobj.TEMP + ' °C'
       this.indoor_humidity = valobj.HUM + ' %'
       this.indoor_co2 = valobj.CO2 + ' ppm'
       this.soil_humidity = valobj.LUX + ' lux'
    }
  },
  data() {
    return {
      loginUser: '',
      email:'',
      displayCo2 : 'display:inline-block;',
      displaySoilT : 'display:inline-block;',
      displaySoilH : 'display:none;',
      displaySoilIMG : 'display:none;',
      local_weather_backgrond:'',
      
      green_house_city: '東京 日本',   
      city_id:'1850147',
      
      outdoor_tempature: '0°C',
      outdoor_humidity: '0%',
      wind_dir: '--',
      wind_speed: '0.0m/s',
      qwind_speed: '0.0m/s',
      light_value : '0.0 lux',
      light10_value : '0.0 lux',
      light2_value : '0.0 lux',
      rain1_value: '0.0 mm',
      rain2_value: '0.0 mm',
      indoor_tempature : '0.0°',
      indoor_humidity : '0.0%',
      indoor_co2 : '0 ppm',
      soil_humidity : '0.0 lux',
      soil_tempature : '0°',
      upload_time:'',
      
      city_tempature : '18.6°',
      city_time : '12:00:01',
      city_date : '2018-12-24',
      
      imgsrc : 'http://www.iot-fitone.com/images/mImage.jpg',
      
    }
  },
  
  created() {
    
    this.loginUser = this.$session.get('loginUser')
    console.log(this.loginUser)
    
    if( this.loginUser == 'KASO03HM' ) {
       this.email = 'alex66.cheng@gmail.com'
    }
    
    this.$ajax({
         method: 'GET',
         url: 'http://www.iot-fitone.com/sensors?email=' + this.email 
    })
    
    .then( res => {
         
         var objstr = JSON.stringify(res.data)
         var objres = JSON.parse(objstr)
         var deviceitem = objres.detail[0]
         
         var uptopic = deviceitem.uptopic
    
         this.$mqtt.subscribe(uptopic)
         
         var lon = deviceitem.location.lon
         var lat = deviceitem.location.lat
         
         console.log('lon=' + lon)
         console.log('lat=' + lat)
         
         this.$ajax({
         method: 'GET',
         url: 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&APPID=153795b2c8246e94ff58c8ec8e2eb221'
       
       })
       
       .then( res => {
         var objstr = JSON.stringify(res.data)
         var objres = JSON.parse(objstr)
         
         var temp = parseFloat(objres.main.temp)
         temp = temp - 273.15
         temp = temp.toFixed(2)
     //    this.city_tempature = temp +  '°C'
         this.city_tempature = temp 
         
         var weather_id = parseFloat(objres.weather[0].id)
         var firstdigit = weather_id / 100
         firstdigit = firstdigit.toFixed(0)
         
         this.local_weather_backgrond = 'weather weather-sun'
         if( firstdigit == 2 ) this.local_weather_backgrond = 'weather weather-cloudy'
         if( firstdigit == 3 ) this.local_weather_backgrond = 'weather weather-rain'
         if( firstdigit == 5 ) this.local_weather_backgrond = 'weather weather-rain'
         if( firstdigit == 6 ) this.local_weather_backgrond = 'weather weather-snow'
         if( firstdigit == 7 ) this.local_weather_backgrond = 'weather weather-cloudy'
         if( firstdigit == 8 ) this.local_weather_backgrond = 'weather weather-sun'
       })       
    
    })
    
    if( this.loginUser == 'KASO03HM' ) {
     // this.green_house_city = '東京 日本' 
    //  this.city_id = '1850147'
    
      this.green_house_city = '台南 安南' 
      this.city_id = '1668352'
      
      this.imgsrc = 'http://www.iot-fitone.com/images/mImage.jpg'
      this.displayCo2 = 'display:inline-block;padding: 12px 0 6px;'
      this.displaySoilT = 'display:none;'
      this.displaySoilH = 'display:none;'
    }
    
    if( this.loginUser == 'KASO05SO' ) {
     // this.green_house_city = '袋井 日本' 
     // this.city_id = '1863945'
      
      this.green_house_city = '台南 安南' 
      this.city_id = '1668352'
      
      this.imgsrc = 'http://www.iot-fitone.com/images/mImage2.jpg'
      this.displayCo2 = 'display:none;'
      this.displaySoilT = 'display:inline-block;'
      this.displaySoilH = 'display:inline-block;'
    }
    
    setInterval( this.updateTime, 1000 )
    this.getSensorsData()
 //   setInterval( this.getSensorsData, 180000 )
//  url: 'http://api.openweathermap.org/data/2.5/weather?id=' + this.city_id + '&APPID=153795b2c8246e94ff58c8ec8e2eb221'    
    
 },
  methods: {
   makeDateStr( mydate ) {
       var yyyy = mydate.getFullYear()
       var mm = mydate.getMonth()
       mm = mm + 1
       var mmstr = mm.toString()
       if( mm < 10 ) mmstr = '0' + mmstr
       var dd = mydate.getDate()
       var ddstr = dd.toString()
       if(dd<10) ddstr = '0'+ddstr
       
       return yyyy + '-' + mmstr + '-' + ddstr 
     },
      makeTimeStr( myTime ) {
       var hh = myTime.getHours()
       var hhstr = hh.toString()
       if( hh < 10 ) hhstr = '0' + hhstr
       
       var min = myTime.getMinutes()
       var minstr = min.toString()
       if( min < 10 ) minstr = '0' + minstr
       
       var sec = myTime.getSeconds()
       var secstr = sec.toString()
       if( sec < 10 ) secstr = '0' + secstr
       
       return hhstr + ':' + minstr + ':' + secstr
     },
     
    updateTime() {
      var today = new Date()
       
       var yyyy = today.getFullYear()
       var mm = today.getMonth()
       mm++
       var dd =today.getDate()
       
       var hh = today.getHours() 
       hh = hh.toFixed(0)
       var mins = today.getMinutes()
       mins = mins.toFixed(0)
       var sec = today.getSeconds()
       sec = sec.toFixed(0)
       
       this.city_date = yyyy + '/' + mm + '/' + dd
       this.city_time = hh + ':' + mins + ':' + sec
       
       this.city_date = this.makeDateStr(today)
       this.city_time = this.makeTimeStr(today)
    },
    
    getSensorsData() {
       this.$ajax({
         method: 'GET',
         url: 'http://www.iot-fitone.com/query?gwid=' + this.loginUser
       })
       .then( res => {
          var objstr = JSON.stringify(res.data)
          console.log(objstr)
          var objres = JSON.parse(objstr)
          
          if( objres.RAIN1 ) {
            this.outdoor_tempature = objres.OTMP + ' °C'
            this.outdoor_humidity = objres.OHM + ' %'
          
            if( objres.WDIR >= 0 && objres.WDIR < 11.2 ) this.wind_dir = '北'
            else if ( objres.WDIR >= 11.2 && objres.WDIR < 33.7 ) this.wind_dir = '北北東'
            else if ( objres.WDIR >= 33.7 && objres.WDIR < 56.2 ) this.wind_dir = '東北'
            else if ( objres.WDIR >= 56.2 && objres.WDIR < 78.7 ) this.wind_dir = '東北東'
            else if ( objres.WDIR >= 78.7 && objres.WDIR < 101.2 ) this.wind_dir = '東'
            else if ( objres.WDIR >= 101.2 && objres.WDIR < 123.7 ) this.wind_dir = '東南東'
            else if ( objres.WDIR >= 123.7 && objres.WDIR < 146.2 ) this.wind_dir = '東南'
            else if ( objres.WDIR >= 146.2 && objres.WDIR < 168.7 ) this.wind_dir = '南南東'
            else if ( objres.WDIR >= 168.7 && objres.WDIR < 191.2 ) this.wind_dir = '南'
            else if ( objres.WDIR >= 191.2 && objres.WDIR < 213.7 ) this.wind_dir = '南南西'
            else if ( objres.WDIR >= 213.7 && objres.WDIR < 236.2 ) this.wind_dir = '西南'
            else if ( objres.WDIR >= 236.2 && objres.WDIR < 258.7 ) this.wind_dir = '西南西'
            else if ( objres.WDIR >= 258.7 && objres.WDIR < 281.2 ) this.wind_dir = '西'
            else if ( objres.WDIR >= 281.2 && objres.WDIR < 303.7 ) this.wind_dir = '西北西'
            else if ( objres.WDIR >= 303.7 && objres.WDIR < 326.2 ) this.wind_dir = '西北'
            else if ( objres.WDIR >= 326.2 && objres.WDIR < 348.7 ) this.wind_dir = '北北西'
            else if ( objres.WDIR >= 348.7 && objres.WDIR < 360 ) this.wind_dir = '北'
            else this.wind_dir = 'NG'
          
            this.wind_speed = objres.WIND +' m/s'
            this.qwind_speed = objres.QWIND + ' m/s'
            this.light_value = objres.LIGHT + ' lux'
            this.light10_value = objres.LIGHT10 + ' lux'
            this.light2_value = objres.LIGHT2 + ' klux'
            this.rain1_value = objres.RAIN1 + ' mm'
            this.rain2_value = objres.RAIN2 + ' mm'
            this.indoor_tempature = objres.LTMP + ' °C'
            this.indoor_humidity = objres.LHM + ' %'
            this.indoor_co2 = objres.STMP + ' ppm'
            this.soil_humidity = objres.CO2 + ' %'
            this.soil_tempature = objres.STMP + ' °C'
          
            if( this.loginUser == 'KASO03HM' ) {
                this.indoor_tempature = '--'
                this.indoor_humidity = '--'
            }
          
            var date = new Date()
            this.upload_time = date.toString()
          
          } else {
            if( objres.LTMP ) {
            this.indoor_tempature = objres.LTMP + ' °C'
            this.indoor_humidity = objres.LHM + ' %'
            this.indoor_co2 = objres.CO2 + ' ppm'
            this.soil_humidity = objres.Light + ' lux'
            }
          }
          
         
       })
       .catch( error => {
          console.log(error)
       })

       // this.outdoor_tempature = '19.5°'
    }
  }
}
</script>

<style lang="scss" scoped>
#dashboard {
  overflow: hidden;
}
.el-icon {
  width: 25px;
  height: 25px;
  margin-right: 8px;
  // 溫度
  &.el-icon-temperature {
    background: url('../assets/img/temperature.png') no-repeat center;
    background-size: 100%;
  }
  
   // 溼度
  &.el-icon-humidity {
  height: 32px;
    background: url('../assets/img/humidity.png') no-repeat center;
    background-size: 78%;
  }
  
   // 風向
  &.el-icon-windDirection {
    background: url('../assets/img/winddir.png') no-repeat center;
    background-size: 100%;
  }
  
  // 風速
  &.el-icon-windSpeed {
    background: url('../assets/img/wind_direction.png') no-repeat center;
    background-size: 100%;
  }
  
  // 瞬間風速
  &.el-icon-QwindDirection {
    background: url('../assets/img/wind_direction.png') no-repeat center;
    background-size: 100%;
  }
  
  // 氣壓
  &.el-icon-airPressure {
    background: url('../assets/img/air_pressure.png') no-repeat center;
    background-size: 100%;
  }
 
  // 紫外線、照度(日射量)
  &.el-icon-illumination {
    background: url('../assets/img/illumination.png') no-repeat center;
    background-size: 100%;
  }
  // 感雨、雨量
  &.el-icon-rainfall {
    background: url('../assets/img/rainfall.png') no-repeat center;
    background-size: 90%;
  }
  
  // 土壤水份
  &.el-icon-soilMoisture {
    background: url('../assets/img/soil_moisture.png') no-repeat center;
    background-size: 90%;
  }
  // 土壤溫度
  &.el-icon-soilTemperature {
    background: url('../assets/img/soil_temperature.png') no-repeat center;
    background-size: 85%;
  }
  // 土壤導電率(土壤鹽份)
  &.el-icon-soilConductivity {
    background: url('../assets/img/soil_conductivity.png') no-repeat center;
    background-size: 100%;
  }
  // 水位計
  &.el-icon-waterLevel {
    background: url('../assets/img/water_level.png') no-repeat center;
    background-size: 100%;
  }
  // PH值(酸鹼度)
  &.el-icon-PH {
    background: url('../assets/img/ph.png') no-repeat center;
    background-size: 90%;
  }
  // Co2
  &.el-icon-Co2 {
    background: url('../assets/img/co2.png') no-repeat center;
    background-size: 100%;
  }
  // 風扇
  &.el-icon-Fan {
    background: url('../assets/img/fan.png') no-repeat center;
    background-size: 80%;
  }
  // LED燈
  &.el-icon-LED {
    background: url('../assets/img/led.png') no-repeat center;
    background-size: 70%;
  }
  // 天窗、側窗
  &.el-icon-skylight {
    background: url('../assets/img/skylight.png') no-repeat center;
    background-size: 90%;
  }
  // 窗簾
  &.el-icon-curtain {
    background: url('../assets/img/curtain.png') no-repeat center;
    background-size: 90%;
  }
  // 灌水PUMP
  &.el-icon-PUMP {
    background: url('../assets/img/pump.png') no-repeat center;
    background-size: 85%;
  }
  // 肥料裝置
  &.el-icon-fertilizer {
    background: url('../assets/img/fertilizer.png') no-repeat center;
    background-size: 85%;
  }
}
.border-bottom-no {
  border-bottom: 1px solid transparent !important;
}

.show_div{
  display:inline-block;
}

.hide_div{
  display:none;
}
.content {
  $bg-sun-color: rgba(247, 222, 109, 0.3);
  $bg-cloudy-color: #f5eecf;
  $bg-rain-color: #b4dff4;
  $bg-snow-color: #d7dade;
  $bg-overcast-color: #d7dade;
  .left-message {
    .content-block {
      .weather {
        overflow: hidden;
        float: left;
        width: 205px;
        border-top-left-radius: 0.3rem;
        border-bottom-left-radius: 0.3rem;
        padding: 30px 27px;

        //sun
        &.weather-sun {
          background-color: $bg-sun-color;
          //2
          .weather-img {
            background: url(../assets/img/sunny_day.png) no-repeat center;
            background-size: 90px 90px;
          }
        }
        //cloudy
        &.weather-cloudy {
          background-color: $bg-cloudy-color;
          //2
          .weather-img {
            background: url(../assets/img/cloudy_day.png) no-repeat center;
            background-size: 90px 90px;
          }
        }
        //rain
        &.weather-rain {
          background-color: $bg-rain-color;
          //2
          .weather-img {
            background: url(../assets/img/rain_day.png) no-repeat center;
            background-size: 90px 90px;
          }
        }
        //snow
        &.weather-snow {
          background-color: $bg-snow-color;
          //2
          .weather-img {
            background: url(../assets/img/snow_day.png) no-repeat center;
            background-size: 90px 90px;
          }
        }
        //overcastDay
        &.weather-overcast {
          background-color: $bg-overcast-color;
          //2
          .weather-img {
            background: url(../assets/img/overcast_day.png) no-repeat center;
            background-size: 90px 90px;
          }
        }
        //1
        .weather-title {
          font-size: 26px;
          color: rgba(0, 0, 0, 0.65);
          letter-spacing: 0;
          line-height: 30px;
          text-align: left;
        }
        //2
        .weather-img {
          height: 240px;
        }
        //3
        .weather-time {
          overflow: hidden;
          float: left;
          .temperature {
            float: left;
            width: 35%;
            font-family: DINCondensed-Bold;
            font-size: 40px;
            color: rgba(0, 0, 0, 0.65);
            letter-spacing: 0;
            line-height: 60px;
            text-align: left;
            small {
              display: block;
              font-family: PingFangSC-Regular;
              font-size: 12px;
              color: #31394d;
              letter-spacing: 0;
              line-height: 12px;
              text-align: center;
            }
          }
          .temperature-time {
            position: relative;
            top: 35px;
            float: right;
            width: 65%;
            text-align: right;
            font-family: PingFangSC-Regular;
            font-size: 16px;
            color: rgba(0, 0, 0, 0.65);
            letter-spacing: -0.56px;
            small {
              display: block;
              opacity: 0.85;
              font-family: PingFangSC-Regular;
              font-size: 12px;
              color: rgba(0, 0, 0, 0.65);
              letter-spacing: -0.33px;
            }
          }
        }
      }

      .weather-content {
        float: right;
        padding: 32px 40px 32px 0;
        width: 680px;
        @media (min-width: 998px) {
          width: 680px;
          padding: 32px 80px 32px 0;
        }
        @media (min-width: 1024px) {
          width: 685px;
          padding: 32px 60px 32px 0;
        }
        @media (min-width: 1050px) {
          width: 710px;
          padding: 32px 45px 32px 15px;
        }
        @media (min-width: 1070px) {
          width: 725px;
          padding: 32px 20px;
        }
        @media (min-width: 1280px) {
          padding: 32px 35px;
          width: 740px;
        }
        .weather-content-border {
          overflow: hidden;
          width: 187px;
          padding: 12px 0 6px;
          border-bottom: 1px solid #e8e8e8;
          .weather-text {
            position: relative;
            bottom: 6px;
            font-size: 14px;
            color: rgba(0, 0, 0, 0.65);
            line-height: 20px;
          }
          .weather-text-math {
            position: relative;
            bottom: -3px;
            font-size: 14px;
            color: #595959;
          }
        }
        .weather-content-gray {
          margin-top: 12px;
          opacity: 0.85;
          font-family: PingFangSC-Regular;
          font-size: 12px;
          color: rgba(0, 0, 0, 0.35);
          letter-spacing: -0.33px;
          text-align: left;
        }
        .weather-content-img {
          img {
            border-radius: 5px;
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
