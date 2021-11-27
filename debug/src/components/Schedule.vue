<template>
  <div id="schedule" class="menuHome">
    <div class="content-block" id="home3">
      <div class="first-title">{{ $t("Schedule_Title") }}</div>
      <div class="bg-write setSchedule">
        <el-row :gutter="30">
          <div :style="{margin:'0 0 28px',overflow:'hidden'}">
           <el-col :span="6">
            <div :class="show_div1">
            <div :class="{ 'setting-content bg-on': Schedule1On, 'setting-content bg-off': Schedule1Off }">
              <div class="schedule-stats"  >{{ Schedule_Enable1 }}</div>
              <div class="schedule-time">{{Schdule_Name1}}</div>
              <div class="schedule-meun">
                <div class="schedule-edit" id="edit1" @click="doedit($event)" >{{ $t("Condition_Edit_Label") }}</div>
                <div class="schedule-lines"></div>
                <div class="schedule-delet" id="del1" @click="dodel($event)" >{{ $t("Condition_Delete_Label") }}</div>
              </div>
            </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div :class="show_div2">
            <div :class="{ 'setting-content bg-on': Schedule2On, 'setting-content bg-off': Schedule2Off }">
              <div class="schedule-stats">{{ Schedule_Enable2 }}</div>
              <div class="schedule-time">{{Schdule_Name2}}</div>
              <div class="schedule-meun">
                <div class="schedule-edit" id="edit2" @click="doedit($event)" >{{ $t("Condition_Edit_Label") }}</div>
                <div class="schedule-lines"></div>
                <div class="schedule-delet" id="del2" @click="dodel($event)">{{ $t("Condition_Delete_Label") }}</div>
              </div>
            </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div :class="show_div3">
            <div :class="{ 'setting-content bg-on': Schedule3On, 'setting-content bg-off': Schedule3Off }">
              <div class="schedule-stats">{{ Schedule_Enable3 }}</div>
              <div class="schedule-time">{{Schdule_Name3}}</div>
              <div class="schedule-meun">
                <div class="schedule-edit" id="edit3" @click="doedit($event)">{{ $t("Condition_Edit_Label") }}</div>
                <div class="schedule-lines"></div>
                <div class="schedule-delet" id="del3" @click="dodel($event)">{{ $t("Condition_Delete_Label") }}</div>
              </div>
            </div>
            </div>
          </el-col>
            <el-col :span="6">
              <div
                class="schedule-content bg-off"
                @click="new_schedule"
                :style="{cursor:'pointer'}"
              >
                <el-button class="add-content" type="text">
                  <div :style="{margin:'19px auto'}">
                    <i class="el-icon-add"></i>
                  </div>
                  <div class="text-align-center bold add-text">
                    <span>{{ $t("Schedule_Add_Label") }}</span>
                  </div>
                </el-button>
              </div>
            </el-col>
          </div>
        </el-row>

        <el-row :gutter="30">
          <div :style="{margin:'0 0 28px',overflow:'hidden'}">
            <el-col :span="6">
              <div :class="show_div4">
                <div
                  :class="{ 'setting-content bg-on': Schedule4On, 'setting-content bg-off': Schedule4Off }"
                >
                  <div class="schedule-stats">{{ Schedule_Enable4 }}</div>
                  <div class="schedule-time">{{Schdule_Name4}}</div>
                  <div class="schedule-meun">
                    <div
                      class="schedule-edit"
                      id="edit4"
                      @click="doedit($event)"
                    >{{ $t("Condition_Edit_Label") }}</div>
                    <div class="schedule-lines"></div>
                    <div
                      class="schedule-delet"
                      id="del4"
                      @click="dodel($event)"
                    >{{ $t("Condition_Delete_Label") }}</div>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div :class="show_div5">
                <div
                  :class="{ 'setting-content bg-on': Schedule5On, 'setting-content bg-off': Schedule5Off }"
                >
                  <div class="schedule-stats">{{ Schedule_Enable5 }}</div>
                  <div class="schedule-time">{{Schdule_Name5}}</div>
                  <div class="schedule-meun">
                    <div
                      class="schedule-edit"
                      id="edit5"
                      @click="doedit($event)"
                    >{{ $t("Condition_Edit_Label") }}</div>
                    <div class="schedule-lines"></div>
                    <div
                      class="schedule-delet"
                      id="del5"
                      @click="dodel($event)"
                    >{{ $t("Condition_Delete_Label") }}</div>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div :class="show_div6">
                <div
                  :class="{ 'setting-content bg-on': Schedule6On, 'setting-content bg-off': Schedule6Off }"
                >
                  <div class="schedule-stats">{{ Schedule_Enable6 }}</div>
                  <div class="schedule-time">{{Schdule_Name6}}</div>
                  <div class="schedule-meun">
                    <div
                      class="schedule-edit"
                      id="edit6"
                      @click="doedit($event)"
                    >{{ $t("Condition_Edit_Label") }}</div>
                    <div class="schedule-lines"></div>
                    <div
                      class="schedule-delet"
                      id="del6"
                      @click="dodel($event)"
                    >{{ $t("Condition_Delete_Label") }}</div>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div :class="show_div7">
                <div
                  :class="{ 'setting-content bg-on': Schedule7On, 'setting-content bg-off': Schedule7Off }"
                >
                  <div class="schedule-stats">{{ Schedule_Enable7 }}</div>
                  <div class="schedule-time">{{Schdule_Name7}}</div>
                  <div class="schedule-meun">
                    <div
                      class="schedule-edit"
                      id="edit7"
                      @click="doedit($event)"
                    >{{ $t("Condition_Edit_Label") }}</div>
                    <div class="schedule-lines"></div>
                    <div
                      class="schedule-delet"
                      id="del7"
                      @click="dodel($event)"
                    >{{ $t("Condition_Delete_Label") }}</div>
                  </div>
                </div>
              </div>
            </el-col>
          </div>
        </el-row>
        <el-row :gutter="30">
          <div :style="{margin:'0 0 28px',overflow:'hidden'}">
            <el-col :span="6">
              <div :class="show_div8">
                <div
                  :class="{ 'setting-content bg-on': Schedule8On, 'setting-content bg-off': Schedule8Off }"
                >
                  <div class="schedule-stats">{{ Schedule_Enable8 }}</div>
                  <div class="schedule-time">{{Schdule_Name8}}</div>
                  <div class="schedule-meun">
                    <div
                      class="schedule-edit"
                      id="edit8"
                      @click="doedit($event)"
                    >{{ $t("Condition_Edit_Label") }}</div>
                    <div class="schedule-lines"></div>
                    <div
                      class="schedule-delet"
                      id="del8"
                      @click="dodel($event)"
                    >{{ $t("Condition_Delete_Label") }}</div>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div :class="show_div9">
                <div
                  :class="{ 'setting-content bg-on': Schedule9On, 'setting-content bg-off': Schedule9Off }"
                >
                  <div class="schedule-stats">{{ Schedule_Enable9}}</div>
                  <div class="schedule-time">{{Schdule_Name9}}</div>
                  <div class="schedule-meun">
                    <div
                      class="schedule-edit"
                      id="edit9"
                      @click="doedit($event)"
                    >{{ $t("Condition_Edit_Label") }}</div>
                    <div class="schedule-lines"></div>
                    <div
                      class="schedule-delet"
                      id="del9"
                      @click="dodel($event)"
                    >{{ $t("Condition_Delete_Label") }}</div>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div :class="show_div10">
                <div
                  :class="{ 'setting-content bg-on': Schedule10On, 'setting-content bg-off': Schedule10Off }"
                >
                  <div class="schedule-stats">{{ Schedule_Enable10 }}</div>
                  <div class="schedule-time">{{Schdule_Name10}}</div>
                  <div class="schedule-meun">
                    <div
                      class="schedule-edit"
                      id="edit10"
                      @click="doedit($event)"
                    >{{ $t("Condition_Edit_Label") }}</div>
                    <div class="schedule-lines"></div>
                    <div
                      class="schedule-delet"
                      id="del10"
                      @click="dodel($event)"
                    >{{ $t("Condition_Delete_Label") }}</div>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div :class="show_div11">
                <div
                  :class="{ 'setting-content bg-on': Schedule11On, 'setting-content bg-off': Schedule11Off }"
                >
                  <div class="schedule-stats">{{ Schedule_Enable11 }}</div>
                  <div class="schedule-time">{{Schdule_Name11}}</div>
                  <div class="schedule-meun">
                    <div
                      class="schedule-edit"
                      id="edit11"
                      @click="doedit($event)"
                    >{{ $t("Condition_Edit_Label") }}</div>
                    <div class="schedule-lines"></div>
                    <div
                      class="schedule-delet"
                      id="del11"
                      @click="dodel($event)"
                    >{{ $t("Condition_Delete_Label") }}</div>
                  </div>
                </div>
              </div>
            </el-col>
          </div>
          <div class="border-top-gray">
            <!-- <div id="scheduleProflie" :style="{width:'100%', height: '300px'}"></div> -->
            <!-- 2019-02-01 full-calendar 変更 -->
            <!-- <full-calendar
              :events="fcEvents"
              :config="config"
              @changeMonth="changeMonth"
              @eventClick="eventClick"
              @dayClick="dayClick"
              @moreClick="moreClick"
              :monthNames="monthNames"
              :weekNames="weekNames"
              :titleFormat="titleFormat"
            ></full-calendar> -->
            <div id="scheduleCalendar" :style="{padding:'20px'}"></div>
          </div>
        </el-row>

        <el-dialog
          :title="dialog_title"
          :visible.sync="addConditionsVisible"
          class="addConditions"
          :close-on-click-modal="false"
          @opened="openedDialog"
        >
          <el-form ref="dialogForm" :model="dialogForm" class="check-list">
            <div class="padding-border-bottom">
              <el-form-item class="inputMessage">
                <div class="width-left text-align-center">
                  <label for class="label-name">
                    <span :style="{color:'#ff0000'}">*</span>
                    {{ $t("New_Schedle_Name_Label") }}
                  </label>
                </div>
                <div class="width-right">
                  <el-col :span="18">
                    <el-input
                      v-model="name"
                      :placeholder="schedule_condition1"
                      style="width:250px;"
                    ></el-input>
                  </el-col>
                  <el-col :span="6">
                    <el-checkbox v-model="dialogForm.enable">{{ $t("Schedule_Enable_Label") }}</el-checkbox>
                  </el-col>
                </div>
              </el-form-item>
              <el-form-item class="inputMessage">
                <div class="width-left">
                  <span>{{ $t("New_Schedle_Effective_Date_Label") }}</span>
                </div>
                <div class="width-right history-message" style="display:inline-flex">
                  <div class="input-date">
                   <div class="input-append date form_datetime">
                     <input class="input-time" size="16" type="text" :placeholder="schedule_start_time" id="startTimeDate" :value="startTimeDate" :style="{width:unaddEndTimeDate,'padding-left':'9px'}">
                     <span class="add-on"> <i class="icon-calendar"></i> </span>
                   </div>
                  </div>
                  <span class="input-time-line" :style="{'line-height':'36px'}">-</span>
                  <div class="input-date" >
                   <div class="input-append date form_datetime">
                     <input class="input-time " size="16" type="text" :placeholder="schedule_end_time"  id="stopTimeDate"  :value="stopTimeDate" :style="{width:unaddEndTimeDate,'padding-left':'9px'}">
                     <span class="add-on"> <i class="icon-calendar"></i> </span>
                   </div>
                  </div>  
                  <!-- 2019-03-04 時間の変更-->
                  <!-- <el-date-picker
                    :style="{width:unaddEndTimeDate}"
                    v-model="startTimeDate"
                    type="date"
                    @change="(value) => YYYYMMchangeHandler(value)"
                    :placeholder="schedule_start_time"
                  ></el-date-picker>
                  <span class="input-time-line">-</span>
                  <el-date-picker
                    :style="{width:unaddEndTimeDate}"
                    v-model="stopTimeDate"
                    type="date"
                    :placeholder="schedule_end_time"
                  ></el-date-picker> -->
                </div>
              </el-form-item>
              <el-form-item class="inputMessage">
                <div class="width-left">&nbsp;&nbsp;</div>
                <div class="width-right selectList">
                  <el-select
                    class="effective-date"
                    v-model="endList"
                    :style="{width: '85%'}"
                    @change="customContent"
                  >
                    <el-option
                      v-for="endItem in endItems"
                      :key="endItem.class"
                      :label="endItem.name"
                      :value="endItem.idx"
                    >
                      <span>{{endItem.name}}</span>
                    </el-option>
                  </el-select>
                </div>
              </el-form-item>
              <el-form-item
                class="inputMessage"
                id="selectScheduleMessage"
                :style="{display:unshowSelectSchedule}"
              >
                <div class="width-left">&nbsp;&nbsp;</div>
                <div class="width-right">
                  <div class="other-content-top">
                    <div class="other-first" :style="{font:'italic bold 22px'}">カスタムの繰り返し</div>
                    <div class="other-content-first">繰り返す間隔：
                      <el-input-number
                        v-model="numDate"
                        controls-position="right"
                        :min="1"
                        :max="12"
                        :style="{width:'25%'}"
                      ></el-input-number>
                      <!-- interval-date -->
                      <el-select
                        class="effective-date interval-date"
                        v-model="intervalList"
                        :style="{width: '35%'}"
                        @change="intervalContent"
                      >
                        <el-option
                          v-for="intervalItem in intervalItems"
                          :key="intervalItem.class"
                          :label="intervalItem.name"
                          :value="intervalItem.idx"
                        >
                          <span>{{intervalItem.name}}</span>
                        </el-option>
                      </el-select>
                    </div>
                  </div>
                </div>
              </el-form-item>
              <el-form-item class="inputMessage">
                <div class="width-left">
                  <span>{{ $t("New_Schedle_Effective_Time_Label") }}</span>
                </div>
                <div class="width-right ">  
                <el-checkbox
                    v-model="endDay"
                    :style="{margin:'8px 0',width:'15%'}"
                    @change="addEndTime"
                  >{{ $t("New_Schedle_End_Date_Label") }}
                </el-checkbox>
                </div>
                <div class="width-left">&nbsp;&nbsp;</div>
                <div class="width-right history-message" >  
                <ul>
                    <li v-for="(titem, index) in titems" :key="titem.idx">
                      <span>{{ titem.idx }}</span>
                      
                   <div  style="display: inline-flex;">
                   <div class="input-date" >
                     <div class="input-append input-group clockpicker"  data-autoclose="true" style="display:flex">
                       <input type="text" class="input-time form-control"  :id="'titemStart-'+index"  :value="titems[index].start" :placeholder="schedule_start_time_Point" :style="{width:unaddEndTime,display:unaddEndTimeDateShow,margin:addEndTimeDateLeft,'padding-left':'9px'}">
                        <span class="input-group-addon"> <i class="icon-time"></i> </span>
                     </div>
                   </div>
                   <span class="input-time-line" :style="{'line-height':'36px'}">-</span>
                  <div class="input-date">
                     <div class="input-append input-group clockpicker"  data-autoclose="true" style="display:flex">
                       <input type="text" class="input-time form-control"  :id="'titemStop-'+index" :value="titems[index].end" :placeholder="schedule_end_time_Point" :style="{width:unaddEndTime,display:unaddEndTimeDateShow,margin:addEndTimeDateLeft,'padding-left':'9px'}">
                        <span class="input-group-addon"> <i class="icon-time"></i> </span>
                     </div>
                  </div>
                </div>
                <!-- 2019-03-04 時間の変更-->
                  <!-- <el-time-picker format="HH:mm"
                    v-model="titems[index].start"
                    :picker-options="{selectableRange: selectStartTime}"
                    :placeholder="schedule_start_time_Point"
                    :style="{width:unaddEndTime,display:unaddEndTimeDateShow,margin:addEndTimeDateLeft}"
                  ></el-time-picker>
                  <span class="input-time-line">-</span>
                  <el-time-picker format="HH:mm"
                    v-model="titems[index].end"
                    :picker-options="{selectableRange: selectStopTime}"
                    :placeholder="schedule_end_time_Point"
                    :style="{width:unaddEndTime,display:unaddEndTimeDateShow,margin:addEndTimeDateLeft}"
                  ></el-time-picker> -->
                  <el-button class="item" @click="addTimeRow(index)">{{ titem.btn }}</el-button>
                 
                 </li>
               </ul>
               
               </div>
                
              </el-form-item>
             
              <!-- カスタムの繰り返し -->
              <el-form-item
                class="inputMessage"
                id="selectScheduleMessage"
                :style="{display:unshowSelectSchedule2}"
              >
                <div class="width-left">&nbsp;&nbsp;</div>
                <div class="width-right">
                  <div class="other-content-top">
                    <div class="other-first" :style="{font:'italic bold 22px'}">カスタムの繰り返し</div>
                    <div class="other-content-first">繰り返す間隔：
                      <el-input-number
                        v-model="numDate2"
                        controls-position="right"
                        :min="1"
                        :max="12"
                        :style="{width:'25%'}"
                      ></el-input-number>
                      <!-- interval-date -->
                      <el-select
                        class="effective-date interval-date"
                        v-model="intervalList2"
                        :style="{width: '35%'}"
                        @change="intervalContent"
                      >
                        <el-option
                          v-for="intervalItem in intervalItems2"
                          :key="intervalItem.class"
                          :label="intervalItem.name"
                          :value="intervalItem.idx"
                        >
                          <span>{{intervalItem.name}}</span>
                        </el-option>
                      </el-select>
                    </div>
                  </div>
                </div>
              </el-form-item>

              <el-form-item class="inputMessage numderFirst">
                <div class="width-left">
                  <span>{{ $t("New_Schedle_Priority_Label") }}</span>
                </div>
                <div class="width-right selectList">
                  <el-select v-model="formSelect" placeholder="1" :style="{width: '100%'}">
                    <el-option label="1" value="1"></el-option>
                    <el-option label="2" value="2"></el-option>
                    <el-option label="3" value="3"></el-option>
                    <el-option label="4" value="4"></el-option>
                    <el-option label="5" value="5"></el-option>
                    <el-option label="6" value="6"></el-option>
                    <el-option label="7" value="7"></el-option>
                    <el-option label="8" value="8"></el-option>
                    <el-option label="9" value="9"></el-option>
                  </el-select>
                </div>
              </el-form-item>
            </div>
            
           <div class="padding-border-bottom">
              <el-form-item class="inputMessage">
                <div class="width-left">
                  <span>{{ $t("New_Schedle_Device_List_Label") }}</span>
                </div>
                <div class="width-right selectList">
                
                <ul>
                <li v-for="(item, index) in items" :key="item.idx">
                 <span>{{ item.idx }}</span>  
                <el-select v-model="items[index].device" @change="onSelectDevice" :placeholder="schedule_select_device" size="medium">
                    <el-option
                      v-for="deviceListItem in deviceListItems"
                      :key="deviceListItem.class"
                      :label="deviceListItem.name" 
                      :value="deviceListItem.param" 
                    >
                    <span>{{deviceListItem.name}}</span>
                    </el-option>
                  </el-select>
                  
                  <el-select v-model="items[index].op" :class="items[index].hide1" placeholder="オープン" size="medium">
                    <el-option
                      v-for="opListItem in opListItems"
                      :key="opListItem.class"
                     :label="opListItem.name" 
                      :value="opListItem.idx" 
                    >
                    <span>{{opListItem.name}}</span>
                    </el-option>
                  </el-select>
                  
                  <el-select v-model="items[index].op2" @change="onForceClose" :class="items[index].hide2" style="width:150px;" placeholder="オープン" size="medium">
                    <el-option
                      v-for="opListItem2 in opListItems2"
                      :key="opListItem2.class"
                     :label="opListItem2.name" 
                      :value="opListItem2.idx" 
                    >
                    <span>{{opListItem2.name}}</span>
                    </el-option>
                  </el-select>
                  
                  <el-input v-model="items[index].value" :class="items[index].hide3" style="width:80px;" :placeholder="value"></el-input>
                  <span :class="items[index].hide3" >%</span>
                  
                  <el-button class="item" @click="addDeviceRow(index)">{{ item.btn }}</el-button>
                   </li>
                  </ul>
                  
                </div>
              </el-form-item>
            </div>
            <div :style="{padding:'0 30px 23px'}">
              <el-form-item class="inputMessage">
                <div class="width-left text-align-center">
                  <label for class="label-name">{{ $t("New_Schedle_Comment_Label") }}</label>
                </div>
                <div class="width-right">
                  <el-input
                    type="textarea"
                    :autosize="{ minRows: 2, maxRows: 4}"
                    :placeholder="schedule_comment"
                    v-model="examTextarea"
                  ></el-input>
                </div>
              </el-form-item>
            </div>

            <div class="text-align-right" :style="{padding:'0 30px 20px'}">
              <el-button
                class="cancelBtn"
                @click="addConditionsVisible= false"
              >{{ $t("New_Schedle_Cancel_Label") }}</el-button>
              <el-button class="successBtn" @click="doConfirm">{{ $t("New_Schedle_Confirm_Label") }}</el-button>
            </div>
          </el-form>
        </el-dialog>
      </div>
    </div>
  </div>
