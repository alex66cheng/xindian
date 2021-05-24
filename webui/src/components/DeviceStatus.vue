<template>
  <div id="deviceStatus">
    <div class="content-block" id="home2">
      <div class="first-title">{{ $t("DeviceStatus_Title") }}</div>
      <div class="bg-write switch">
        <el-row :gutter="30">
          <el-col :span="6">
            <div
              id="fan_div"
              class="switch-content"
              :class="{ 'bg-on': fanisOn, 'bg-off': fanisOff, 'bg-danger': fanisDanger }"
            >
              <div class="switch-first">{{ $t("DeviceStatus_Fan_Label")}}{{automaticMessageFAN}}</div>
              <div class="switch-state">{{fan_enable}}</div>
              <div class="float-left">
                <input
                  class="switch-button"
                  type="button"
                  :value="fan_action"
                  @click="openDialogVisible1 = true"
                >
              </div>
              <div class="btn-status-switch" :class="{offActiveCooling:isoffActiveCooling}" @click="skylightFan()">
                <i :class="{'switchManualImgCooling':isSwitchManualImgCooling, 'offActiveCooling':isoffActiveCooling}"></i>
                <span>{{switchManualCooling}}</span>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div
              id="light_div"
              class="switch-content"
              :class="{ 'bg-on': lightisOn, 'bg-off': lightisOff, 'bg-danger': lightisDanger }"
            >
              <div class="switch-first">{{ $t("DeviceStatus_Light_Label")}}{{automaticMessageLIGHT}}</div>
              <div class="switch-state">{{light_enable}}</div>
              <div class="float-left">
                <input
                  class="switch-button"
                  type="button"
                  :value="light_action"
                  @click="openDialogVisible = true"
                >
              </div>
              <div class="btn-status-switch" :class="{offActiveLighting:isoffActiveLighting}" @click="skylightLight()">
                <i :class="{'switchManualImgLighting':isSwitchManualImgLighting,'offActiveLighting':isoffActiveLighting}"></i>
                <span>{{switchManualLighting}}</span>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div
              id="pump_div"
              class="switch-content"
              :class="{ 'bg-on': pumpisOn, 'bg-off': pumpisOff, 'bg-danger': pumpisDanger }"
            >
              <div class="switch-first">{{ $t("DeviceStatus_Pump_Label")}}{{automaticMessagePUMP}}</div>
              <div class="switch-state">{{pump_enable}}</div>

              <div class="float-left">
                <input
                  class="switch-button"
                  type="button"
                  :value="pump_action"
                  @click="openDialogVisible2 = true"
                >
              </div>
              <div class="btn-status-switch" :class="{offActivePump:isoffActivePump}" @click="skylightPump()">
                <i :class="{'switchManualImgPump':isSwitchManualImgPump,'offActivePump':isoffActivePump}"></i>
                <span>{{switchManualPump}}</span>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div
              id="nnsf_div"
              class="switch-content"
              :class="{ 'bg-on': nnsfisOn, 'bg-off': nnsfisOff, 'bg-danger': nnsfisDanger }"
            >
              <div class="switch-first">{{ $t("DeviceStatus_NNSF_Label")}}{{automaticMessageNorth}}</div>
              <div class="switch-state">{{ xdata1 }}%</div>
              <div class="text-align-center">
                <el-slider v-model="data1" :disabled="nnsf_disable" show-input :value="data1" @change="moveNNSF" ></el-slider>
              </div>
              <div class="btn-status">
                <div class="btn-status-left" @click="closeNNSF" >{{btnCloseOneNorth}}</div>
                <div class="btn-status-right" @click="skylightNorth()">
                  <i
                    :class="{'switchAutomationImgNorth':isSwitchAutomationImgNorth,'switchManualImgNorth':isSwitchManualImgNorth}"
                  ></i>
                  <span>{{switchAutomationNorth}}</span>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="30" class="mt-27">
          <el-col :span="6">
            <div
              id="sesf_div"
              class="switch-content"
              :class="{ 'bg-on': sesfisOn, 'bg-off': sesfisOff, 'bg-danger': sesfisDanger }"
            >
              <div
                class="switch-first"
              >{{ $t("DeviceStatus_SESF_Label")}}{{automaticMessageSoutheast}}</div>
              <div class="switch-state">{{ xdata2 }}%</div>
              <div class="text-align-center">
                <el-slider v-model="data2" :disabled="sesf_disable" show-input :value="data2" @change="moveSESF" ></el-slider>
              </div>
              <div class="btn-status">
                <div class="btn-status-left" @click="closeSESF">{{btnCloseOneSoutheast}}</div>
                <div class="btn-status-right" @click="skylightSoutheast()">
                  <i
                    :class="{'switchAutomationImgSoutheast':isSwitchAutomationImgSoutheast,'switchManualImgSoutheast':isSwitchManualImgSoutheast}"
                  ></i>
                  <span>{{switchAutomationSoutheast}}</span>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div
              id="swsf_div"
              class="switch-content bg-on"
              :class="{ 'bg-on': swsfisOn, 'bg-off': swsfisOff, 'bg-danger': swsfisDanger }"
            >
              <div
                class="switch-first"
              >{{ $t("DeviceStatus_SWSF_Label")}}{{automaticMessageSouthwest}}</div>
              <div class="switch-state">{{ xdata3 }}%</div>
              <div class="text-align-center">
                 <el-slider v-model="data3" :disabled="swsf_disable" show-input :value="data3" @change="moveSWSF"  ></el-slider>
              </div>
              <div class="btn-status">
                <div class="btn-status-left" @click="closeSWSF" >{{btnCloseOneSouthwest}}</div>
                <div class="btn-status-right" @click="skylightSouthwest()">
                  <i
                    :class="{'switchAutomationImgSouthwest':isSwitchAutomationImgSouthwest,'switchManualImgSouthwest':isSwitchManualImgSouthwest}"
                  ></i>
                  <span>{{switchAutomationSouthwest}}</span>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div
              id="nswn_div"
              class="switch-content"
              :class="{ 'bg-on': nswnisOn, 'bg-off': nswnisOff, 'bg-danger': nswnisDanger }"
            >
              <div class="switch-first">{{ $t("DeviceStatus_NSWD_Label")}}{{automaticMessageNorths}}</div>
              <div class="switch-state">{{ xdata4 }}%</div>
              <div class="text-align-center">
                 <el-slider v-model="data4" :disabled="nswn_disable" show-input :value="data4" @change="moveNSWN"></el-slider>
              </div>
              <div class="btn-status">
                <div class="btn-status-left" @click="closeNSWN" >{{btnCloseOneNorths}}</div>
                <div class="btn-status-right" @click="sideWindowsNorth()">
                  <i
                    :class="{'switchAutomationImgNorths':isSwitchAutomationImgNorths,'switchManualImgNorths':isSwitchManualImgNorths}"
                  ></i>
                  <span>{{switchAutomationNorths}}</span>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div
              id="sswn_div"
              class="switch-content"
              :class="{ 'bg-on': sswnisOn, 'bg-off': sswnisOff, 'bg-danger': sswnisDanger }"
            >
              <div class="switch-first">{{ $t("DeviceStatus_SSWD_Label")}}{{automaticMessageSouths}}</div>
              <div class="switch-state">{{ xdata5 }}%</div>
              <div class="text-align-center">
                <el-slider v-model="data5" :disabled="sswn_disable" show-input :value="data5" @change="moveSSWN" ></el-slider>
                <a class="switch-retry">{{ $t("DeviceStatus_Retry_Action")}}</a>
              </div>
              <div class="btn-status">
                <div class="btn-status-left" @click="closeSSWN" >{{btnCloseOneSouths}}</div>
                <div class="btn-status-right" @click="sideWindowsSouth()">
                  <i
                    :class="{'switchAutomationImgSouths':isSwitchAutomationImgSouths,'switchManualImgSouths':isSwitchManualImgSouths}"
                  ></i>
                  <span>{{switchAutomationSouths}}</span>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="30" class="mt-27">
          <el-col :span="6">
            <div
              id="sunv_div"
              class="switch-content"
              :class="{ 'bg-on': sunvOn, 'bg-off': sunvOff, 'bg-danger': sunvDanger }"
            >
            
            <div class="switch-first">{{ $t("DeviceStatus_SUNV_Label")}}{{automaticMessageSUNV}}</div>
            <div class="switch-state">{{ xdata6 }}%</div>
             <div class="text-align-center">
                <el-slider v-model="data6" :disabled="sunv_disable" show-input :value="data6" @change="moveSUNV" ></el-slider>
                <a class="switch-retry">{{ $t("DeviceStatus_Retry_Action")}}</a>
              </div>
            
             <div class="btn-status">
                <div class="btn-status-left" @click="closeSUNV" >{{btnCloseOneSUNV}}</div>
                <div class="btn-status-right" @click="sunVisror()">
                  <i
                    :class="{'switchAutomationImgSUNV':isSwitchAutomationImgSUNV,'switchManualImgSUNV':isSwitchManualImgSUNV}"
                  ></i>
                  <span>{{switchAutomationSUNV}}</span>
                </div>
              </div>
              
            </div>
            
          </el-col>
        </el-row>
        <!-- モダール ——> ヒント -->
        <el-dialog :visible.sync="openDialogVisible" class="openDialog">
          <div
            class="message-content"
          >{{$t("DeviceStatus_Light_Label")}}{{ $t("DeviceStatus_On_Message")}}</div>
          <div class="text-align-right">
            <el-button
              class="cancelText"
              @click="openDialogVisible = false"
            >{{ $t("DeviceStatus_Cancel_Action")}}</el-button>
            <el-button
              class="successBtn"
              @click="tunOnOffLight"
            >{{ $t("DeviceStatus_Confirm_Action")}}</el-button>
          </div>
        </el-dialog>
        <el-dialog :visible.sync="openDialogVisible1" class="openDialog">
          <div
            class="message-content"
          >{{$t("DeviceStatus_Fan_Label")}}{{ $t("DeviceStatus_On_Message")}}</div>
          <div class="text-align-right">
            <el-button
              class="cancelText"
              @click="openDialogVisible1 = false"
            >{{ $t("DeviceStatus_Cancel_Action")}}</el-button>
            <el-button
              class="successBtn"
              @click="tunOnOffFan"
            >{{ $t("DeviceStatus_Confirm_Action")}}</el-button>
          </div>
        </el-dialog>
        <el-dialog :visible.sync="openDialogVisible2" class="openDialog">
          <div
            class="message-content"
          >{{$t("DeviceStatus_Pump_Label")}}{{ $t("DeviceStatus_On_Message")}}</div>
          <div class="text-align-right">
            <el-button
              class="cancelText"
              @click="openDialogVisible2 = false"
            >{{ $t("DeviceStatus_Cancel_Action")}}</el-button>
            <el-button
              class="successBtn"
              @click="tunOnOffPump"
            >{{ $t("DeviceStatus_Confirm_Action")}}</el-button>
          </div>
        </el-dialog>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'deviceStatus',
  data() {
    return {
      fanisOn: true,
      fanisOff: false,
      fanisDanger: false,

      lightisOn: true,
      lightisOff: false,
      lightisDanger: false,

      pumpisOn: true,
      pumpisOff: false,
      pumpisDanger: false,

      nnsfisOn: true,
      nnsfisOff: false,
      nnsfisDanger: false,

      sesfisOn: true,
      sesfisOff: false,
      sesfisDanger: false,

      swsfisOn: true,
      swsfisOff: false,
      swsfisDanger: false,

      nswnisOn: true,
      nswnisOff: false,
      nswnisDanger: false,

      sswnisOn: true,
      sswnisOff: false,
      sswnisDanger: false,
      
      sunvOn: true,
      sunvOff: false,
      sunvDanger: false,

      fan_enable: '啟用中',
      fan_action: this.$t('DeviceStatus_Off_Action'),

      light_enable: '啟用中',
      light_action: this.$t('DeviceStatus_Off_Action'),

      pump_enable: '啟用中',
      pump_action: this.$t('DeviceStatus_On_Action'),

      fan_doing: 0,
      light_doing: 0,
      pump_doing: 0,

      nnsf_doing: 0,
      sesf_doing: 0,
      swsf_doing: 0,
      nswn_doing: 0,
      sswn_doing: 0,
      sunv_doing: 0,

      nnsf_data: 0,
      sesf_data: 0,
      swsf_data: 0,
      nswn_data: 0,
      sswn_data: 0,
      sunv_data: 0,

      nnsf_target : 0,
     sesf_target : 0,
     swsf_target : 0,
     nswn_target : 0,
     sswn_target : 0,
     sunv_target : 0,

     nnsf_disable : false,
     sesf_disable : false,
     swsf_disable : false,
     nswn_disable : false,
     sswn_disable : false,
     sunv_disable : false,

      data1: 5,
      data2: 42,
      data3: 0,
      data4: 42,
      data5: 0,
      data6: 0,

      xdata1: 5,
     xdata2: 42,
     xdata3: 0,
     xdata4: 42,
     xdata5: 0,
     xdata6: 0,

      openDialogVisible: false,
      openDialogVisible1: false,
      openDialogVisible2: false,
      // 冷却デバイス
      automaticMessageFAN: '',
      switchManualCooling: '切換手動',
      isSwitchManualImgCooling: true,
      isoffActiveCooling: false,
      // 照明
      automaticMessageLIGHT: '',
      switchManualLighting: '切換手動',
      isSwitchManualImgLighting: true,
      isoffActiveLighting: false,
      // ポンプ
      automaticMessagePUMP: '',
      switchManualPump: '切換手動',
      isSwitchManualImgPump: true,
      isoffActivePump: false,
      // 天窓北
      automaticMessageNorth: '',
      btnCloseOneNorth: '一鍵關閉',
      switchAutomationNorth: '切換自動',
      isSwitchAutomationImgNorth: true,
      isSwitchManualImgNorth: false,
      // 天窓東南
      automaticMessageSoutheast: '',
      btnCloseOneSoutheast: '一鍵關閉',
      switchAutomationSoutheast: '切換自動',
      isSwitchAutomationImgSoutheast: true,
      isSwitchManualImgSoutheast: false,
      // 天窓西南
      automaticMessageSouthwest: '',
      btnCloseOneSouthwest: '一鍵關閉',
      switchAutomationSouthwest: '切換自動',
      isSwitchAutomationImgSouthwest: true,
      isSwitchManualImgSouthwest: false,
      // 側窓北
      automaticMessageNorths: '',
      btnCloseOneNorths: '一鍵關閉',
      switchAutomationNorths: '切換自動',
      isSwitchAutomationImgNorths: true,
      isSwitchManualImgNorths: false,
      // 側窓南
      automaticMessageSouths: '',
      btnCloseOneSouths: '一鍵關閉',
      switchAutomationSouths: '切換自動',
      isSwitchAutomationImgSouths: true,
      isSwitchManualImgSouths: false,
      
      // SUN Visor
      automaticMessageSUNV: '',
      btnCloseOneSUNV: '一鍵關閉',
      switchAutomationSUNV: '切換自動',
      isSwitchAutomationImgSUNV: true,
      isSwitchManualImgSUNV: false,
      
      loginUser:'',
    }
  },
  created() {
   this.loginUser = this.$session.get('loginUser')
   
    setInterval(this.getSensorsData, 1000)
//    setInterval(this.getDeviceMode, 1000)
    
    this.first_time = 1
   this.gwid = this.$session.get( 'loginUser')
   console.log('DeviceStatus gwid=' + this.gwid )
  },
  methods: {
    closeNNSF() {
      this.data1 = 0
      this.moveNNSF()
    },
    
    moveNNSF() {
      console.log(this, 'moveNNSF')
      if (this.nnsf_doing == 0 || this.data1 == 0) {
       alert('Move 天窓北 ' + this.data1 + '%')
       
        //switch to manual mode
       var nnsfobj2 = {}
       nnsfobj2.gwid = this.loginUser
       nnsfobj2.param = 'NNSF'
       nnsfobj2.status = 'normal'
       nnsfobj2.mode = 'manual'
       
      this.$ajax({
        method: 'GET',
        url: 'http://www.iot-fitone.com/setmode?gwid=' + nnsfobj2.gwid + '&param=' + nnsfobj2.param + '&mode=' + nnsfobj2.mode + '&status=' + nnsfobj2.status
      })
      .then(res => {
      })
       .catch(error => {
        console.log(error)
      })
        //-------------------
       
        var urlstr = 'http://www.iot-fitone.com/do?gwid=' + this.gwid + '&sfid=NNSF&sfvalue=' + this.data1.toString()

        if (this.data1 == 0) urlstr = 'http://www.iot-fitone.com/do?gwid=' + this.gwid + '&sfid=NNSF&sfvalue=999'

        this.$ajax({
          method: 'GET',
          url: urlstr,
        })
        this.nnsf_doing = parseInt(((this.data1 - this.nnsf_data) * 60) / 100)
        if (this.nnsf_doing < 0) this.nnsf_doing = this.nnsf_doing * -1

        if (this.data1 > 0) {
          this.nnsfisOn = true
          this.nnsfisOff = false
          this.nnsfisDanger = false
        } else {
          this.nnsfisOn = false
          this.nnsfisOff = true
          this.nnsfisDanger = false
        }

        //  this.nnsf_data = this.data1
           this.nnsf_target = this.data1
           this.nnsf_disable = true

      } else {
        alert('天窓北 is busy')
        this.data1 = this.nnsf_target
      }

      //this.getSensorsData()
    },

    closeSESF() {
      this.data2 = 0
      this.moveSESF()
    },
    moveSESF() {
      if (this.sesf_doing == 0 || this.data2 == 0) {
        alert('Move 天窓東南' + this.data2 + '%')
        
         //switch to manual mode
       var sesfobj2 = {}
       sesfobj2.gwid = this.loginUser
       sesfobj2.param = 'SESF'
       sesfobj2.status = 'normal'
       sesfobj2.mode = 'manual'
       
      this.$ajax({
        method: 'GET',
        url: 'http://www.iot-fitone.com/setmode?gwid=' + sesfobj2.gwid + '&param=' + sesfobj2.param + '&mode=' + sesfobj2.mode + '&status=' + sesfobj2.status
      })
      .then(res => {
      })
       .catch(error => {
        console.log(error)
      })
        //-------------------
        
        var urlstr = 'http://www.iot-fitone.com/do?gwid=' + this.gwid + '&sfid=SESF&sfvalue=' + this.data2.toString()
        if (this.data2 == 0) urlstr = 'http://www.iot-fitone.com/do?gwid=' + this.gwid + '&sfid=SESF&sfvalue=999'

        this.$ajax({
          method: 'GET',
          url: urlstr,
        })

        this.sesf_doing = parseInt(((this.data2 - this.sesf_data) * 60) / 100)
        if (this.sesf_doing < 0) this.sesf_doing = this.sesf_doing * -1
        if (this.data2 > 0) {
          this.sesfisOn = true
          this.sesfisOff = false
          this.sesfisDanger = false
        } else {
          this.sesfisOn = false
          this.sesfisOff = true
          this.sesfisDanger = false
        }

        //  this.sesf_data = this.data2
         this.sesf_target = this.data2
         this.sesf_disable = true

      } else {
        alert('天窓東南 is busy')
        this.data2 = this.sesf_target
      }

      // this.getSensorsData()
    },

closeSWSF() {
      this.data3 = 0
      this.moveSWSF()
    },
    moveSWSF() {
      if (this.swsf_doing == 0 || this.data3 == 0) {
        alert('Move 天窓西南' + this.data3 + '%')
        
         //switch to manual mode
       var swsfobj2 = {}
       swsfobj2.gwid = this.loginUser
       swsfobj2.param = 'SWSF'
       swsfobj2.status = 'normal'
       swsfobj2.mode = 'manual'
       
      this.$ajax({
        method: 'GET',
        url: 'http://www.iot-fitone.com/setmode?gwid=' + swsfobj2.gwid + '&param=' + swsfobj2.param + '&mode=' + swsfobj2.mode + '&status=' + swsfobj2.status
      })
      .then(res => {
      })
       .catch(error => {
        console.log(error)
      })
        //-------------------
        

        var urlstr = 'http://www.iot-fitone.com/do?gwid='+ this.gwid + '&sfid=SWSF&sfvalue=' + this.data3.toString()
        if (this.data3 == 0) urlstr = 'http://www.iot-fitone.com/do?gwid=' + this.gwid + '&sfid=SWSF&sfvalue=999'

        this.$ajax({
          method: 'GET',
          url: urlstr,
        })

        this.swsf_doing = parseInt(((this.data3 - this.swsf_data) * 60) / 100)
        if (this.swsf_doing < 0) this.swsf_doing = this.swsf_doing * -1

        if (this.data3 > 0) {
          this.swsfisOn = true
          this.swsfisOff = false
          this.swsfisDanger = false
        } else {
          this.swsfisOn = false
          this.swsfisOff = true
          this.swsfisDanger = false
        }

        //  this.nswn_data = this.data4
        this.nswn_target = this.data4
        this.nswn_disable = true

      } else {
        alert('天窓西南 is busy')
        this.data3 = this.swsf_data
      }
      //    this.getSensorsData()
    },
closeNSWN() {
      this.data4 = 0
      this.moveNSWN()
    },
    moveNSWN() {
      if (this.nswn_doing == 0 || this.data4 == 0) {
        alert('Move 側窓北' + this.data4 + '%')
        
        //switch to manual mode
       var nswnobj2 = {}
       nswnobj2.gwid = this.loginUser
       nswnobj2.param = 'NSWN'
       nswnobj2.status = 'normal'
       nswnobj2.mode = 'manual'
       
      this.$ajax({
        method: 'GET',
        url: 'http://www.iot-fitone.com/setmode?gwid=' + nswnobj2.gwid + '&param=' + nswnobj2.param + '&mode=' + nswnobj2.mode + '&status=' + nswnobj2.status
      })
      .then(res => {
      })
       .catch(error => {
        console.log(error)
      })
        //-------------------

        var urlstr = 'http://www.iot-fitone.com/do?gwid=' + this.gwid + '&sfid=NSWN&sfvalue=' + this.data4.toString()
        if (this.data4 == 0) urlstr = 'http://www.iot-fitone.com/do?gwid=' + this.gwid + '&sfid=NSWN&sfvalue=999'

        this.$ajax({
          method: 'GET',
          url: urlstr,
        })
        this.nswn_doing = parseInt(((this.data4 - this.nswn_data) * 60) / 100)
        if (this.nswn_doing < 0) this.nswn_doing = this.nswn_doing * -1

        if (this.data4 > 0) {
          this.nswnisOn = true
          this.nswnisOff = false
          this.nswnisDanger = false
        } else {
          this.nswnisOn = false
          this.nswnisOff = true
          this.nswnisDanger = false
        }

        //  this.nswn_data = this.data4
          this.nswn_target = this.data4
          this.nswn_disable = true

      } else {
        alert('側窓北 is busy')
        this.data4 = this.nswn_data
      }
      //    this.getSensorsData()
    },

closeSSWN() {
      this.data5 = 0
      this.moveSSWN()
    },
    moveSSWN() {
      if (this.sswn_doing == 0 || this.data5 == 0) {
        alert('Move 側窓南' + this.data5 + '%')
        
         //switch to manual mode
       var sswnobj2 = {}
       sswnobj2.gwid = this.loginUser
       sswnobj2.param = 'SSWN'
       sswnobj2.status = 'normal'
       sswnobj2.mode = 'manual'
       
      this.$ajax({
        method: 'GET',
        url: 'http://www.iot-fitone.com/setmode?gwid=' + sswnobj2.gwid + '&param=' + sswnobj2.param + '&mode=' + sswnobj2.mode + '&status=' + sswnobj2.status
      })
      .then(res => {
      })
       .catch(error => {
        console.log(error)
      })
        //-------------------
        
        var urlstr = 'http://www.iot-fitone.com/do?gwid=' + this.gwid + '&sfid=SSWN&sfvalue=' + this.data5.toString()
        if (this.data5 == 0) urlstr = 'http://www.iot-fitone.com/do?gwid=' + this.gwid + '&sfid=SSWN&sfvalue=999'

        this.$ajax({
          method: 'GET',
          url: urlstr,
        })

        this.sswn_doing = parseInt(((this.data5 - this.sswn_data) * 60) / 100)
        if (this.sswn_doing < 0) this.sswn_doing = this.sswn_doing * -1

        if (this.data5 > 0) {
          this.sswnisOn = true
          this.sswnisOff = false
          this.sswnisDanger = false
        } else {
          this.sswnisOn = false
          this.sswnisOff = true
          this.sswnisDanger = false
        }

        // this.sswn_data = this.data5
          this.sswn_target = this.data5
          this.sswn_disable = true

      } else {
        alert('側窓南 is busy')
        this.data5 = this.nswn_data
      }
      //   this.getSensorsData()
    },
    
    closeSUNV() {
      this.data6 = 0
      this.moveSUNV()
    },
     moveSUNV() {
      if (this.sunv_doing == 0 || this.data6 == 0) {
        alert('Move Sun Visor' + this.data6 + '%')
        
        //switch to manual mode
       var sunvobj2 = {}
       sunvobj2.gwid = this.loginUser
       sunvobj2.param = 'SUNV'
       sunvobj2.status = 'normal'
       sunvobj2.mode = 'manual'
       
      this.$ajax({
        method: 'GET',
        url: 'http://www.iot-fitone.com/setmode?gwid=' + sunvobj2.gwid + '&param=' + sunvobj2.param + '&mode=' + sunvobj2.mode + '&status=' + sunvobj2.status
      })
      .then(res => {
      })
       .catch(error => {
        console.log(error)
      })
        //-------------------
        
        
        var urlstr = 'http://www.iot-fitone.com/do?gwid=' + this.gwid + '&sfid=SUNV&sfvalue=' + this.data6.toString()
        if (this.data6 == 0) urlstr = 'http://www.iot-fitone.com/do?gwid=' + this.gwid + '&sfid=SUNV&sfvalue=999'

        this.$ajax({
          method: 'GET',
          url: urlstr,
        })

        this.sunv_doing = parseInt(((this.data6 - this.sunv_data) * 60) / 100)
        if (this.sunv_doing < 0) this.sunv_doing = this.sunv_doing * -1

        if (this.data6 > 0) {
          this.sunvOn = true
          this.sunvOff = false
          this.sunvDanger = false
        } else {
          this.sunvOn = false
          this.sunvOff = true
          this.sunvDanger = false
        }

        // this.sswn_data = this.data5
          this.sunv_target = this.data6
          this.sunv_disable = true

      } else {
        alert('Sun Visor is busy')
        this.data6 = this.sunv_data
      }
      //   this.getSensorsData()
    },


    moveXXXX() {
      alert('Move XXX' + this.data6)
    },

    tunOnOffFan() {
    
     //switch to manual mode
       var fanobj2 = {}
       fanobj2.gwid = this.loginUser
       fanobj2.param = 'FAN'
       fanobj2.status = 'normal'
       fanobj2.mode = 'manual'
       
      this.$ajax({
        method: 'GET',
        url: 'http://www.iot-fitone.com/setmode?gwid=' + fanobj2.gwid + '&param=' + fanobj2.param + '&mode=' + fanobj2.mode + '&status=' + fanobj2.status
      })
      .then(res => {
      })
       .catch(error => {
        console.log(error)
      })
        //-------------------
        
      // alert('tunOnOffFan')
      if (this.fanisOff) {
        console.log('Turn On Fan')
        //文字の色を切り替える
        this.isoffActiveCooling = true
        this.fan_enable = 'オン'
        this.fan_action = 'オフ'

        this.fanisOn = true
        this.fanisOff = false
        this.fanisDanger = false

        this.$ajax({
          method: 'GET',
          url: 'http://www.iot-fitone.com/do?gwid=' + this.gwid + '&ofid=FAN&ofvalue=1',
        })

        this.openDialogVisible1 = false

        this.fan_doing = 10

        return
      }

      if (this.fanisOn) {
        console.log('Turn Off Fan')
        //文字の色を切り替える
        this.isoffActiveCooling = false
        this.fan_enable = 'オフ'
        this.fan_action = 'オン'

        this.fanisOn = false
        this.fanisOff = true
        this.fanisDanger = false

        this.$ajax({
          method: 'GET',
          url: 'http://www.iot-fitone.com/do?gwid=' + this.gwid + '&ofid=FAN&ofvalue=2',
        })

        this.openDialogVisible1 = false

        this.fan_doing = 10

        return
      }
    },

    tunOnOffLight() {
     //switch to manual mode
       var lightobj2 = {}
       lightobj2.gwid = this.loginUser
       lightobj2.param = 'LIGHT'
       lightobj2.status = 'normal'
       lightobj2.mode = 'manual'
       
      this.$ajax({
        method: 'GET',
        url: 'http://www.iot-fitone.com/setmode?gwid=' + lightobj2.gwid + '&param=' + lightobj2.param + '&mode=' + lightobj2.mode + '&status=' + lightobj2.status
      })
      .then(res => {
      })
       .catch(error => {
        console.log(error)
      })
        //-------------------
        
      //alert('tunOnOffLight')

      if (this.lightisOff) {
        //文字の色を切り替える
        this.isoffActiveLighting = true

        this.light_enable = 'オン'
        this.light_action = 'オフ'

        this.lightisOn = true
        this.lightisOff = false
        this.lightisDanger = false

        this.$ajax({
          method: 'GET',
          url: 'http://www.iot-fitone.com/do?gwid=' + this.gwid + '&ofid=LIGHT&ofvalue=1',
        })

        this.openDialogVisible = false

        this.light_doing = 10

        return
      }

      if (this.lightisOn) {
        //文字の色を切り替える
        this.isoffActiveLighting = false

        this.light_enable = 'オフ'
        this.light_action = 'オン'

        this.lightisOn = false
        this.lightisOff = true
        this.lightisDanger = false

        this.$ajax({
          method: 'GET',
          url: 'http://www.iot-fitone.com/do?gwid=' + this.gwid + '&ofid=LIGHT&ofvalue=2',
        })

        this.openDialogVisible = false

        this.light_doing = 10

        return
      }
    },

    tunOnOffPump() {
    
    //switch to manual mode
       var waterobj2 = {}
       waterobj2.gwid = this.loginUser
       waterobj2.param = 'WATER'
       waterobj2.status = 'normal'
       waterobj2.mode = 'manual'
       
      this.$ajax({
        method: 'GET',
        url: 'http://www.iot-fitone.com/setmode?gwid=' + waterobj2.gwid + '&param=' + waterobj2.param + '&mode=' + waterobj2.mode + '&status=' + waterobj2.status
      })
      .then(res => {
      })
       .catch(error => {
        console.log(error)
      })
        //-------------------
        
      // alert('tunOnOffPump')

      if (this.pumpisOff) {
        //文字の色を切り替える
        this.isoffActivePump = true

        this.pump_enable = 'オン'
        this.pump_action = 'オフ'

        this.pumpisOn = true
        this.pumpisOff = false
        this.pumpisDanger = false
        this.$ajax({
          method: 'GET',
          url: 'http://www.iot-fitone.com/do?gwid=' + this.gwid + '&ofid=WATER&ofvalue=1',
        })

        this.openDialogVisible2 = false

        this.pump_doing = 10

        return
      }

      if (this.pumpisOn) {
        //文字の色を切り替える
        this.isoffActivePump = false

        this.pump_enable = 'オフ'
        this.pump_action = 'オン'

        this.pumpisOn = false
        this.pumpisOff = true
        this.pumpisDanger = false
        this.$ajax({
          method: 'GET',
          url: 'http://www.iot-fitone.com/do?gwid=' + this.gwid + '&ofid=WATER&ofvalue=2',
        })

        this.openDialogVisible2 = false

        this.pump_doing = 10

        return
      }
    },
    
    getDeviceMode() {
      this.$ajax({
        method: 'GET',
        url: 'http://www.iot-fitone.com/query4?gwid=' + this.gwid,
      })
       .then(res => {
          var objstr = JSON.stringify(res.data)
          console.log(objstr)
          var objres = JSON.parse(objstr)
          
          if( objres.devices ) {
            var devicesArray = objres.devices
            if( Array.isArray(devicesArray) ) {
              for( var i=0; i<devicesArray.length; i++ ) {
                var deviceobj = devicesArray[i]
                if( deviceobj.param && deviceobj.mode ) {
                  if( deviceobj.param == 'FAN' ){
                    if( deviceobj.mode == 'auto' ) {
                      this.automaticMessageFAN = ' - 自動'
                      this.switchManualCooling = '切換手動'
                      this.isSwitchManualImgCooling= true
                      this.isoffActiveCooling= false
                    } else {
                      this.automaticMessageFAN = ''
                      this.switchManualCooling = '切換自動'
                      this.isSwitchManualImgCooling= false
                      this.isoffActiveCooling= true
                    }
                  }
                  
                  if( deviceobj.param == 'LIGHT' ){
                    if( deviceobj.mode == 'auto' ) {
                      this.automaticMessageLIGHT = ' - 自動'
                      this.switchManualLighting = '切換手動'
                      this.isSwitchManualImgLighting= true
                      this.isoffActiveLighting= false
                    } else {
                      this.automaticMessageLIGHT = ''
                      this.switchManualLighting = '切換自動'
                      this.isSwitchManualImgLighting= false
                      this.isoffActiveLighting= true
                    }
                  }
                  
                  if( deviceobj.param == 'WATER' ){
                   if( deviceobj.mode == 'auto' ) {
                      this.automaticMessagePUMP = ' - 自動'
                      this.switchManualPump = '切換手動'
                      this.isSwitchManualImgPump= true
                      this.isoffActivePump= false
                    } else {
                      this.automaticMessagePUMP = ''
                      this.switchManualPump = '切換自動'
                      this.isSwitchManualImgPump= false
                      this.isoffActivePump= true
                    }
                  }
                  
                  if( deviceobj.param == 'NNSF' ){
                    if( deviceobj.mode == 'auto' ) {
                      this.automaticMessageNorth = ' - 自動'
                      this.switchAutomationNorth = '切換手動'
                      this.isSwitchAutomationImgNorth= false
                      this.isSwitchManualImgNorth= true
                    } else {
                      this.automaticMessageNorth = ''
                      this.switchAutomationNorth = '切換自動'
                      this.isSwitchAutomationImgNorth= true
                      this.isSwitchManualImgNorth= false
                    }
                  }
                  
                  if( deviceobj.param == 'SESF' ){
                    if( deviceobj.mode == 'auto' ) {
                      this.automaticMessageSoutheast = ' - 自動'
                      this.switchAutomationSoutheast = '切換手動'
                      this.isSwitchAutomationImgSoutheast= false
                      this.isSwitchManualImgSoutheast= true
                    } else {
                      this.automaticMessageSoutheast = ''
                      this.switchAutomationSoutheast = '切換自動'
                      this.isSwitchAutomationImgSoutheast= true
                      this.isSwitchManualImgSoutheast= false
                    }
                  }
                  
                  if( deviceobj.param == 'SWSF' ){
                    if( deviceobj.mode == 'auto' ) {
                      this.automaticMessageSouthwest = ' - 自動'
                      this.switchAutomationSouthwest = '切換手動'
                      this.isSwitchAutomationImgSouthwest= false
                      this.isSwitchManualImgSouthwest= true
                    } else {
                      this.automaticMessageSouthwest = ''
                      this.switchAutomationSouthwest = '切換自動'
                      this.isSwitchAutomationImgSouthwest= true
                      this.isSwitchManualImgSouthwest= false
                    }
                  }
                  
                  if( deviceobj.param == 'NSWN' ){
                    if( deviceobj.mode == 'auto' ) {
                      this.automaticMessageNorths = ' - 自動'
                      this.switchAutomationNorths = '切換手動'
                       this.isSwitchAutomationImgNorths= false
                      this.isSwitchManualImgNorths= true
                    } else {
                      this.automaticMessageNorths = ''
                      this.switchAutomationNorths = '切換自動'
                      this.isSwitchAutomationImgNorths= true
                      this.isSwitchManualImgNorths= false
                    }
                  }
                  
                  if( deviceobj.param == 'SSWN' ){
                    if( deviceobj.mode == 'auto' ) {
                      this.automaticMessageSouths = ' - 自動'
                      this.switchAutomationSouths = '切換手動'
                       this.isSwitchAutomationImgSouths= false
                      this.isSwitchManualImgSouths= true
                    } else {
                      this.automaticMessageSouths = ''
                      this.switchAutomationSouths = '切換自動'
                      this.isSwitchAutomationImgSouths= true
                      this.isSwitchManualImgSouths= false
                    }
                  }
                  
                   if( deviceobj.param == 'SUNV' ){
                    if( deviceobj.mode == 'auto' ) {
                     this.automaticMessageSUNV = ' - 自動'
                      this.switchAutomationSUNV = '切換手動'
                       this.isSwitchAutomationImgSUNV= false
                      this.isSwitchManualImgSUNV= true
                    } else {
                      this.automaticMessageSUNV = ''
                      this.switchAutomationSUNV = '切換自動'
                      this.isSwitchAutomationImgSUNV= true
                      this.isSwitchManualImgSUNV= false
                    }
                  }
                  
                }
              }
            }
          }
         
       })
       .catch(error => {
          console.log(error)
       })
    },
    
    getSensorsData() {
      this.$ajax({
        method: 'GET',
        url: 'http://www.iot-fitone.com/query?gwid=' + this.gwid,
      })
        .then(res => {
          var objstr = JSON.stringify(res.data)
          //  console.log(objstr)
          var objres = JSON.parse(objstr)

          if (this.nnsf_doing == 0) {
          this.nnsf_disable = false
          this.xdata1 = parseInt( objres.NNSF )
         if( this.first_time == 1 ) this.data1 = parseInt( objres.NNSF )
         this.nnsf_data = parseInt( objres.NNSF )

            if (this.xdata1 > 0) {
              this.nnsfisOn = true
              this.nnsfisOff = false
              this.nnsfisDanger = false
            } else {
              this.nnsfisOn = false
              this.nnsfisOff = true
              this.nnsfisDanger = false
            }
          } else {
          this.nnsf_doing--

          var nnsf_now_postion = 0

          if( this.nnsf_target > this.nnsf_data ) nnsf_now_postion = this.nnsf_target - 100/60*this.nnsf_doing
          else nnsf_now_postion = this.nnsf_target + 100/60*this.nnsf_doing

         // this.xdata1 = nnsf_now_postion.toFixed(0) + '% -->' + this.nnsf_target
         this.xdata1 = nnsf_now_postion.toFixed(0)
          }

          if( this.sesf_doing == 0 ){
         this.sesf_disable = false
         this.xdata2 = parseInt( objres.SESF )
         if( this.first_time == 1 ) this.data2 = parseInt( objres.SESF )
         this.sesf_data = parseInt( objres.SESF )


          if( this.xdata2 > 0 ) {

            this.sesfisOn = true
            this.sesfisOff = false
            this.sesfisDanger = false

         } else {

            this.sesfisOn = false
            this.sesfisOff = true
            this.sesfisDanger = false

         }
         } else {
         this.sesf_doing--

         var sesf_now_postion = 0

         if( this.sesf_target > this.sesf_data ) sesf_now_postion = this.sesf_target - 100/60*this.sesf_doing
         else sesf_now_postion = this.sesf_target + 100/60*this.sesf_doing

         //this.xdata2 = sesf_now_postion.toFixed(0) + '% -->' + this.sesf_target
           this.xdata2 = sesf_now_postion.toFixed(0)
         }

         if( this.swsf_doing == 0 ){
         this.swsf_disable = false
         this.xdata3 = parseInt( objres.SWSF )
         if( this.first_time == 1 ) this.data3 = parseInt( objres.SWSF )
         this.swsf_data = parseInt( objres.SWSF )
          if( this.xdata3 > 0 ) {

            this.swsfisOn = true
            this.swsfisOff = false
            this.swsfisDanger = false

         } else {

            this.swsfisOn = false
            this.swsfisOff = true
            this.swsfisDanger = false

         }

          } else {
         this.swsf_doing--

         var swsf_now_postion = 0

           if( this.swsf_target > this.swsf_data ) swsf_now_postion = this.swsf_target - 100/60*this.swsf_doing
           else swsf_now_postion = this.swsf_target + 100/60*this.swsf_doing

          // this.xdata3 = swsf_now_postion.toFixed(0) + '% -->' + this.swsf_target
           this.xdata3 = swsf_now_postion.toFixed(0)
         }

         if( this.nswn_doing == 0 ){
        this.nswn_disable = false
        if( this.first_time == 1 ) this.data4 = parseInt( objres.NSWN )
        this.xdata4 = parseInt( objres.NSWN )
        this.nswn_data = parseInt( objres.NSWN )

        if( this.xdata4 > 0 ) {

           this.nswnisOn = true
           this.nswnisOff = false
           this.nswnisDanger = false

        } else {

           this.nswnisOn = false
           this.nswnisOff = true
           this.nswnisDanger = false

        }

         } else {
        this.nswn_doing--

        var nswn_now_postion = 0

          if( this.nswn_target > this.nswn_data ) nswn_now_postion = this.nswn_target - 100/60*this.nswn_doing
          else nswn_now_postion = this.nswn_target + 100/60*this.nswn_doing

         // this.xdata4 = nswn_now_postion.toFixed(0) + '% -->' + this.nswn_target
          this.xdata4 = nswn_now_postion.toFixed(0)

        }

        if( this.sswn_doing == 0 ){
        this.sswn_disable = false
        if( this.first_time == 1 ) this.data5 = parseInt( objres.SSWN )
        this.xdata5 = parseInt( objres.SSWN )

        this.sswn_data = parseInt( objres.SSWN )

         if( this.xdata5 > 0 ) {

           this.sswnisOn = true
           this.sswnisOff = false
           this.sswnisDanger = false

        } else {

           this.sswnisOn = false
           this.sswnisOff = true
           this.sswnisDanger = false

        }

         } else {
        this.sswn_doing--

        var sswn_now_postion = 0

          if( this.sswn_target > this.sswn_data ) sswn_now_postion = this.sswn_target - 100/60*this.sswn_doing
          else sswn_now_postion = this.sswn_target + 100/60*this.sswn_doing

        //  this.xdata5 = sswn_now_postion.toFixed(0) + '% -->' + this.sswn_target
          this.xdata5 = sswn_now_postion.toFixed(0)
        }
        
        if( this.sunv_doing == 0 ){
        this.sunv_disable = false
        if( this.first_time == 1 ) this.data6 = parseInt( objres.SUNV )
        this.xdata6 = parseInt( objres.SUNV )

        this.sunv_data = parseInt( objres.SUNV )

         if( this.xdata6 > 0 ) {

           this.sunvOn = true
           this.sunvOff = false
           this.sunvDanger = false

        } else {

           this.sunvOn = false
           this.sunvOff = true
           this.sunvDanger = false

        }

         } else {
        this.sunv_doing--

        var sunv_now_postion = 0

          if( this.sunv_target > this.sunv_data ) sunv_now_postion = this.sunv_target - 100/60*this.sunv_doing
          else sunv_now_postion = this.sunv_target + 100/60*this.sunv_doing

        //  this.xdata5 = sswn_now_postion.toFixed(0) + '% -->' + this.sswn_target
          this.xdata6 = sunv_now_postion.toFixed(0)
        }
        
        
        this.first_time = 0

          if (this.fan_doing == 0) {
            if (objres.FAN == 'Off') {
              this.fan_enable = 'オフ'
              this.fan_action = 'オン'

              this.fanisOn = false
              this.fanisOff = true
              this.fanisDanger = false
            } else {
              this.fan_enable = 'オン'
              this.fan_action = 'オフ'

              this.fanisOn = true
              this.fanisOff = false
              this.fanisDanger = false
            }
          } else {
            this.fan_doing--
          }

          if (this.light_doing == 0) {
            if (objres.LIGHTING == 'Off') {
              this.light_enable = 'オフ'
              this.light_action = 'オン'

              this.lightisOn = false
              this.lightisOff = true
              this.lightisDanger = false
            } else {
              this.light_enable = 'オン'
              this.light_action = 'オフ'

              this.lightisOn = true
              this.lightisOff = false
              this.lightisDanger = false
            }
          } else {
            this.light_doing--
          }

          if (this.pump_doing == 0) {
            if (objres.WATER == 'Off') {
              this.pump_enable = 'オフ'
              this.pump_action = 'オン'

              this.pumpisOn = false
              this.pumpisOff = true
              this.pumpisDanger = false
            } else {
              this.pump_enable = 'オン'
              this.pump_action = 'オフ'

              this.pumpisOn = true
              this.pumpisOff = false
              this.pumpisDanger = false
            }
          } else {
            this.pump_doing--
          }
        })
        .catch(error => {
          console.log(error)
        })
    },

    openDevice() {
      this.$confirm('照明設備即將開啟請確認，如有預設條件將被取消', null, {
        confirmButtonText: '確認',
        cancelButtonText: '取消',
        class: 'openDevice',
      })
        .then(() => {
          this.$message({
            type: 'success',
            message: '成功を開啟!',
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '成功を取消',
          })
        })
    },
    
     skylightFan() {
     
       var fanobj = {}
       fanobj.gwid = this.loginUser
       fanobj.param = 'FAN'
       fanobj.status = 'normal'
     
       if (this.switchManualCooling == '切換自動') {
          fanobj.mode = 'auto'
       } else {
          fanobj.mode = 'manual'
       }
       
       var urlobj = 'http://www.iot-fitone.com/setmode?gwid=' + fanobj.gwid + '&param=' + fanobj.param + '&mode=' + fanobj.mode + '&status=' + fanobj.status
       
       console.log(urlobj)
       
       this.$ajax({
        method: 'GET',
        url: 'http://www.iot-fitone.com/setmode?gwid=' + fanobj.gwid + '&param=' + fanobj.param + '&mode=' + fanobj.mode + '&status=' + fanobj.status
      })
      .then(res => {
      })
       .catch(error => {
        console.log(error)
      })
    },
    
    skylightLight() {
    
       var lightobj = {}
       lightobj.gwid = this.loginUser
       lightobj.param = 'LIGHT'
       lightobj.status = 'normal'
     
       if (this.switchManualLighting == '切換自動') {
          lightobj.mode = 'auto'
       } else {
          lightobj.mode = 'manual'
       }
       
       this.$ajax({
        method: 'GET',
        url: 'http://www.iot-fitone.com/setmode?gwid=' + lightobj.gwid + '&param=' + lightobj.param + '&mode=' + lightobj.mode + '&status=' + lightobj.status
      })
      .then(res => {
      })
       .catch(error => {
        console.log(error)
      })
    },
    
    skylightPump() {
    
       var waterobj = {}
       waterobj.gwid = this.loginUser
       waterobj.param = 'WATER'
       waterobj.status = 'normal'
     
       if (this.switchManualPump == '切換自動') {
          waterobj.mode = 'auto'
       } else {
          waterobj.mode = 'manual'
       }
       
      this.$ajax({
        method: 'GET',
        url: 'http://www.iot-fitone.com/setmode?gwid=' + waterobj.gwid + '&param=' + waterobj.param + '&mode=' + waterobj.mode + '&status=' + waterobj.status
      })
      .then(res => {
      })
       .catch(error => {
        console.log(error)
      })
        
    },
    
    //天窓北切り替え
    skylightNorth() {
    
      var nnsfobj1 = {}
       nnsfobj1.gwid = this.loginUser
       nnsfobj1.param = 'NNSF'
       nnsfobj1.status = 'normal'
     
       if (this.switchAutomationNorth == '切換自動') {
          nnsfobj1.mode = 'auto'
       } else {
          nnsfobj1.mode = 'manual'
       }
       
       var urlobj = 'http://www.iot-fitone.com/setmode?gwid=' + nnsfobj1.gwid + '&param=' + nnsfobj1.param + '&mode=' + nnsfobj1.mode + '&status=' + nnsfobj1.status
       
       console.log(urlobj)
       
       this.$ajax({
        method: 'GET',
        url: 'http://www.iot-fitone.com/setmode?gwid=' + nnsfobj1.gwid + '&param=' + nnsfobj1.param + '&mode=' + nnsfobj1.mode + '&status=' + nnsfobj1.status
      })
      .then(res => {
      })
       .catch(error => {
        console.log(error)
      })
      
   //   if (this.switchAutomationNorth == '切換自動') {
        //自動文字表示
    //    this.automaticMessageNorth = ' - 自動'
        //文字の切り替え
    //    this.switchAutomationNorth = '切換手動'
        //アイコンの切り替え
    //    this.isSwitchAutomationImgNorth = false
    //    this.isSwitchManualImgNorth = true
    //  } else {
        //自動文字は表示されません
    //    this.automaticMessageNorth = ''
        //文字の切り替え
    //    this.switchAutomationNorth = '切換自動'
        //アイコンの切り替え
    //    this.isSwitchAutomationImgNorth = true
    //    this.isSwitchManualImgNorth = false
    //  }
    },
    // 天窓東南切り替え
    skylightSoutheast() {
    
       var sesfobj1 = {}
       sesfobj1.gwid = this.loginUser
       sesfobj1.param = 'SESF'
       sesfobj1.status = 'normal'
     
       if (this.switchAutomationSoutheast == '切換自動') {
          sesfobj1.mode = 'auto'
       } else {
          sesfobj1.mode = 'manual'
       }
       
        this.$ajax({
        method: 'GET',
        url: 'http://www.iot-fitone.com/setmode?gwid=' + sesfobj1.gwid + '&param=' + sesfobj1.param + '&mode=' + sesfobj1.mode + '&status=' + sesfobj1.status
      })
      .then(res => {
      })
       .catch(error => {
        console.log(error)
      })
       
   //   if (this.switchAutomationSoutheast == '切換自動') {
        //自動文字表示
    //    this.automaticMessageSoutheast = ' - 自動'
        //文字の切り替え
    //    this.switchAutomationSoutheast = '切換手動'
        //アイコンの切り替え
    //    this.isSwitchAutomationImgSoutheast = false
    //    this.isSwitchManualImgSoutheast = true
    //  } else {
        //自動文字は表示されません
    //    this.automaticMessageSoutheast = ''
        //文字の切り替え
    //    this.switchAutomationSoutheast = '切換自動'
        //アイコンの切り替え
    //    this.isSwitchAutomationImgSoutheast = true
    //    this.isSwitchManualImgSoutheast = false
    //  }
    },
    // 天窓西南切り替え
    skylightSouthwest() {
    
       var swsfobj1 = {}
       swsfobj1.gwid = this.loginUser
       swsfobj1.param = 'SWSF'
       swsfobj1.status = 'normal'
     
       if (this.switchAutomationSouthwest == '切換自動') {
          swsfobj1.mode = 'auto'
       } else {
          swsfobj1.mode = 'manual'
       }
       
        this.$ajax({
        method: 'GET',
        url: 'http://www.iot-fitone.com/setmode?gwid=' + swsfobj1.gwid + '&param=' + swsfobj1.param + '&mode=' + swsfobj1.mode + '&status=' + swsfobj1.status
      })
      .then(res => {
      })
       .catch(error => {
        console.log(error)
      })
       
    //  if (this.switchAutomationSouthwest == '切換自動') {
        //自動文字表示
    //    this.automaticMessageSouthwest = ' - 自動'
        //文字の切り替え
    //    this.switchAutomationSouthwest = '切換手動'
        //アイコンの切り替え
    //    this.isSwitchAutomationImgSouthwest = false
    //    this.isSwitchManualImgSouthwest = true
    //  } else {
        //自動文字は表示されません
    //    this.automaticMessageSouthwest = ''
        //文字の切り替え
    //    this.switchAutomationSouthwest = '切換自動'
        //アイコンの切り替え
    //    this.isSwitchAutomationImgSouthwest = true
    //    this.isSwitchManualImgSouthwest = false
    //  }
    },
    // 側窓北切り替え
    sideWindowsNorth() {
       var nswnobj1 = {}
       nswnobj1.gwid = this.loginUser
       nswnobj1.param = 'NSWN'
       nswnobj1.status = 'normal'
     
       if (this.switchAutomationNorths == '切換自動') {
          nswnobj1.mode = 'auto'
       } else {
          nswnobj1.mode = 'manual'
       }
       
        this.$ajax({
        method: 'GET',
        url: 'http://www.iot-fitone.com/setmode?gwid=' + nswnobj1.gwid + '&param=' + nswnobj1.param + '&mode=' + nswnobj1.mode + '&status=' + nswnobj1.status
      })
      .then(res => {
      })
       .catch(error => {
        console.log(error)
      })
       
    //  if (this.switchAutomationNorths == '切換自動') {
        //自動文字表示
    //    this.automaticMessageNorths = ' - 自動'
        //文字の切り替え
    //    this.switchAutomationNorths = '切換手動'
        //アイコンの切り替え
    //    this.isSwitchAutomationImgNorths = false
    //    this.isSwitchManualImgNorths = true
    //  } else {
        //自動文字は表示されません
      //  this.automaticMessageNorths = ''
        //文字の切り替え
    //    this.switchAutomationNorths = '切換自動'
        //アイコンの切り替え
    //    this.isSwitchAutomationImgNorths = true
    //    this.isSwitchManualImgNorths = false
    //  }
    },

    // 側窓南切り替え
    sideWindowsSouth() {
     var sswnobj1 = {}
       sswnobj1.gwid = this.loginUser
       sswnobj1.param = 'SSWN'
       sswnobj1.status = 'normal'
     
       if (this.switchAutomationSouths == '切換自動') {
          sswnobj1.mode = 'auto'
       } else {
          sswnobj1.mode = 'manual'
       }
       
        this.$ajax({
        method: 'GET',
        url: 'http://www.iot-fitone.com/setmode?gwid=' + sswnobj1.gwid + '&param=' + sswnobj1.param + '&mode=' + sswnobj1.mode + '&status=' + sswnobj1.status
      })
      .then(res => {
      })
       .catch(error => {
        console.log(error)
      })
       
      //if (this.switchAutomationSouths == '切換自動') {
        //自動文字表示
    //    this.automaticMessageSouths = ' - 自動'
        //文字の切り替え
    //    this.switchAutomationSouths = '切換手動'
        //アイコンの切り替え
    //    this.isSwitchAutomationImgSouths = false
    //    this.isSwitchManualImgSouths = true
    //  } else {
        //自動文字は表示されません
    //    this.automaticMessageSouths = ''
        //文字の切り替え
    //    this.switchAutomationSouths = '切換自動'
        //アイコンの切り替え
    //    this.isSwitchAutomationImgSouths = true
    //    this.isSwitchManualImgSouths = false
      },
      
      // SUNV
    sunVisror() {
     var sunvobj1 = {}
       sunvobj1.gwid = this.loginUser
       sunvobj1.param = 'SUNV'
       sunvobj1.status = 'normal'
     
       if (this.switchAutomationSUNV == '切換自動') {
          sunvobj1.mode = 'auto'
       } else {
          sunvobj1.mode = 'manual'
       }
       
        this.$ajax({
        method: 'GET',
        url: 'http://www.iot-fitone.com/setmode?gwid=' + sunvobj1.gwid + '&param=' + sunvobj1.param + '&mode=' + sunvobj1.mode + '&status=' + sunvobj1.status
      })
      .then(res => {
      })
       .catch(error => {
        console.log(error)
      })
    },
  },
}
</script>
<style lang="scss" scoped>
#deviceStatus {
  overflow: hidden;
  text-align: left;
}
.mt-27 {
  margin-top: 27px;
}

