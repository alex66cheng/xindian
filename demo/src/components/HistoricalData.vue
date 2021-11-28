<template>
  <div id="historicalData">
    <div class="content-block" id="home5">
      <div class="first-title">{{$t("History_Title")}}</div>
      <!-- 環境歷史 -->
      <EnvironmentaHistory></EnvironmentaHistory>

      <!-- 設備動作記錄 -->
      <div class="bg-write history records" :style="{display:'none',margin:'30px 0 0'}">
        <div
          class="second-title"
          :style="{margin:'0 0 16px',padding: '26px 31px 0'}"
        >{{$t("History_Device_Status_Label")}}</div>
        <el-form ref="form" label-width="80px" class="history-message text-align-left">
          <div class="block text-align-left"  :style="{display:'inline-flex'}">
            <!-- 2019-03-04 変更 -->
            <!-- <el-date-picker format="yyyy-MM-dd HH:mm"
              v-model="recordStartTime"
              type="datetime"
              :placeholder="history_start_time2_paceholder"
              prefix-icon="el-icon-date"
              style="width:200px"
              @change="dataTimeChange"
            ></el-date-picker>
            <span class="input-time-line">-</span>
            <el-date-picker format="yyyy-MM-dd HH:mm"
              v-model="recordStopTime"
              type="datetime"
              :placeholder="history_end_time2_paceholder"
              prefix-icon="el-icon-date"
              style="width:200px"
              @change="dataTimeChange"
            ></el-date-picker> -->
            <div class="input-date" >
              <div class="input-append date form_datetime">
                <input class="input-time" size="16" type="text" :placeholder="history_start_time2_paceholder" id="recordStartTime" :style="{width:'200px','padding-left':'9px'}">
                <span class="add-on"> <i class="icon-calendar"></i> </span>
              </div>
            </div>
            <span class="input-time-line" :style="{'padding':'5px 15px'}">-</span>
             <div class="input-date" >
              <div class="input-append date form_datetime">
                <input class="input-time" size="16" type="text" :placeholder="history_end_time2_paceholder" id="recordStopTime" :style="{width:'200px','padding-left':'9px'}">
                <span class="add-on"> <i class="icon-calendar"></i> </span>
              </div>
            </div>
          </div>
          <div id="day-error-msg" style="margin-top:10px;" :style="{display:isDayErrorMsg}">
            <el-alert title="開始時刻と終了時刻を選んでください" type="error"></el-alert>
          </div>
          <div class="check-list text-align-left">
            <el-checkbox-group v-model="checkList.historyData">
              <el-checkbox
                v-for="item in checkboxs"
                :key="item.id"
                :label="item.label"
                name="historyData"
                :style="item.style"
                @change="environmentalHistoryChange(item)"
              ></el-checkbox>
              <!-- 2019-01-25 チェックボックスのデータ 変更
              <el-checkbox :label="history_device_select1" name="historyData"></el-checkbox>
              <el-checkbox :label="history_device_select2" name="historyData"></el-checkbox>
              <el-checkbox :label="history_device_select3" name="historyData"></el-checkbox>
              <el-checkbox :label="history_device_select4" name="historyData"></el-checkbox>
              <el-checkbox :label="history_device_select5" name="historyData"></el-checkbox>
              <el-checkbox :label="history_device_select6" name="historyData"></el-checkbox>
              <el-checkbox :label="history_device_select7" name="historyData"></el-checkbox>
              <el-checkbox :label="history_device_select8" name="historyData"></el-checkbox>-->
            </el-checkbox-group>
          </div>
          <div id="day-error-msg" style="margin-top:10px;" :style="{display:isHistoryErrorMsg}">
            <el-alert title="デバイスの制御履歴を選んでください" type="error"></el-alert>
          </div>
          <div class="submit-button">
            <span class="clear-title" :style="{cursor:'pointer'}">{{$t("History_Clear_Label")}}</span>
            <el-button
              type="success"
              :style="{width:'80px',height:'36px',padding:'0'}"
              @click="deviceRecordProfile2"
            >{{$t("History_Search_Label")}}</el-button>
          </div>
        </el-form>

        <div class="border-top-gray">
          <div class="second-title" :style="{margin:'0',padding:'0 31px 0'}">
            <span>{{between2}}</span>
          </div>
          <!-- 2019-02-15 変更 -->
          <!-- <div id="recordProflie" :style="{width:'100%', height: '300px',margin:'0 0 30px'}"></div> -->
          <div id="recordProflieCalendar" :style="{padding:'20px'}"></div>
        </div>
      </div>
      <!-- 影像記錄 -->
      <div class="bg-write history" :style="{display:'none',margin:'30px 0 34px'}">
        <div
          class="second-title"
          :style="{margin:'0 0 16px',padding: '26px 31px 0'}"
        >{{$t("History_Picture_Label")}}</div>
        <el-form ref="form" label-width="80px" class="history-message text-align-left">
          <div class="block text-align-left" :style="{display:'inline-flex'}">
            <div class="input-date" >
              <div class="input-append date form_datetime">
                <input class="input-time" size="16" type="text" :placeholder="history_start_time3_paceholder" id="photographyStartTime" :style="{width:'200px','padding-left':'9px'}">
                <span class="add-on"> <i class="icon-calendar"></i> </span>
              </div>
            </div>
            <span class="input-time-line" :style="{'padding':'5px 15px'}">-</span>
             <div class="input-date" >
              <div class="input-append date form_datetime">
                <input class="input-time" size="16" type="text" :placeholder="history_end_time2_paceholder" id="photographyStopTime" :style="{width:'200px','padding-left':'9px'}">
                <span class="add-on"> <i class="icon-calendar"></i> </span>
              </div>
            </div>
            <!-- 2019-03-01 変更 -->
            <!-- <el-date-picker format="yyyy-MM-dd HH:mm"
              v-model="photographyStartTime"
              type="datetime"
              :placeholder="history_start_time3_paceholder"
              prefix-icon="el-icon-date"
              style="width:200px"
            ></el-date-picker>
            <span class="input-time-line">-</span>
            <el-date-picker format="yyyy-MM-dd HH:mm"
              v-model="photographyStopTime"
              type="datetime"
              :placeholder="history_end_time2_paceholder"
              prefix-icon="el-icon-date"
              style="width:200px"
            ></el-date-picker> -->

            <div class="submit-button" :style="{display:'inline-block',margin:'auto'}">
              <el-button
                @click="dataPictureTimeClick"
                type="success"
                :style="{width:'80px',height:'36px',margin:'0 0 0 10px',padding:'0'}"
              >{{$t("History_Search_Label")}}</el-button>
              <el-button
                type="success"
                :style="{width:'108px',height:'36px',padding:'0'}"
              >{{$t("History_Picture_Download_Label")}}</el-button>
            </div>
          </div>
          <div id="day-error-msg" style="margin-top:10px;" :style="{display:isDayPictureErrorMsg}">
            <el-alert title="開始時刻と終了時刻を選んでください" type="error"></el-alert>
          </div>
        </el-form>

        <div class="border-top-gray">
          <div class="second-title" :style="{padding:'30px 31px 10px'}">
            <span>{{between3}}</span>
          </div>

          <ul id="imagePlayer" :style="{display:'none'}">
            <li v-for="(img,item) in carouselList" :key="item">
              <img v-bind:src="img.url" class="ipcam_slide_show">
            </li>
          </ul>
          <!-- 2019/01/25 写真の轮播(変更) -->
          <!-- <swiper :options="swiperOption">
            <swiper-slide v-for="(img,item) in carouselList" :key="item">
              <img v-bind:src="img.url" class="ipcam_slide_show">
            </swiper-slide>
          </swiper>-->
          <!-- <el-carousel :interval="5000" arrow="always" class="el-carousel-record">
            <el-carousel-item v-for="(img,item) in carouselList" :key="item" class="carousel-img">
              <img v-bind:src="img.url">
              <div class="carousel-text">
                <span class="img-time">2019/05/12</span>
                <div :style="{display:'inline-block',cursor:'pointer'}">
                  <i class="el-icon-download"></i>
                  <span class="img-load">{{$t("History_Picture_Download_Label")}}</span>
                </div>
              </div>
            </el-carousel-item>
          </el-carousel>-->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import EnvironmentaHistory from '../components/EnvironmentalHistory.vue'
