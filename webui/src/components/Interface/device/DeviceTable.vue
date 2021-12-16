<template>
  <el-container>
    <el-table
    :data="DeviceArr"
    style="width: 100%; float: left;">
      <el-table-column
        label="id"
        width="80">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{scope.row.id}}</span>
        </template>
      </el-table-column>

      <el-table-column
        :label="$t('fun')"
        width="80">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{scope.row.fun}}</span>
        </template>
      </el-table-column>

      <el-table-column
        :label="$t('start')"
        width="80">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{scope.row.start}}</span>
        </template>
      </el-table-column>

      <el-table-column
        :label="$t('length')"
        width="80">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{scope.row.length}}</span>
        </template>
      </el-table-column>

      <el-table-column>
        <template slot="header" slot-scope="scope">
          <el-button @click="centerDialogVisible = true">{{$t("add")}}</el-button>
        </template>
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index,scope.row)">{{ $t("Setup")}}</el-button>
          <el-button
            size="mini"
            @click="handleDelete(scope.$index)">{{ $t("Delete")}}</el-button>
        </template>
      </el-table-column>

    </el-table>
    <el-dialog
      title="add"
      :visible.sync="centerDialogVisible"
      width="30%"
      center>
      <el-row :gutter="10">

        <el-col :span="6">
          <div>id</div>
          <div>
            <el-input
              v-model="addDevice.id"
              clearable>
            </el-input>
          </div>
        </el-col>

        <el-col :span="6">
          <div>fun</div>
          <div>  
            <el-input
              v-model="addDevice.fun"
              clearable>
            </el-input>
          </div>
        </el-col>

        <el-col :span="6">
          <div>start</div>
          <div>  
            <el-input
              v-model="addDevice.start"
              clearable>
            </el-input>
          </div>
        </el-col>

        <el-col :span="6">
          <div>length</div>
          <div>  
            <el-input
              v-model="addDevice.length"
              clearable>
            </el-input>
          </div>
        </el-col>

      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button @click="clearNewSensor">Cancel</el-button>
        <el-button type="primary" @click="confirmNewSensor">Confirm</el-button>
      </span>
    </el-dialog>

    <el-dialog
      title="Edit"
      :visible.sync="setUpDialogVisible"
      width="50%"
      center>
      <DeviceConfig
        v-if="setUpDialogVisible"
        :interfaceId="interfaceId"
        :deviceIndex="deviceIndex"
        @done="setUpDialogVisible = false"/>
    </el-dialog>
  </el-container>
</template>
<script>
import DeviceConfig from './DeviceConfig.vue'

export default {
  components:{
    DeviceConfig
  },
  props:{
    interfaceId: String,
  },
  data(){
    return{
      centerDialogVisible: false,
       
      addDevice:{
        id: '', 
        fun: '',
        start: '', 
        length: ''
      },
      
      setUpDialogVisible: false,
      deviceIndex: 0,
    }
  },
  computed:{
    DeviceArr: function(){
      let all = this.$store.state.config.all
      return all.find(x => x.id === this.interfaceId).devices
    },
    testid: function(){
      return this.$store.state.testid
    }
  },
  methods: {
    handleEdit(index,row) {
      console.log(index,row)
      console.log(typeof index)
      this.deviceIndex = index,
      this.setUpDialogVisible = true
    },
    handleDelete(index){
      this.$store.commit('deleteDevice', {
        interfaceId: this.interfaceId,
        deviceIndex: index
      })
    },
    
    clearNewSensor(){
      this.setUpDialogVisible = false
    },
    confirmNewSensor(){
      this.$store.commit('addDevice', {
        interfaceId: this.interfaceId,
        newDevice: {
          id: this.addDevice.id,
          fun: this.addDevice.fun,
          start: this.addDevice.start,
          length: this.addDevice.length
        }    
      })
      this.addDevice.id = ''
      this.addDevice.fun = ''
      this.addDevice.start = ''
      this.addDevice.length = ''
      this.centerDialogVisible = false
      console.log('confirm')
    }
    
  },
  
}
</script>

<style lang=""> 
</style>
