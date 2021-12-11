<template>
  <el-container>
    <el-table
    :data="paramArr"
    style="width: 100%; float: left;">
      <el-table-column
        label="id"
        width="80">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{scope.row.id}}</span>
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('name')"
        width="110">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{scope.row.name}}</span>
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('unit')"
        width="80">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{scope.row.unit}}</span>
        </template>
      </el-table-column>
      <el-table-column>
        <template slot="header">
          <el-button @click="centerDialogVisible = true">{{$t("add")}}</el-button>
        </template>
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">{{ $t("Setup")}}</el-button>
          <el-button
            size="mini"
            @click="handleDelete(scope.$index)">{{ $t("Delete")}}</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      title="add sensor"
      :visible.sync="centerDialogVisible"
      width="30%"
      center>
      <el-row :gutter="10">
        <el-col :span="8">
          <div>id</div>
          <div>
            <el-input
              v-model="addParam.id"
              clearable>
            </el-input>
          </div>
        </el-col>
        <el-col :span="8">
          <div>name</div>
          <div>  
            <el-input
              v-model="addParam.name"
              clearable>
            </el-input>
          </div>
        </el-col>
        <el-col :span="8">
          <div>unit</div>
          <div>  
            <el-input
              v-model="addParam.unit"
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
      title="add sensor"
      :visible.sync="setUpDialogVisible"
      width="70%"
      center>
      <ParamConfig
        v-if="setUpDialogVisible"
        :interfaceId="interfaceId"
        :paramIndex="paramIndex"
        @done="setUpDialogVisible = false"/>     
    </el-dialog>
  </el-container>
</template>
<script>
import ParamConfig from './ParamConfig.vue'

export default {
  components:{
    ParamConfig
  },
  props:{
    interfaceId: String,
  },
  data(){
    return{
      centerDialogVisible: false,
      
      
      addParam:{
        id: '', 
        name: '',
        unit: ''        
      },
      
      setUpDialogVisible: false,
      paramIndex: 0,
    }
  },
  computed:{
    paramArr: function(){
      let all = this.$store.state.config.all
      return all.find(x => x.id === this.interfaceId).param
    },
    testid: function(){
      return this.$store.state.testid
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row)
      this.paramIndex = index
      this.setUpDialogVisible = true
    },
    handleDelete(index){
      this.$store.commit('deleteParam', {
        interfaceId: this.interfaceId,
        paramIndex: index
      })
    },
    
    clearNewSensor(){
      this.addParam.area = ''
      this.addParam.pa_id = ''
      this.addParam.sensor = ''
      this.setUpDialogVisible = false
    },
    confirmNewSensor(){
      this.$store.commit('addParam', {
        interfaceId: this.interfaceId,
        newParam: {
          id: this.addParam.id,
          dev: '',
          name: this.addParam.name,
          min: '',
          max: '',
          unit: this.addParam.unit,
          value: [
            
          ],
          scale: '' 
        }    
      })
      this.addParam.id = ''
      this.addParam.name = ''
      this.addParam.unit = ''
      this.centerDialogVisible = false
      console.log('confirm')
    }
    
  },
  
}
</script>
<style lang="">
  
</style>