</template>

<script>
import _$ from 'jquery'
import '../../public/static/datePicker/css/bootstrap.min.css'
import '../../public/static/datePicker/css/bootstrap-clockpicker.css'
import '../../public/static/datePicker/js/bootstrap-clockpicker.js'
var demoEvents = [
  {
    title: 'Fan Turn on 10 mins',
    start: '2019-01-05',
    end: '2019-01-10',
    data: {
      scid: '1',
    },
  },
  {
    title: 'Light Turn on 30 mins',
    start: '2019-01-03',
    end: '2019-01-15',
  },
  {
    title: 'Pump Turn on 10 mins',
    start: '2019-01-07',
    allDay: false,
    cssClass: 'important',
    data: {
      scid: '1',
    },
  },
]
export default {
  name: 'schedule',
  data() {
    return {
      loginUser: '',
      calendarData: [],

      items: [
        { idx: 1, btn:'+', device: '', op: '',op2: '', value: '', hide1:'show_div', hide2:'hide_div', hide3:'hide_div' },
      ],
      
      titems: [{ idx: 1, btn: '+', start: '', end: '' }],

      device123: [],
      dialog_title: this.$t('Schedule_Dialog_Title_Label_New'),
      schedule_condition1: this.$t('Schedule_Condition1_Label'),
      schedule_start_time: this.$t('Schedule_Start_Time_Label'),
      schedule_start_time_Point: this.$t('Schedule_Start_Time_Point_Label'),
      schedule_end_time: this.$t('Schedule_end_Time_Label'),
      schedule_end_time_Point: this.$t('Schedule_end_Time_Point_Label'),
      schedule_select_device: this.$t('Schedule_select_device_placeholder'),
      scheudle_text: this.$t('Schedule_text_placeholder'),
      schedule_mailbox: this.$t('Schedule_mailbox_placeholder'),
      schedule_comment: this.$t('Schedule_comment_placeholder'),

      show_div1: 'hide_div',
      show_div2: 'hide_div',
      show_div3: 'hide_div',
      show_div4: 'hide_div',
      show_div5: 'hide_div',
      show_div6: 'hide_div',
      show_div7: 'hide_div',
      show_div8: 'hide_div',
      show_div9: 'hide_div',
      show_div10: 'hide_div',
      show_div11: 'hide_div',

      Schedule1On: true,
      Schedule1Off: false,
      Schedule2On: true,
      Schedule2Off: false,
      Schedule3On: true,
      Schedule3Off: false,
      Schedule4On: true,
      Schedule4Off: false,
      Schedule5On: true,
      Schedule5Off: false,
      Schedule6On: true,
      Schedule6Off: false,
      Schedule7On: true,
      Schedule7Off: false,
      Schedule8On: true,
      Schedule8Off: false,
      Schedule9On: true,
      Schedule9Off: false,
      Schedule10On: true,
      Schedule10Off: false,
      Schedule11On: true,
      Schedule11Off: false,

      Schedule_Enable1: this.$t('Schedule_Enable_Label'),
      Schedule_Enable2: this.$t('Schedule_Enable_Label'),
      Schedule_Enable3: this.$t('Schedule_Enable_Label'),
      Schedule_Enable4: this.$t('Schedule_Enable_Label'),
      Schedule_Enable5: this.$t('Schedule_Enable_Label'),
      Schedule_Enable6: this.$t('Schedule_Enable_Label'),
      Schedule_Enable7: this.$t('Schedule_Enable_Label'),
      Schedule_Enable8: this.$t('Schedule_Enable_Label'),
      Schedule_Enable9: this.$t('Schedule_Enable_Label'),
      Schedule_Enable10: this.$t('Schedule_Enable_Label'),
      Schedule_Enable11: this.$t('Schedule_Enable_Label'),

      Schdule_Name1: 'LED每日設定OFF161',
      Schdule_Name2: 'LED每日設定OFF161',
      Schdule_Name3: 'LED每日設定OFF161',
      Schdule_Name4: 'LED每日設定OFF161',
      Schdule_Name5: 'LED每日設定OFF161',
      Schdule_Name6: 'LED每日設定OFF161',
      Schdule_Name7: 'LED每日設定OFF161',
      Schdule_Name8: 'LED每日設定OFF161',
      Schdule_Name9: 'LED每日設定OFF161',
      Schdule_Name10: 'LED每日設定OFF161',
      Schdule_Name11: 'LED每日設定OFF161',

      schedules: {},
      scid: '0',
      config: {
        defaultView: 'agendaDay',
      },

      addConditionsVisible: false,
      dialogForm: {
        enable: '',
        time: '',
        time2: '',
        textContent: '',
        selects: '',
        firstNum: '',
        equipment: '',
        email: '',
      },
      name: '',
      startTime: '',
      stopTime: '',
      startTimeDate: '',
      stopTimeDate: '',
      textContent: '',
      formSelect: '',
      form: {
        region: '',
      },
      formsetting1: [],
      formsetting2: [],
      formsetting3: [],
      emailAddress: '',
      isEndInputReturnDisabled: true,
      isEndInputMessageDisabled: true,
      unshowSelectSchedule: 'none',
      unshowSelectSchedule2: 'none',
      unshowMonthMessage: 'none',
      unshowWeekMessage: 'none',
      endDay: false,
      endList: '',
      endList2: '',
      endItems: [
        {
          name: '繰り返さない',
          idx: '0',
          class: 'returnNo',
        },
        {
          name: '毎日',
          idx: '1',
          class: 'everyDay',
        },
        {
          name: '毎週 木曜日',
          idx: '2',
          class: 'everyWeek',
        },
        {
          name: '毎月 第2木曜日',
          idx: '3',
          class: 'everyMonth',
        },
        {
          name: '毎年 12月13日',
          idx: '4',
          class: 'everyYears',
        },
        {
          name: '毎週平日（月～金）',
          idx: '5',
          class: 'everyWeeks',
        },
        {
          name: 'カスタム...',
          idx: '9',
          class: 'otherSelect',
        },
      ],
      endItems2: [
        {
          name: '繰り返さない',
          idx: '0',
          class: 'returnNo',
        },
        {
          name: '毎時',
          idx: '1',
          class: 'everyHour',
        },
        {
          name: '每半小時',
          idx: '2',
          class: 'everyWeek',
        },
        {
          name: 'カスタム...',
          idx: '9',
          class: 'otherSelect',
        },
      ],
      intervalList: '',
      intervalList2: '',
      intervalItems: [
        {
          name: 'か日こど',
          idx: '0',
          class: 'intervalDay',
        },
        {
          name: 'か週こど',
          idx: '1',
          class: 'intervalWeek',
        },
        {
          name: 'か月こど',
          idx: '2',
          class: 'intervalMonth',
        },
        {
          name: 'か年こど',
          idx: '3',
          class: 'intervalYear',
        },
      ],
      intervalItems2: [
        {
          name: 'か時こど',
          idx: '0',
          class: 'intervalDay',
        },
        {
          name: 'か半時こど',
          idx: '0',
          class: 'intervalWeek',
        },
      ],
      deviceListItems: [
        {
          name: '冷却デバイス',
          idx: '0',
          param: 'FAN',
          class: 'deviceFan',
        },
        {
          name: '照明',
          idx: '1',
          param: 'LIGHT',
          class: 'deviceLight',
        },
        {
          name: 'ポンプ',
          idx: '2',
          param: 'WATER',
          class: 'devicePump',
        },
        {
          name: '天窓北',
          idx: '3',
          param: 'NNSF',
          class: 'deviceNNSF',
        },
        {
          name: '天窓西南',
          idx: '4',
          param: 'SWSF',
          class: 'deviceSWSF',
        },
        {
          name: '天窓東南',
          idx: '5',
          param: 'SESF',
          class: 'deviceSESF',
        },
        {
          name: '側窓北',
          idx: '6',
          param: 'NSWN',
          class: 'deviceNSWD',
        },
        {
          name: '側窓南',
          idx: '7',
          param: 'SSWN',
          class: 'deviceSSWD',
        },
      ],
       opListItems2:[
        {
          name: 'オープン',
          idx: '1',
          class: 'opOpen',
        },
        {
          name: '強制クローズ',
          idx: '2',
          class: 'opClose',
        },
       
      ],
       opListItems:[
        {
          name: 'オープン',
          idx: '1',
          class: 'opOpen',
        },
        {
          name: 'クローズ',
          idx: '2',
          class: 'opClose',
        },
        
      ],
      valueListItems: [
        {
          name: '2分',
          idx: '0',
          period: '120',
          class: 'value2Mins',
        },
        {
          name: '5分',
          idx: '1',
          period: '300',
          class: 'value5Mins',
        },
        {
          name: '10分',
          idx: '2',
          period: '600',
          class: 'value10Mins',
        },
        {
          name: '0%',
          idx: '3',
          period: '0',
          class: 'op0Per',
        },
        {
          name: '20%',
          idx: '4',
          period: '20',
          class: 'op20Per',
        },
        {
          name: '40%',
          idx: '5',
          period: '40',
          class: 'op40Per',
        },
        {
          name: '60%',
          idx: '6',
          period: '60',
          class: 'op60Per',
        },
        {
          name: '80%',
          idx: '7',
          period: '80',
          class: 'op80Per',
        },
        {
          name: '100%',
          idx: '8',
          period: '100',
          class: 'op100Per',
        },
      ],
      selectOtherList: '毎月 4日',
      selectOtherItems: [
        '毎月 1日',
        '毎月 2日',
        '毎月 3日',
        '毎月 4日',
        '毎月 5日',
        '毎月 6日',
        '毎月 7日',
        '毎月 8日',
        '毎月 9日',
        '毎月 10日',
        '毎月 11日',
        '毎月 12日',
        '毎月 13日',
        '毎月 14日',
        '毎月 15日',
        '毎月 16日',
        '毎月 17日',
        '毎月 18日',
        '毎月 19日',
        '毎月 20日',
        '毎月 21日',
        '毎月 22日',
        '毎月 23日',
        '毎月 24日',
        '毎月 25日',
        '毎月 26日',
        '毎月 27日',
        '毎月 28日',
        '毎月 29日',
        '毎月 30日',
        '毎月 31日',
      ],
      selectOtherWeekList: '月曜日',
      selectOtherWeekItems: ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'],
      numDate: '',
      numDate2: '',
      numReturn: '',
      radioContent: '',
      inputDate: '',

      fcEvents: demoEvents,
      monthNames: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      weekNames: ['日', '月', '火', '水', '木', '金', '土'],
      titleFormat: 'yyyy年MM月',
      examTextarea: '',
      unaddEndTime: '100px',
      unaddEndTimeDate: '125px',
      unaddEndTimeDateShow: 'inline-block',
      addEndTimeDateLeft: '0',
      selectStartTime: '',
      selectStopTime: '',
    }
  },
  components: {
    //2019-02-01 full-calendar 変更
    // 'full-calendar': require('vue-fullcalendar'),
  },
  mounted() {
    //this.deviceScheduleProflie()
    _$('#scheduleCalendar').fullCalendar({
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,basicWeek,basicDay',
      },
      navLinks: true,
      editable: true, //引きずりと調整
      eventLimit: true, //事件の数を制限する
      events: this.calendarData,
      eventClick: this.scheduleCalendarEventClick, //イベントをクリック
      dayClick: this.scheduleCalendarDayClick, //日付事件をクリック
      timeFormat: 'H:mm',//時間のフォーマット
			// axisFormat: 'H:mm',
    })
  },
  created() {
    this.loginUser = this.$session.get('loginUser')
    this.getScheduleData()
  },
  methods: {
    // ページ時間の呼び出しを開く
    openedDialog(){
      this.timeDefault()
      this.dateDefault()
    },
     //時間表示スタイル
    dateDefault() {
      let that = this
      $('.form_datetime').datetimepicker({
        language: 'jp',
        format: 'yyyy-mm-dd',
        todayBtn: true, 
        autoclose: true, 
        showMeridian: 1, //時間表示スタイル
        pickerPosition: 'bottom-left',
        minView: 2,
      }).on('change',function date(event){
        var eventTarget=event.target
        //idはstartTimeDateかどうか判断する
        if(eventTarget.id=='startTimeDate'){
          that.startTimeDate=eventTarget.value
        }else if(eventTarget.id=='stopTimeDate'){
          that.stopTimeDate=eventTarget.value
        }
       that.YYYYMMchangeHandler(that.startTimeDate)
      })
      //this.YYYYMMchangeHandler(that.startTimeDate)
    },
    timeDefault() {
      var that = this
     $('.clockpicker').clockpicker()
     .find('input').change(function(events){
       var eventsTarget=events.target
       // idを文字列に分割する
       var str = eventsTarget.id.split('-')
       //idは/^titemStart-[0-100]+$/かどうか判断を形式
        if(/^titemStart-[0-9]+$/.test(eventsTarget.id)){
          that.titems[parseInt(str[1])].start = eventsTarget.value
        }else if(/^titemStop-[0-9]+$/.test(eventsTarget.id)){
          that.titems[parseInt(str[1])].end=eventsTarget.value
        }
    })
    },
    dodel(event) {
      var targetId = event.currentTarget.id
      var myscid = parseInt(targetId.substr(3))
      this.scid = myscid
      this.doDelete()
    },

    doedit(event) {
      var targetId = event.currentTarget.id
      var myscid = parseInt(targetId.substr(4))
      this.edit_schedule(myscid)
      this.addConditionsVisible = true
    },
    //時間の追加
    addTimeRow(index) {
    if (index == this.titems.length - 1) {
        var newitem = {}
        newitem.idx = this.titems.length + 1
        newitem.btn = '+'
        newitem.start = ''
        newitem.end = ''
        this.titems[this.titems.length - 1].btn = '-'
        this.titems.push(newitem)
      } else {
        this.titems.splice(index, 1)
        for (var j = 0; j < this.titems.length; j++) {
          this.titems[j].idx = j + 1
        }
      }
      this.$nextTick(() => {
        this.timeDefault()
      })
      
    },
    // デバイスの追加
    addDeviceRow(index) {
      console.log(this.items[0].device)
       if( index ==  this.items.length - 1 ) { 
         var newitem = {}
         newitem.idx = this.items.length + 1
         newitem.btn = '+'
         newitem.device = ''
         newitem.op = ''
         newitem.value = ''
         newitem.hide1 = 'show_sel1'
         newitem.hide2 = 'hide_div'
         newitem.hide3 = 'hide_div'
         this.items[this.items.length-1].btn = '-'
         this.items.push(newitem)
       } else {
         this.items.splice(index, 1 )
         for( var j = 0; j < this.items.length ; j++ ) {
           this.items[j].idx = j+1
         }
       }
    },
   
    findDeviceOp(param) {
      console.log(param)
      var deviceOp = ''
      for (var ii = 0; ii < this.opListItems.length; ii++) {
        if (this.opListItems[ii].idx == param) {
          deviceOp = this.opListItems[ii].name
        }
      }

      return deviceOp
    },

    findDeviceName(param) {
      console.log(param)
      console.log(this.deviceListItems.length)
      var deviceName = ''
      for (var ii = 0; ii < this.deviceListItems.length; ii++) {
        console.log(this.deviceListItems[ii].param)
        if (this.deviceListItems[ii].param == param) {
          deviceName = this.deviceListItems[ii].name
        }
      }

      return deviceName
    },
     //新規スケジュール
    new_schedule() {
      this.clearDialog()
      this.scid = '0'
      this.dialog_title = this.$t('Schedule_Dialog_Title_Label_New')
      this.addConditionsVisible = true
   //   this.startTimeDate=date
//      this.stopTimeDate=date
    },
    //Editスケジュールの情報
    edit_schedule(myscid) {
      this.clearDialog()
      
      this.scid = myscid
      //Editスケジュールのタイトル
      this.dialog_title = this.$t('Schedule_Dialog_Title_Label_Edit')

      //schedules数組の循環
      for (var i = 0; i < this.schedules.length; i++) {
        
        var schobj = this.schedules[i]

        // 「クリック事件のscid」と「schedules数組の循環scid」は同じかどうか
        if (schobj.scid == myscid) {
          //タイトル
          this.name = this.schedules[i].name
          //「有効」が選ぶかどうか
          if (this.schedules[i].enable == '1') this.dialogForm.enable = true
          else this.dialogForm.enable = false
          
          this.formSelect = this.schedules[i].priority

          var todayDay = new Date()
          // 2019-03-06 時間の変更
          // if (this.schedules[i].sdate) this.startTimeDate = new Date(this.schedules[i].sdate)
          // if (this.schedules[i].edate) this.stopTimeDate = new Date(this.schedules[i].edate)
          // 開始時間
          if (this.schedules[i].sdate) this.startTimeDate = this.schedules[i].sdate
          // 終了時間
          if (this.schedules[i].edate) this.stopTimeDate = this.schedules[i].edate
          //dmode
          this.endList = this.schedules[i].dmode

        //  if (this.schedules[i].stime) this.startTime = new Date(this.makeDateStr(todayDay) + ' ' + this.schedules[i].stime)
        //  if (this.schedules[i].etime) this.stopTime = new Date(this.makeDateStr(todayDay) + ' ' + this.schedules[i].etime)
        //  this.endList2 = this.schedules[i].tmode
        
        this.examTextarea = this.schedules[i].text 
        
          this.endDay = this.schedules[i].allday
          
          if( !this.endDay) {

         if (this.schedules[i].times) {
            
            while (this.titems.length > 0) {
              this.titems.pop()
            }
            
            for (var p = 0; p < this.schedules[i].times.length; p++) {
              var mytitem = {}
              mytitem.idx = p + 1
              mytitem.btn = '-'
              if (p == this.schedules[i].times.length - 1) mytitem.btn = '+'
              // 2019-03-06 時間の変更
              // mytitem.start = new Date(this.makeDateStr(todayDay) + ' ' + this.schedules[i].times[p].start)
              // mytitem.end = new Date(this.makeDateStr(todayDay) + ' ' + this.schedules[i].times[p].end)
              var startDate=new Date((this.makeDateStr(todayDay) + ' ' + this.schedules[i].times[p].start).replace(/-/g,'/'))
              var stopDate=new Date((this.makeDateStr(todayDay) + ' ' + this.schedules[i].times[p].end).replace(/-/g,'/'))
              mytitem.start = (startDate.getHours()<10? '0'+(startDate.getHours()): startDate.getHours())+':' +(startDate.getMinutes()<10? '0'+(startDate.getMinutes()): startDate.getMinutes())
              mytitem.end = (stopDate.getHours()<10? '0'+(stopDate.getHours()): stopDate.getHours())+':' +(stopDate.getMinutes()<10? '0'+(stopDate.getMinutes()): stopDate.getMinutes())
              // mytitem.start =  this.schedules[i].times[p].start
              // mytitem.end = this.schedules[i].times[p].end
              this.titems.push(mytitem)
            }
            
          }
         }
            
          if (this.schedules[i].actions) {
            while (this.items.length > 0) {
              this.items.pop()
            }

           for( var k = 0; k< this.schedules[i].actions.length; k++ ) {
                   var myitem = {}
                    myitem.idx = k+1
                    myitem.btn = '-'
                    if( k == this.schedules[i].actions.length-1 ) myitem.btn = '+'
                    myitem.device = this.schedules[i].actions[k].param
                    
                    if( myitem.device == 'NNSF' || myitem.device == 'SESF' || myitem.device == 'SWSF' || myitem.device == 'NSWN' || myitem.device == 'SSWN') {
                       if( this.schedules[i].actions[k].value == '999' ) {
                          myitem.op2 = '2'
                         myitem.hide1 = 'hide_div'
                         myitem.hide2 = 'show_sel2'
                         myitem.hide3 = 'hide_div'
                       
                       } else {
                         myitem.value = this.schedules[i].actions[k].value
                         myitem.op2 = '1'
                         myitem.hide1 = 'hide_div'
                         myitem.hide2 = 'show_sel2'
                         myitem.hide3 = 'show_sel3'
                       }
                       
                    } else {
                      myitem.op = this.schedules[i].actions[k].value
                      myitem.hide1 = 'show_sel1'
                      myitem.hide2 = 'hide_div'
                      myitem.hide3 = 'hide_div'
                    }
                    
                    
                    this.items.push(myitem)
                 }
          }
        }
      }
    },

  
    makeDateStr(mydate) {
      var yyyy = mydate.getFullYear()
      var mm = mydate.getMonth()
      mm = mm + 1
      var mmstr = mm.toString()
      if (mm < 10) mmstr = '0' + mmstr
      var dd = mydate.getDate()
      var ddstr = dd.toString()
      if (dd < 10) ddstr = '0' + ddstr

      return yyyy + '-' + mmstr + '-' + ddstr
    },
    makeTimeStr(myTime) {
      var hh = myTime.getHours()
      var hhstr = hh.toString()
      if (hh < 10) hhstr = '0' + hhstr

      var min = myTime.getMinutes()
      var minstr = min.toString()
      if (min < 10) minstr = '0' + minstr

      var sec = myTime.getSeconds()
      var secstr = sec.toString()
      if (sec < 10) secstr = '0' + secstr

      return hhstr + ':' + minstr + ':' + secstr
    },
    onForceClose(iidx) {
  console.log(iidx)
    if( iidx == '1' ) {
      for( y = 0; y<this.items.length; y++ ) {
            console.log(this.items[y].op2)
            if( this.items[y].op2 == iidx ) {
               this.items[y].hide3 = 'show_sel3'
            }
         }
    }
     if( iidx == '2' ) {
      for( var y = 0; y<this.items.length; y++ ) {
            console.log(this.items[y].op2)
            if( this.items[y].op2 == iidx ) {
               this.items[y].hide3 = 'hide_div'
            }
         }
    }
    
    },
    onSelectDevice(indexx) {
      console.log(indexx)
      if( indexx == 'NNSF' || indexx == 'SESF' || indexx == 'SWSF' || indexx == 'NSWN' || indexx == 'SSWN' ) {
         for( var y = 0; y<this.items.length; y++ ) {
            console.log(this.items[y].device)
            if( this.items[y].device == indexx ) {
               this.items[y].hide1 = 'hide_div'
               this.items[y].hide2 = 'show_sel2'
               this.items[y].hide3 = 'show_sel3'
            }
         }
      }
      
      if( indexx == 'FAN' || indexx == 'LIGHT' || indexx == 'WATER') {
         for( y = 0; y<this.items.length; y++ ) {
            if( this.items[y].device == indexx ) {
               this.items[y].hide1 = 'show_sel1'
               this.items[y].hide2 = 'hide_div'
               this.items[y].hide3 = 'hide_div'
            }
         }
      }
    },

    clearDialog() {
      this.name = ''
      this.startTime = ''
      this.stopTime = ''
      this.startTimeDate = ''
      this.stopTimeDate = ''
      this.textContent = ''
      this.formSelect = ''
      this.dialogForm.enable = false
      this.endDay = false
      this.numDate = ''
      this.numDate2 = ''
      this.intervalList = ''
      this.intervalList2 = ''

      while (this.items.length > 0) {
        this.items.pop()
      }
      
       while (this.titems.length > 0) {
        this.titems.pop()
      }
      
       var newitem = {}
       newitem.idx = 1
       newitem.btn = '+'
       newitem.device = ''
       newitem.op = ''
       newitem.value = ''
       newitem.hide1 = 'show_sel1'
       newitem.hide2 = 'hide_div'
       newitem.hide3 = 'hide_div'
       this.items.push(newitem)
      
      var newtitem = {}
      newtitem.idx = 1
      newtitem.btn = '+'
      newtitem.start = ''
      newtitem.end = ''
      this.titems.push(newitem)
    },

    doDelete() {
      if (this.scid != '0') {
        for (var x = 0; x < this.schedules.length; x++) {
          var schobj = this.schedules[x]

          if (schobj.scid == this.scid) {
            this.schedules.splice(x, 1)
            break
          }
        }
      }

      // this.resolveToCalendar()

      this.addConditionsVisible = false

      this.$ajax({
        method: 'GET',
        url: 'http://www.iot-fitone.com/schdel?gwid=' + this.loginUser + '&scid=' + this.scid,
      })
      .then(res=>{
        // スケジュールデータを取得
        this.getScheduleData()
      })
      .catch(error => {
            console.log(error)
        })
      //this.clearCalendarData()
     //this.getCalendarData()
    },
    //  Editスケジュールの確定ボタン
    doConfirm() {
      var scheduleobj = {}
      scheduleobj.scid = this.scid
      scheduleobj.name = this.name

      if (this.dialogForm.enable) scheduleobj.enable = '1'
      else scheduleobj.enable = '0'

      scheduleobj.priority = this.formSelect
      // 2019-03-06 時間の変更
      // scheduleobj.sdate = this.makeDateStr(this.startTimeDate)
      // scheduleobj.edate = this.makeDateStr(this.stopTimeDate)
      scheduleobj.sdate = this.startTimeDate
      scheduleobj.edate = this.stopTimeDate
      // dmode
      scheduleobj.dmode = this.endList
      scheduleobj.drepeat = {}

      if (scheduleobj.dmode == '9') {
        var ddrpt = {}
        ddrpt.rtimes = this.numDate
        ddrpt.duration = this.intervalList
        scheduleobj.drepeat = ddrpt
      }
      
      scheduleobj.allday = this.endDay
      
      var ttimes = []
      
      if( this.endDay ) {
        var ttime2 = {}
        ttime2.start = '00:00:01'
        ttime2.end = '23:59:59'
        ttimes.push(ttime2)
         
      }else {
      
       for (var p = 0; p < this.titems.length; p++) {
         var ttime = {}
         try{
          // 2019-03-06 時間の変更
          //  ttime.start = this.makeTimeStr(this.titems[p].start)
          //  ttime.end = this.makeTimeStr(this.titems[p].end)

          //開始時間が存在するかどうかを判断する
          if(this.titems[p].start=='undefined'|| this.titems[p].start== '' ||this.titems[p].start==null){
            ttime.start='00:00:01'
          }else{
            ttime.start = this.titems[p].start
          }
          //終了時間が存在するかどうかを判断する
         if(this.titems[p].end=='undefined'|| this.titems[p].end== '' ||this.titems[p].end==null){
            ttime.end = '23:59:59'
         }else{
            ttime.end = this.titems[p].end
         }
           
         }catch(err) {
           ttime.start = '00:00:01'
           ttime.end = '23:59:59'
         }
         
         ttimes.push(ttime)
        }
       }
       
       scheduleobj.times = ttimes
       
//      scheduleobj.stime = this.makeTimeStr(this.startTime)
//      scheduleobj.etime = this.makeTimeStr(this.stopTime)

//      scheduleobj.tmode = this.endList2
//      scheduleobj.trepeat = {}

//      if (scheduleobj.tmode == '9') {
//        var ttrpt = {}
//        ttrpt.rtimes = this.numDate2
//        ttrpt.duration = this.intervalList2
//        scheduleobj.trepeat = ttrpt
//      }

      console.log(this.examTextarea)
      scheduleobj.text = this.examTextarea
//      scheduleobj.email = []

      var actions = []
       
       for( var k = 0; k< this.items.length; k++ ){
         var action = {}
         
         var devName = this.items[k].device
         
         if( devName == 'NNSF' || devName == 'SESF' || devName == 'SWSF' || devName == 'NSWN' || devName == 'SSWN') {
         
         action.param = this.items[k].device
         if( this.items[k].op2 == '2' ) {
           action.value = '999'        
         } else {
           action.value = this.items[k].value
         }
         
         } else {
         action.param = this.items[k].device
         action.value = this.items[k].op
         }
         
         
        
       //  action.param = this.items[k].device
        // action.value = this.items[k].op
         
         actions.push(action)
       }

      scheduleobj.actions = actions

      console.log(JSON.stringify(scheduleobj))
      if (this.scid != '0') {
        for (var x = 0; x < this.schedules.length; x++) {
          var schobj = this.schedules[x]

          if (schobj.scid == this.scid) {
            this.schedules.splice(x, 1)
            break
          }
        }
      }
      this.schedules.push(scheduleobj)

      // this.resolveToCalendar()

      this.addConditionsVisible = false

      this.$ajax({
        method: 'GET',
        url: 'http://www.iot-fitone.com/updateschedule?gwid=' + this.loginUser + '&scheduleobj=' + JSON.stringify(scheduleobj),
      })
      .then(res => {
        // スケジュールデータを取得
        this.getScheduleData()
      })
      .catch(error => {
            console.log(error)
        })
  
       
    },

    YYYYMMchangeHandler(value) {
      var selDate = new Date(value)
      var selWekDate = selDate.getDay()
      var selDayDate = selDate.getDate()
      var selmm = selDate.getMonth() + 1

      this.endItems[3].name = '毎月 ' + selDayDate + '日'
      this.endItems[4].name = '毎年 ' + selmm + '月' + selDayDate + '日'

      if (selWekDate == 0) {
        this.endItems[2].name = '毎週 日曜日'
      }

      if (selWekDate == 1) {
        this.endItems[2].name = '毎週 月曜日'
      }

      if (selWekDate == 2) {
        this.endItems[2].name = '毎週 火曜日'
      }

      if (selWekDate == 3) {
        this.endItems[2].name = '毎週 水曜日'
      }

      if (selWekDate == 4) {
        this.endItems[2].name = '毎週 木曜日'
      }

      if (selWekDate == 5) {
        this.endItems[2].name = '毎週 金曜日'
      }

      if (selWekDate == 6) {
        this.endItems[2].name = '毎週 土曜日'
      }
    },

    resolveToCalendar() {
      for (var kk = 1; kk < 12; kk++) {
        var divstr2 = 'show_div' + kk
        this[divstr2] = 'hide_div'
      }

      for (var j = 0; j < this.schedules.length; j++) {
        var jj = j + 1
        var divstr = 'show_div' + jj
        var namestr = 'Schdule_Name' + jj

        this[divstr] = 'show_div'
        this[namestr] = this.schedules[j].name.substr(0, 10)

        var SenableOn = 'Schedule' + jj + 'On'
        var SenableOff = 'Schedule' + jj + 'Off'
        var SenableLabel = 'Schedule_Enable' + jj

        if (this.schedules[j].enable == '0') {
          this[SenableOn] = false
          this[SenableOff] = true
          this[SenableLabel] = '無効'
        } else {
          this[SenableOn] = true
          this[SenableOff] = false
          this[SenableLabel] = this.$t('Schedule_Enable_Label')
        }
      }

    //  while (demoEvents.length > 0) {
    //    demoEvents.pop()
    //  }

      for (var i = 0; i < this.schedules.length; i++) {
        var schobj = this.schedules[i]

        var strTitle = schobj.name
        

   //     if (schobj.actions) {
    //      strTitle += schobj.actions[0].param + ' On ' + schobj.actions[0].period + ' secs'
    //    }
        
        

        if (schobj.sdate && schobj.edate) {
        
          var new_event2 = {}

          new_event2.title = strTitle
          new_event2.start = schobj.sdate
          new_event2.end = schobj.edate

          var newdata3 = {}
          newdata3.scid = schobj.scid
          new_event2.data = newdata3

          //console.log(new_event2)
          demoEvents.push(new_event2)
        }
      }
    },
    //清空calendarData
    clearCalendarData() {
     while (this.calendarData.length > 0) {
        this.calendarData.pop()
      }
      _$('#scheduleCalendar').fullCalendar('removeEventSources')
     
    },

    //カレンダーデータ表示
    getCalendarData() {
     
      this.clearCalendarData()
      
      //schObjを定義する
      var schObj

      for (var i = 0; i < this.schedules.length; i++) {
        //取得した数組の循環
        schObj = this.schedules[i]
        // タイトルを定義する
        var strTitle = schObj.name

        // title
        if (schObj.actions) {
      //    strTitle += schObj.actions[0].param + ' On ' + schObj.actions[0].period + ' secs'
        }
        
        var thisday = schObj.sdate
        
        var startpoint = new Date( thisday)
        var endpoint = new Date( schObj.edate )
        var days = 1
        var months = 1
        var years = 1
        
        if( schObj.dmode == '0' ) {
          days = 1
          endpoint = new Date( schObj.sdate)
        }
        
        if( schObj.dmode == '1' ) days = 1
        if( schObj.dmode == '2' ) days = 7
        if( schObj.dmode == '3' ) months = 1
        if( schObj.dmode == '4' ) years = 1
        if( schObj.dmode == '5' ) days = 1
        if( schObj.dmode == '9' ) days = 1
        
        
        while( startpoint < endpoint) {
        
        thisday = this.makeDateStr(startpoint)
        
        // repeat mode
        if( schObj.dmode == '0' || schObj.dmode == '1' || schObj.dmode == '2' ) {
          startpoint.setTime( startpoint.getTime() + days * 86400000 )
        } else if( schObj.dmode == '3' ) {
        
          startpoint.setMonth(startpoint.getMonth() + months )
          
        } else if( schObj.dmode == '4' ) {
        
          startpoint.setFullYear(startpoint.getFullYear() + years)
          // console.log(startpoint)
          
        } else if( schObj.dmode == '5' ) {
        
          
          var wday = startpoint.getDay()
          startpoint.setTime( startpoint.getTime() + days * 86400000 )
          if( wday == 0 || wday == 6 ) continue
          
        } else if( schObj.dmode == '9' ) {
        
          var perio = schObj.drepeat.rtimes
          var durati = schObj.drepeat.duration
          
          if( durati == 0 ) {
              days = perio
              startpoint.setTime( startpoint.getTime() + days * 86400000 )
          }
          
          if( durati == 1 ) {
              days = perio*7
              startpoint.setTime( startpoint.getTime() + days * 86400000 )
          }
          
          if( durati == 2 ) {
             months = perio
             startpoint.setMonth(startpoint.getMonth() + months )
          }
          
          if( durati == 3 ) {
             years = perio
             startpoint.setFullYear(startpoint.getFullYear() + years)
          }
          
        } else {
          startpoint.setTime( startpoint.getTime() + days * 86400000 )
        }
        
        
        //start、end
        if (schObj.times) {
          var timeObj
          
         
          for (var j = 0; j < schObj.times.length; j++) {
            //times数組の循環
            timeObj = schObj.times[j]


            //開始時間のフォーマット
            // var startStyle = new Date(thisday + ' ' + timeObj.start)
            //終了時間のフォーマット
            // var stopStyle = new Date(thisday + ' ' + timeObj.end)

            //新築の数組
            var new_time = {}
            // scid
            new_time.scid = schObj.scid
           
            // title
            new_time.title = strTitle
            // 開始時間
            new_time.start = thisday + ' ' + timeObj.start
            // var startStyle = thisday + ' ' + timeObj.start
            // new_time.start =
            //   startStyle.getFullYear() +
            //   '-' +
            //   ((startStyle.getMonth() + 1)>10?(startStyle.getMonth() + 1):'0'+(startStyle.getMonth() + 1))+
            //   '-' +
            //   (startStyle.getDate()<10? '0'+(startStyle.getDate()): startStyle.getDate())+
            //   ' ' +
            //    (startStyle.getHours()<10? '0'+(startStyle.getHours()): startStyle.getHours())+
            //   ':' +
            //   (startStyle.getMinutes()<10? '0'+(startStyle.getMinutes()): startStyle.getMinutes())+
            //   ':' +
            //   (startStyle.getSeconds()<10? '0'+(startStyle.getSeconds()): startStyle.getSeconds())
            // 終了時間
            new_time.end = thisday + ' ' + timeObj.end
            //  new_time.end =
            //   stopStyle.getFullYear() +
            //   '-' +
            //    ((stopStyle.getMonth() + 1)>10?(stopStyle.getMonth() + 1):'0'+(stopStyle.getMonth() + 1))+
            //   '-' +
            //   (stopStyle.getDate()<10? '0'+(stopStyle.getDate()): stopStyle.getDate())+
            //   ' ' +
            //    (stopStyle.getHours()<10? '0'+(stopStyle.getHours()): stopStyle.getHours())+
            //   ':' +
            //    (stopStyle.getMinutes()<10? '0'+(stopStyle.getMinutes()): stopStyle.getMinutes())+
            //   ':' +
            //   (stopStyle.getSeconds()<10? '0'+(stopStyle.getSeconds()): stopStyle.getSeconds())
             
             
            // rgbのランダム
            var r=parseInt(Math.random()*256)
            var g=parseInt(Math.random()*256)
            var b=parseInt(Math.random()*256)
            // backgroundColor
            new_time.backgroundColor='rgb('+r+','+g+','+b+')'
            // borderColor
            new_time.borderColor='rgb('+r+','+g+','+b+')'
             // 数組を追加する
              this.calendarData.push(new_time)
          }
        }
        }
        
      }
      //calendarDataを更新する
      _$('#scheduleCalendar').fullCalendar('addEventSource', this.calendarData)
    },
    //スケジュールデータを取得
    getScheduleData() {
      
      this.$ajax({
        method: 'GET',
        url: 'http://www.iot-fitone.com/query3?gwid=' + this.loginUser,
      }).then(res => {
        var objstr = JSON.stringify(res.data)

        var objres = JSON.parse(objstr)
        this.schedules = objres.schedules
        if( !this.schedules) this.schedules = []

        this.resolveToCalendar()
        //カレンダーデータ表示
        this.getCalendarData()
      })
    
     .catch(error => {
            console.log(error)
        })
    },

    changeMonth(start, end, current) {
      console.log('changeMonth', start, end, current)
    },

    // 2019-02-01 full-calendar 変更
    // eventClick(event, jsEvent, pos) {
    //   console.log(event.data.scid)
    //   console.log('eventClick', event, jsEvent, pos)
    //   this.edit_schedule(event.data.scid)
    //   this.addConditionsVisible = true
    // },

    // dayClick(day, jsEvent) {
    //   alert(day)
    //   console.log('dayClick', day, jsEvent)
    //   this.$refs.calendar.fireMethod('changeView', this.defaultView)

    //   //   this.addConditionsVisible = true
    //   //      this.startTimeDate = day
    //   //      this.stopTimeDate = day
    // },
    // moreClick(day, events, jsEvent) {
    //   console.log('moreCLick', day, events, jsEvent)
    // },

    //イベントをクリック
    scheduleCalendarEventClick(event, jsEvent, view) {
      console.log(jsEvent, 'jsEvent')
      console.log(view, 'views')
      //新規
      this.addConditionsVisible = true
     //Editスケジュールの情報
      this.edit_schedule(event.scid)
    },
    //日付事件をクリック
    scheduleCalendarDayClick(date, allDay, jsEvent) {
      console.log(allDay)
      console.log(jsEvent)
      //新規
      this.addConditionsVisible = true
      //新規スケジュール
      this.new_schedule(date)
    },
    /**
     * チェックボックスの状態
     */
    addEndTime(checked) {
      if (checked === true) {
        this.unaddEndTimeDateShow = 'inline-block'
        this.unaddEndTimeDate = '125px'
        this.unaddEndTime = '100px'
        this.addEndTimeDateLeft = 'auto 0 auto 5px'
        var todayDay = new Date()
        this.startTime = this.makeDateStr(todayDay) + '00:00:00'
        this.endTime = this.makeDateStr(todayDay) + '23:59:59'
      } else {
        //    this.unaddEndTime = '0'
        //    this.unaddEndTimeDate = '230.5px'
        // this.unaddEndTimeDateShow = 'none'
        //   this.unaddEndTimeDateShow = 'inline-block'
        //    this.addEndTimeDateLeft = '0'
      }
    },

    /**
     * ボックス：カスタマイズを選択
     */
    customContent(selection) {
      if (selection === '9') {
        this.unshowSelectSchedule = 'block'
      } else {
        this.unshowSelectSchedule = 'none'
      }
    },

    customContent2(selection) {
      if (selection === '9') {
        this.unshowSelectSchedule2 = 'block'
      } else {
        this.unshowSelectSchedule2 = 'none'
      }
    },

    /**
     * ボックス：月を選ぶ
     */
    intervalContent(intervalSelection) {
      // か月こど
      if (intervalSelection === 'か月こど') {
        this.unshowMonthMessage = 'block'
      } else {
        this.unshowMonthMessage = 'none'
      }
      // か週こど
      if (intervalSelection === 'か週こど') {
        this.unshowWeekMessage = 'block'
      } else {
        this.unshowWeekMessage = 'none'
      }
    },
    // なし
    noneMessage(endLabel) {
      if (endLabel === 1) {
        this.isEndInputMessageDisabled = true
        this.isEndInputReturnDisabled = true
      }
    },
    // 終了日
    endMessage(endLabel) {
      if (endLabel === 2) {
        this.isEndInputMessageDisabled = false
        this.isEndInputReturnDisabled = true
      }
    },
    // 繰り返し
    endInputReturn(endLabel) {
      if (endLabel === 3) {
        this.isEndInputReturnDisabled = false
        this.isEndInputMessageDisabled = true
      }
    },
  },
}
</script>
<style lang="scss" scoped>
#schedule {
  overflow: hidden;
  text-align: left;
  .padding-border-bottom {
    padding: 0 30px 20px;
    border-bottom: 1px solid #f2f2f2;
  }
  .border-top-gray {
    border-top: 1px solid #ebedf4;
  }
}

.important {
  color: white;
  background-color: orange;
}


.show_div{
  display:inline-block;
}

.hide_div{
  display:none;
}

.show_sel1{
  display:inline-block;
  width: 120px;
}

.show_sel2{
  display:inline-block;
  
}

.show_sel3{
  display:inline-block;
  
}


ul {
    margin: 0; 
    padding: 0; 
}
</style>

