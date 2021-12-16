<template>
  <div >
    <el-row>
      <el-col :span="24">
        <el-button v-if="disableEdit" @click="disableEdit = !(disableEdit)" style="">Edit</el-button>
        <el-button v-if="!(disableEdit)" @click="disableEdit = !(disableEdit)" style="">Done</el-button>
      </el-col>
    </el-row>
    
    <el-row :gutter="12" style="margin-bottom: 10px">
      <el-col :span="6">
        <div>scale</div>
        <el-input
          v-model="scale"
          :disabled="disableEdit"
          clearable>
        </el-input>
      </el-col>
      <el-col :span="6">
        <div>dev</div>
        <el-input
          v-model="dev"
          :disabled="disableEdit"
          clearable>
        </el-input>
        <div></div>
      </el-col>
      
      <el-col :span="6">
        <div>min</div>
        <el-input
          v-model="min"
          :disabled="disableEdit"
          clearable>
        </el-input>
      </el-col>
      <el-col :span="6">
        <div>max</div>
        <el-input
          v-model="max"
          :disabled="disableEdit"
          clearable>
        </el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="9">
        <el-table
        :data="paramSetting.value"
        style="width: 100%; floar: right;">
          <el-table-column
            label="byte"
            width="80">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{scope.row.byte}}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="shift"
            width="80">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{scope.row.shift}}</span>
            </template>
          </el-table-column>
          <el-table-column
            :label="$t('device')"
            width="80">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{scope.row.mask}}</span>
            </template>
          </el-table-column>
          <el-table-column
            :label="$t('delete')"
            width="80">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleDelete(scope.$index)">{{ $t('delete')}}</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
      <el-col :span="3">
        <el-button style="float:right; margin-right: 10px;" :disabled="disableAddValue" @click="confirmAddValue" >{{$t("add")}}</el-button>
      </el-col>
      <el-col :span="12">
        <el-row :gutter="30">
          <el-col :span="8">
            <div>
              <el-input
                placeholder="byte"
                v-model="valueLocal.byte"
                clearable>
              </el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div>
              <el-input
                placeholder="shift"
                v-model="valueLocal.shift"
                clearable>
              </el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div>
              <el-input
                placeholder="mask"
                v-model="valueLocal.mask"
                clearable>
              </el-input>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>

    <el-row style="text-align:center; position: relative; bottom:0; margin-top: 20px"> 
      <el-col :span="12" style="text-align: right; padding-right: 20px;">
        <el-button @click="cancelEdit" style="">Cancel</el-button>
      </el-col>
      <el-col :span="12" style="text-align: left; padding-left: 20px;">
        <el-button @click="confirmEdit" type="primary">Confirm</el-button>
      </el-col>
    </el-row>
    
  
  </div>

</template>

<script>
  //import crc16modbus from 'crc/crc16modbus'
  export default {
    props:{
      interfaceId: String,
      paramIndex: Number,
      outerSetting: Object,
    },
    data() {
      return {
        

        pa_id: '',
        pa_name: '',
 
        
        
        valueLocal:{
          byte: '',
          shift: '',
          mask: ''
        },
        
        disableEdit: true,
        confirmOk: true,
        modbusOk: false,
        paramSettingOk: false,
      }    
    },
    created: function(){
      
    },
    computed:{
      paramSetting:function(){
      
        let all = this.$store.state.config.all
        let params=all.find(x => x.id === this.interfaceId).param
        return params[this.paramIndex]
        
      },
      scale:{
        get(){
          return this.paramSetting.scale
        },
        set(newScale){
          this.$store.commit('setParamScale', {
            interfaceId: this.interfaceId,
            paramIndex: this.paramIndex,
            newScale: newScale
          })
        }
      },
      dev:{
        get(){
          return this.paramSetting.dev
        },
        set(newDev){
          this.$store.commit('setParamDev', {
            interfaceId: this.interfaceId,
            paramIndex: this.paramIndex,
            newDev: newDev
          })
        }
      },
      
      min:{
        get(){
          return this.paramSetting.min
        },
        set(newMin){
          this.$store.commit('setParamMin',{
            interfaceId: this.interfaceId,
            paramIndex: this.paramIndex,
            newMin: newMin
          })
        }
      },
      max:{
        get(){
          return this.paramSetting.max
        },
        set(newMax){
          this.$store.commit('setParamMax',{
            interfaceId: this.interfaceId,
            paramIndex: this.paramIndex,
            newMax: newMax
          })
        }
      },
      disableAddValue: function(){
        return (this.valueLocal.byte === '' && this.valueLocal.shift === '' && this.valueLocal.mask === '')
      }
      
      
    },
    watch:{
      

    },
    methods:{
     
      sendCommand(){
        
      },
      initData(){
        this.paramSettingLocal.unit = ''
        this.paramSettingLocal.scale = ''
      
      },
      cancelEdit(){     
        this.$emit('done')
      },
      confirmEdit(){
        this.sendCommand()
        /*this.$store.commit('setParam',{
          interfaceId: this.interfaceId,
          paramIndex: this.paramIndex,
          newSetting:{  
            dev: this.paramSettingLocal.dev,
            scale: this.paramSettingLocal.scale,
            min: this.paramSettingLocal.min,
            max: this.paramSettingLocal.max,
          }
        })*///待討論
        this.disableEdit = true  
        this.$emit('done')
      },
      confirmAddValue(){
        this.$store.commit('addValue', {
          interfaceId: this.interfaceId,
          paramIndex: this.paramIndex,
          newValue: {
            byte: this.valueLocal.byte,
            shift: this.valueLocal.shift,
            mask: this.valueLocal.mask
          }
        })

        this.valueLocal.byte = ''
        this.valueLocal.shift = ''
        this.valueLocal.mask = ''
      },
      handleDelete(index) {
        this.$store.commit('deleteValue', {
          interfaceId: this.interfaceId,
          paramIndex: this.paramIndex,
          valueIndex: index
        })
      },


    }
  }
</script>
<style scoped>

</style>