import _$ from 'jquery'
import '../../public/static/datePicker/css/bootstrap.min.css'
import '../../public/static/datePicker/css/bootstrap-datetimepicker.min.css'
import '../../public/static/datePicker/js/bootstrap-datetimepicker.js'
const historyFlag = false

export default {
  historyFlag,
  name: 'historicalData',
  components: {
    EnvironmentaHistory,
  },
  data() {
    return {
      loginUser : '',
      swiperOption: {
        //swiper3
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
          //stopOnLastSlide: false
        },
        loop: true,
        pagination: {
          el: '.swiper-pagination',
        },
        observeParents: true,
        observer: true,
      },

      history_start_time_paceholder: this.$t('History_Start_Time_PlaceHolder'),
      history_end_time_paceholder: this.$t('History_End_Time_PlaceHolder'),
      history_param_1: this.$t('History_Param1_Label'),
      history_param_2: this.$t('History_Param2_Label'),
      history_param_3: this.$t('History_Param3_Label'),
      history_param_4: this.$t('History_Param4_Label'),
      history_param_5: this.$t('History_Param5_Label'),
      history_param_6: this.$t('History_Param6_Label'),
      history_param_7: this.$t('History_Param7_Label'),
      history_param_8: this.$t('History_Param8_Label'),
      history_param_9: this.$t('History_Param9_Label'),
      history_param_10: this.$t('History_Param10_Label'),
      history_param_11: this.$t('History_Param11_Label'),
      history_param_12: this.$t('History_Param12_Label'),
      history_param_13: this.$t('History_Param13_Label'),
      history_param_14: this.$t('History_Param14_Label'),
      history_start_time2_paceholder: this.$t('History_Start_Time2_PlaceHolder'),
      history_end_time2_paceholder: this.$t('History_End_Time2_PlaceHolder'),
      //2019-01-25 チェックボックスのデータ 変更
      // history_device_select1: this.$t('History_Device_Select1'),
      // history_device_select2: this.$t('History_Device_Select2'),
      // history_device_select3: this.$t('History_Device_Select3'),
      // history_device_select4: this.$t('History_Device_Select4'),
      // history_device_select5: this.$t('History_Device_Select5'),
      // history_device_select6: this.$t('History_Device_Select6'),
      // history_device_select7: this.$t('History_Device_Select7'),
      // history_device_select8: this.$t('History_Device_Select8'),
      history_start_time3_paceholder: this.$t('History_Start_Time3_PlaceHolder'),
      history_end_time3_paceholder: this.$t('History_End_Time3_PlaceHolder'),
      // デバイスの制御履歴データ
      checkboxs: [
        {
          id: '1',
          label: this.$t('History_Device_Select1'),
        },
        {
          id: '2',
          label: this.$t('History_Device_Select2'),
        },
        {
          id: '3',
          label: this.$t('History_Device_Select3'),
        },
        {
          id: '4',
          label: this.$t('History_Device_Select4'),
        },
        {
          id: '5',
          label: this.$t('History_Device_Select5'),
        },
        {
          id: '6',
          label: this.$t('History_Device_Select6'),
        },
        {
          id: '7',
          label: this.$t('History_Device_Select7'),
        },
        {
          id: '8',
          label: this.$t('History_Device_Select8'),
        },
      ],

      between: '',
      between2: '',
      between3: '',

      historyStartTime: '',
      historyStopTime: '',
      //2019-03-04 時間の変更
      // recordStartTime: '',
      // recordStopTime: '',
      //2019-03-01 時間の変更
      // photographyStartTime: '',
      // photographyStopTime: '',
      checkList: {
        historyData: [],
      },
      carouselList: [],
      carouselPictureData: {},
      isDayErrorMsg: 'none',
      isDayPictureErrorMsg: 'none',
      isHistoryErrorMsg: 'none',
      pictureData: [],
      calendarData: [],
    }
  },

  tooltip: {
    trigger: 'axis',
  },
  mounted() {
    this.dateDefault()
    if(this.$i18n.locale == 'en'){
      _$('.environmentalHistory .check-list label').css({'width':'215px'})
      _$('.environmentalHistory .check-list label:nth-child(13)').css({'width':'430px'})
      _$('.records .check-list label').css({'width':'215px'})
    }else{
      _$('.environmentalHistory .check-list label').css({'width':'120px'})
      _$('.environmentalHistory .check-list label:nth-child(5)').css({'width':'150px'})
      _$('.environmentalHistory .check-list label:nth-child(12)').css({'width':'150px'})
      _$('.records .check-list label').css({'width':'120px'})
    }
    //this.environmentalHistoryCurve()
    // 2019-01-30 imagePlayer写真の放送 変更
    // imagePlayer写真の放送
    // var options = {
    //   stageWidth: 600,
    //   stageHeight: 350,
    //   autoStart: false,
    //   pauseOnHover: true,
    //   delay: 3,
    //   loop: true,
    // }
    // $('#imagePlayer').imagePlayer(options)
    //2019-02-15 デバイスの制御履歴 変更
    // var data2 = [[0, 9, 10], [0, 12, 14], [1, 9, 11], [2, 15, 16], [3, 9, 11], [4, 9, 15], [5, 9, 11], [6, 11, 12], [7, 9, 11]]
    // this.deviceRecordProfile(data2)
  },
  created() {
    
    this.loginUser = this.$session.get('loginUser')
   
  },
  methods: {
    //時間表示スタイル
    dateDefault() {
      $('.form_datetime').datetimepicker({
        language: 'jp',
        format: 'yyyy-mm-dd hh:ii',
        todayBtn: true, 
        autoclose: true, 
        showMeridian: 1, //時間表示スタイル
        pickerPosition: 'bottom-right',
      })
    },
    //デバイスの制御履歴
    dataTimeChange() {
      this.isDayErrorMsg = 'none'
    },
    //影像記錄エラー
    dataPictureTimeChange() {
      this.isDayPictureErrorMsg = 'none'
    },

    // デバイスの制御履歴状態をチェック
    environmentalHistoryChange(item) {
      item.checked = !item.checked
      //チェックの状態
      if (item.checked) {
        //判断是否选择デバイスの制御履歴を判断するかどうかを判断する
        this.historyFlagData()
      } else {
        //判断是否选择デバイスの制御履歴を判断するかどうかを判断する
        this.historyFlagData()
      }
    },

    //判断时刻是否选择時刻を判断するかどうかを判断する
    historyDayData() {
      var recordStart=_$('#recordStartTime').val()
      var recordEnd=_$('#recordStopTime').val()
      if (
        //2019-03-04 時間の変更
        // this.recordStartTime == null ||
        // this.recordStartTime == undefined ||
        // this.recordStartTime == '' ||
        // this.recordStopTime == null ||
        // this.recordStopTime == undefined ||
        // this.recordStopTime == ''
        recordStart == null || recordStart == undefined || recordStart== '' || recordEnd == null ||recordEnd == undefined ||recordEnd == ''
      ) {
        this.isDayErrorMsg = 'block'
        this.historyFlag = false
      } else {
        this.isDayErrorMsg = 'none'
        this.historyFlag = true
      }
    },

    //判断是否选择デバイスの制御履歴を判断するかどうかを判断する
    historyFlagData() {
      if (this.checkList.historyData.length == 0) {
        this.isHistoryErrorMsg = 'block'
        this.historyFlag = false
      } else {
        this.isHistoryErrorMsg = 'none'
        this.historyFlag = true
      }
    },
    //判断是否选择「时刻」と「デバイスの制御履歴」を判断するかどうかを判断する
    historyData() {
      this.historyDayData()
      this.historyFlagData()
    },

    // 判断时刻是否选择時刻を判断するかどうかを判断する
    historyPictureDayData() {
      var pictureFlag
      var pictureStart=_$('#photographyStartTime').val()
      var pictureEnd=_$('#photographyStopTime').val()
      pictureFlag
      if (
        //2019-03-01 時間の変更
        // this.photographyStartTime == null ||
        // this.photographyStartTime == undefined ||
        // this.photographyStartTime == '' ||
        // this.photographyStopTime == null ||
        // this.photographyStopTime == undefined ||
        // this.photographyStopTime == ''
        pictureStart == null || pictureStart == undefined || pictureStart== '' || pictureEnd == null ||pictureEnd == undefined ||pictureEnd == ''
      ) {
        this.pictureFlag = false
        this.isDayPictureErrorMsg = 'block'
      } else {
        this.isDayPictureErrorMsg = 'none'
        this.pictureFlag = true
      }
    },

    //スライドショー表示ボタンをクリック
    dataPictureTimeClick() {
      //判断时刻是否选择時刻を判断するかどうかを判断する
      $('.img_player').remove()
      this.historyPictureDayData()
      if (this.pictureFlag) {
        //2019-03-01 時間の変更
        // var startPictureDt = new Date(this.photographyStartTime)
        // var endPictureDt = new Date(this.photographyStopTime)
        var startPictureDt = new Date(_$('#photographyStartTime').val().replace(/-/g,'/'))
        var endPictureDt = new Date(_$('#photographyStopTime').val().replace(/-/g,'/'))
        var startPictureIso = startPictureDt.toISOString()
        var endPictureIso = endPictureDt.toISOString()
        var urlPicture = 'http://www.iot-fitone.com/photolist?gwid=' + this.loginUser + '&start=' + startPictureIso + '&end=' + endPictureIso
        this.$ajax({
          method: 'GET',
          url: urlPicture,
        }).then(res => {
          var objstr = JSON.stringify(res.data)
          var objres = JSON.parse(objstr)
          this.carouselPictureData = objres
          //写真を表示する
          this.pictureDataUrl()
        }).catch(error => {
          console.log(error)
        })
      }
    },

    //写真の循環を表示する
    pictureDataUrl() {
      var pictureObj
      this.carouselList = []

      for (var i = 0; i < this.carouselPictureData.length; i++) {
        pictureObj = this.carouselPictureData[i]
        var picturObjImgArray = {}
        picturObjImgArray.id = pictureObj.idx
        picturObjImgArray.url = pictureObj.url

        this.carouselList.push(picturObjImgArray)
      }

      //写真のサイクルが終わった後に、遅延のコールバックを行います
      this.$nextTick(function() {
        // imagePlayer写真の放送
        var options = {
          stageWidth: 600,
          stageHeight: 350,
          autoStart: false,
          pauseOnHover: true,
          delay: 5,
          loop: true,
        }

        $('#imagePlayer').imagePlayer(options)
        _$('.fullscreen').hide()
        _$('.scrubber').css('margin-left', '20px')
        _$('.frame_count').css('padding', '9px 15px 0 0')
      })
    },

    //環境歷史の曲線図
    environmentalHistoryCurve() {
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      myChart.setOption({
        tooltip: {
          trigger: 'axis',
        },
        grid: {
          x: 0,
          x2: 0,
          y: 0,
          y2: 65,
        },
        xAxis: {
          show: true,
          type: 'category',
          axisTick: 0,
          axisLine: {
            show: false,
          },
          axisLabel: {
            show: true,
            margin: 30,
            textStyle: {
              color: '#748AA1',
            },
          },
          data: ['Aug 2018', 'Sep 2018', 'Oct 2018', 'Nov 2018', 'Dec 2018', 'Jan 2019', 'Feb 2019', 'Mar 2019', 'Apr 2019', 'May 2019'],
        },
        yAxis: {
          type: 'value',
          show: true,
          axisTick: 0,
          min: 18.0,
          max: 20.5,
          axisLine: {
            show: false,
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: ['#EBEDF4'],
              width: 1,
              type: 'solid',
            },
          },
        },
        series: [
          {
            type: 'line',
            smooth: true,
            color: ['#29CB97'],
            showSymbol: false,
            data: [18.4, 18.8, 18.4, 19.55, 19.05, 19.54, 18.8, 19.5, 20.1, 19.05],
            symbol: 'circle',
            symbolSize: [1, 1],
          },
          {
            type: 'line',
            smooth: true,
            color: ['#4072EE'],
            showSymbol: false,
            data: [18.7, 18.5, 18.85, 18.5, 19.35, 18.9, 19.5, 18.9, 19.1, 18.35],
            symbol: 'circle',
            symbolSize: [1, 1],
          },
        ],
      })
    },

    //設備動作記錄のカスタマイズ線図
    renderItem(params, api) {
      var categoryIndex = api.value(0)
      var start = api.coord([api.value(1), categoryIndex])
      var end = api.coord([api.value(2), categoryIndex])
      var height = 10

      var rectShape = this.$echarts.graphic.clipRectByRect(
        {
          x: start[0],
          y: start[1] - height / 2,
          width: end[0] - start[0],
          height: height,
        },
        {
          x: params.coordSys.x,
          y: params.coordSys.y,
          width: params.coordSys.width,
          height: params.coordSys.height,
        }
      )

      return (
        rectShape && {
          type: 'rect',
          shape: rectShape,
          style: api.style(),
        }
      )
    },
    // 名前が一致するかどうかを判断する
    nameMatch(val) {
      if (val == '冷却デバイス') {
        return 'FAN'
      }
      if (val == '照明') {
        return 'LIGHT'
      }
      if (val == 'ポンプ') {
        return 'WATER'
      }
      if (val == '天窓北') {
        return 'NNSF'
      }
      if (val == '天窓東南') {
        return 'SESF'
      }
      if (val == '天窓西南') {
        return 'SWSF'
      }
      if (val == '側窓北') {
        return 'NSWN'
      }
      if (val == '側窓南') {
        return 'SSWN'
      }
    },

    //デバイスの制御履歴を表示ボタン事件
    deviceRecordProfile2() {
      this.historyData()
      if (this.historyFlag == false) {
        return
      }
     
      this.calendarData = []
      //2019-03-04 時間の変更
      // var startdt = new Date(this.recordStartTime)
      // var enddt = new Date(this.recordStopTime)
      var startdt=new Date(_$('#recordStartTime').val().replace(/-/g,'/'))
      var enddt = new Date(_$('#recordStopTime').val().replace(/-/g,'/'))
      var startiso = startdt.toISOString()
      var endiso = enddt.toISOString()
      var urlstr = 'http://www.iot-fitone.com/devhistory2?gwid=' + this.loginUser + '&start=' + startiso + '&end=' + endiso

      this.$ajax({
        method: 'GET',
        url: urlstr,
      })
        .then(res => {
          var objstr = JSON.stringify(res.data)
          var objres = JSON.parse(objstr)
          var resHistory = this.checkList.historyData
          for (var i = 0; i < objres.length; i++) {
            // title
            var titleStyle = objres[i].devid
            //「チェック」と「APIデータのdevid」は同じかどうか
            var resFlag = false
            for (var j = 0; j < resHistory.length; j++) {
              // 名前の一致
              var resHis = this.nameMatch(resHistory[j])
              // 「チェック」と「APIデータのdevid」が同じかどうかを判断する
              if (titleStyle == resHis) {
                resFlag = true
              }
            }

            //start、end
            var startStyle = new Date(objres[i].start)
            var stopStyle = new Date(objres[i].end)
            //アレイの定義
            var event_list = {}
            //チェックの名前
            event_list.title = titleStyle
            //背景の色
            if(titleStyle=='FAN'){
              event_list.backgroundColor='red'
              event_list.borderColor='red'
            }else if(titleStyle=='LIGHT'){
              event_list.backgroundColor='blue'
              event_list.borderColor='blue'
            }else if(titleStyle=='WATER'){
              event_list.backgroundColor='yellow'
              event_list.borderColor='yellow'
            }else if(titleStyle=='NNSF'){
              event_list.backgroundColor='black'
              event_list.borderColor='black'
            }else if(titleStyle=='SESF'){
              event_list.backgroundColor='green'
              event_list.borderColor='green'
            }else if(titleStyle=='SWSF'){
              event_list.backgroundColor='orange'
              event_list.borderColor='orange'
            }else if(titleStyle=='NSWN'){
              event_list.backgroundColor='gray'
              event_list.borderColor='gray'
            }else if(titleStyle=='SSWN'){
              event_list.backgroundColor='pink'
              event_list.borderColor='pink'
            }
            //チェックの開始時刻
            event_list.start =
              startStyle.getFullYear() +
              '-' +
              (startStyle.getMonth() + 1 > 10 ? startStyle.getMonth() + 1 : '0' + (startStyle.getMonth() + 1)) +
              '-' +
              (startStyle.getDate() < 10 ? '0' + startStyle.getDate() : startStyle.getDate()) +
              ' ' +
              (startStyle.getHours() < 10 ? '0' + startStyle.getHours() : startStyle.getHours()) +
              ':' +
              (startStyle.getMinutes() < 10 ? '0' + startStyle.getMinutes() : startStyle.getMinutes()) +
              ':' +
              (startStyle.getSeconds() < 10 ? '0' + startStyle.getSeconds() : startStyle.getSeconds())
              //チェックの終了時刻
            event_list.end =
              stopStyle.getFullYear() +
              '-' +
              (stopStyle.getMonth() + 1 > 10 ? stopStyle.getMonth() + 1 : '0' + (stopStyle.getMonth() + 1)) +
              '-' +
              (stopStyle.getDate() < 10 ? '0' + stopStyle.getDate() : stopStyle.getDate()) +
              ' ' +
              (stopStyle.getHours() < 10 ? '0' + stopStyle.getHours() : stopStyle.getHours()) +
              ':' +
              (stopStyle.getMinutes() < 10 ? '0' + stopStyle.getMinutes() : stopStyle.getMinutes()) +
              ':' +
              (stopStyle.getSeconds() < 10 ? '0' + stopStyle.getSeconds() : stopStyle.getSeconds())
            //「チェック」と「APIデータのdevid」は同じかどうか
            if (resFlag) {
              this.calendarData.push(event_list)
            }
          }
          //fullCalendarの表示
          _$('#recordProflieCalendar').fullCalendar({
            header: {
              left: 'prev,next today',
              center: 'title',
              right: 'month,basicWeek,basicDay',
            },
            //デフォルト表示週間
            defaultView: 'basicWeek',
            navLinks: true,
            editable: true, //引きずりと調整
            eventLimit: true, //事件の数を制限する
            events: this.calendarData,
          })
          //calendarDataのクリア
          _$('#recordProflieCalendar').fullCalendar('removeEventSources')
          //calendarDataのデータを追加する
          _$('#recordProflieCalendar').fullCalendar('addEventSource', this.calendarData)

          //2019-02-12 変更
          // var data3 = [
          //   [0, 9, 9.2],
          //   [0, 9.6, 10.2],
          //   [1, 10, 11],
          //   [2, 15, 16],
          //   [3, 9, 11],
          //   [4, 9, 15],
          //   [5, 9, 11],
          //   [6, 11, 12],
          //   [7, 9, 10],
          //   [7, 13, 14],
          // ]

          //変更
          // var FAN = [7, 18, 19]

          //for( var j = 0; j<objres.length; j++ ){

          //    var dt = new Date( objres[j].datetime )
          //    var hh = dt.getHours()
          //    var mm = dt.getMinutes()

          //    var mmp = mm / 60
          //    mmp.toFixed(2)

          //    var fhh = parseFloat(hh.toString())
          //    fhh = fhh + mmp

          //    var val = objres[j].value
          //    if( val == '1' ) FAN[1] = fhh
          //    if( val == '2' ) {
          //        FAN[2] = fhh
          //        data3.push( FAN )
          //        console.log(data3)
          //    }

          //2019-02-12 変更
          // data3.push(FAN)

          // this.deviceRecordProfile(data3)

          //  }
        })
        .catch(error => {
          console.log(error)
        })
    },

    // 2019-02-15 デバイスの制御履歴 変更
    // deviceRecordProfile(data) {
    //   var categories = ['側窗南', '側窗北', '天窗西南', '天窗東南', '天窗北', 'pump', '照明', '冷卻']
    //   let scheduleProflie = this.$echarts.init(document.getElementById('recordProflie'))

    //   scheduleProflie.setOption({
    //     tooltip: {
    //       formatter: function(params) {
    //         return params.marker + params.name + '：' + params.data[1] + ':00' + ' - ' + params.data[2] + ':00'
    //       },
    //     },
    //     grid: {
    //       x: 70,
    //       x2: 50,
    //       y: 0,
    //       height: 270,
    //     },
    //     xAxis: {
    //       min: 9,
    //       max: 19,
    //       splitNumber: 10,
    //       axisTick: 0,
    //       axisLine: {
    //         show: false,
    //       },
    //       splitLine: {
    //         lineStyle: {
    //           color: ['#EBEDF4'],
    //           width: 1,
    //           type: 'solid',
    //         },
    //       },
    //       axisLabel: {
    //         margin: 18,
    //         textStyle: {
    //           color: '#748AA1',
    //         },
    //         formatter: function(val) {
    //           return val + ':00'
    //         },
    //       },
    //     },
    //     yAxis: {
    //       data: categories,
    //       axisTick: 0,
    //       axisLabel: {
    //         show: true,
    //         margin: 60,
    //         textStyle: {
    //           color: '#748AA1',
    //           align: 'left',
    //         },
    //       },
    //       axisLine: {
    //         show: false,
    //       },
    //       splitLine: {
    //         show: true,
    //         lineStyle: {
    //           color: ['#EBEDF4'],
    //           width: 1,
    //           type: 'solid',
    //         },
    //       },
    //     },
    //     dataZoom: {
    //       show: true,
    //       left: 30,
    //       right: 50,
    //       zoomLock: true,
    //       xAxisIndex: 0,
    //       filterMode: 'weakFilter',
    //       showDataShadow: false,
    //       top: 400,
    //       height: 10,
    //       borderColor: 'transparent',
    //     },
    //     series: [
    //       {
    //         type: 'custom',
    //         renderItem: this.renderItem,
    //         encode: {
    //           x: [1, 1],
    //           y: 0,
    //         },
    //         itemStyle: {
    //           normal: {
    //             color: function(colorItem) {
    //               var colorList = ['#29CB97', '#29CB97', '#29CB97', '#29CB97', '#29CB97', '#4072EE', '#FEC400', '#B558F6']
    //               return colorList[colorItem.dataIndex]
    //             },
    //           },
    //         },

    //         data: data,
    //       },
    //     ],
    //   })
    // },
  },
}
</script>

