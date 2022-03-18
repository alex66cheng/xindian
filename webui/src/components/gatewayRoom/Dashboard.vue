<template>
  <div>
    <el-row>
      <el-col :span="24">
        <!--<el-dropdown @command="gotoGateway">
          <el-button type="primary">
            {{currentArea}}<i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown" >
            <el-dropdown-item command="601">601</el-dropdown-item>
            <el-dropdown-item command="602">602</el-dropdown-item>
            <el-dropdown-item command="603">603</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>-->
      </el-col>
    </el-row>
    <!--<el-row>
      <el-col :span="24">
        <div>{{$t("time")}}: {{datetime}}</div>
      </el-col>
    </el-row>-->
    <el-row :gutter="20">
     <el-col
       v-for="(data, index) in sensorData.params"
       :span="6"
       :key="index">
        <el-card class="box-card dashboard_data" >
          <div slot="header" class="clearfix">
            <span> {{ data.name }} </span>
            <el-button style="float: right; padding: 3px 0" type="text">詳細資料</el-button>
          </div>
          <div class="text item" v-bind:class="{ 'text-danger': (data.value > data.max || data.value < data.min) }" :id="data.name">
            {{ data.value }} {{ data.unit }}
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
      sensorData:{}
    }
  },
  created() {
    this.getSensorsData()
    this.polling = setInterval( this.getSensorsData, 1000 )
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
         url: 'http://54.65.68.13:8080/Pig/' + this.$route.params.id +'/#' // 理論上要加 Pig00001 之類的 id 去分別讀取不同 data
       })
       .then( res => {
          var objstr = JSON.stringify(res.data)
          console.log(objstr)

          this.sensorData = res.data
       })
       .catch( error => {
          console.log(error)
       })
    },
    gotoGateway(command){
      this.$router.replace({namd: 'dashboard', params:{id: command}})
    }

  },
  watch:{
  }
}
</script>

<style scoped>
.text-danger {
  color: red;
}
</style>