.switch {
  padding: 40px 30px;
  .switch-content {
    width: 176px;
    height: 120px;
    padding: 16px 18px;
    line-height: 22px;

    border-radius: 5px;
    .switch-first {
      font-family: PingFangSC-Regular;
      font-size: 14px;
      letter-spacing: 0;
    }
    .switch-stats {
      font-family: PingFangSC-Regular;
      font-size: 18px;
      letter-spacing: 0;
    }
    .switch-retry {
      display: none;
      width: 65%;
      position: relative;
      top: -18px;
      opacity: 0.8;
      font-family: PingFangSC-Regular;
      font-size: 12px;
      color: #ffffff;
      letter-spacing: 0;
      text-align: right;
    }
    .switch-button {
      font-family: PingFangSC-Regular;
      font-size: 12px;
      letter-spacing: 0;
      border-radius: 2px;
      margin: 14px 0 0;
      padding: 2px 20px;
      background-color: transparent;
    }
  }
  .btn-status {
    cursor: pointer;
    font-family: PingFangSC-Medium;
    font-size: 12px;
    color: #ffffff;
    letter-spacing: 0;
    line-height: 16px;
    .btn-status-left {
      float: left;
    }
    .btn-status-right {
      float: right;
      span {
        margin-left: 18px;
      }
      i {
        position: absolute;
        width: 5%;
        height: 15%;
        &.switchAutomationImgNorth,
        &.switchAutomationImgSoutheast,
        &.switchAutomationImgSouthwest,
        &.switchAutomationImgNorths,
        &.switchAutomationImgSouths, 
        &.switchAutomationImgSUNV {
          background: url('./../assets/img/automatic.png') no-repeat;
        }
        &.switchManualImgNorth,
        &.switchManualImgSoutheast,
        &.switchManualImgSouthwest,
        &.switchManualImgNorths,
        &.switchManualImgSouths,
        &.switchManualImgSUNV {
          background: url('./../assets/img/manua.png') no-repeat;
        }
      }
    }
  }
  .btn-status-switch {
    float: right;
    margin: 14px 0 0;
    padding: 2px 0;
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #009966;
    letter-spacing: 0;
    line-height: 16px;
    cursor: pointer;
    span {
      margin-left: 16px;
    }
    i {
      position: absolute;
      width: 5%;
      height: 15%;
      &.switchManualImgPump,
      &.switchManualImgCooling,
      &.switchManualImgLighting {
        background: url('./../assets/img/manua.png') no-repeat;
      }
      &.offActiveCooling,
      &.offActiveLighting,
      &.offActivePump {    
          background: url('./../assets/img/automatic.png') no-repeat;
      }
    }
  }
}
</style>