<style lang="scss" scoped>
#HistoricalData {
  overflow: hidden;
  text-align: left;
}
.border-top-gray {
  border-top: 1px solid #ebedf4;
  .second-title {
    padding: 30px 31px 8px;
    font-family: PingFangSC-Regular;
    font-size: 20px;
    color: #31394d;
    letter-spacing: 0;
    &.echartsTime {
      border-bottom: 1px solid #ebedf4;
    }
  }
}
.history {
  .history-message {
    padding: 0 31px 26px;
    .input-time-line {
      padding: 15px;
    }
  }
  .check-list {
    overflow: hidden;
    display: block;
  }
  .submit-button {
    display: block;
    text-align: center;
    margin: 26px auto 10px;
    .clear-title {
      padding-right: 20px;
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.65);
      letter-spacing: 0;
    }
    .el-button--success {
      border-color: #00cc99;
      background-color: #00cc99;
    }
  }
}
//===el-carousel===

.el-carousel-record {
  &.el-carousel {
    @media (min-width: 998px) {
      margin: 20px 74px 71px;
      width: 82%;
    }
    @media (min-width: 1024px) {
      margin: 20px 84px 71px;
      width: 80.5%;
    }
    @media (min-width: 1050px) {
      margin: 20px 96px 71px;
      width: 78%;
    }
    @media (min-width: 1070px) {
      margin: 20px 105px 71px;
      width: 75%;
    }
    @media (min-width: 1280px) {
      margin: 20px 115px 71px;
      width: 75%;
    }
    .carousel-text {
      position: relative;
      top: -28px;
      left: -5px;
      text-align: right;
      .img-time {
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: rgba(255, 255, 255, 0.8);
        letter-spacing: 0;
        padding-right: 10px;
      }
      .img-load {
        opacity: 0.8;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #ffffff;
        text-align: left;
      }
      .el-icon-download {
        color: rgba(255, 255, 255, 0.8);
        border-radius: 1px;
      }
    }
  }
}

.ipcam_slide_show {
  width: 640px;
  height: 360px;
}
</style>
    

