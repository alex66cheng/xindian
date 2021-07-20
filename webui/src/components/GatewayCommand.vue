<template>
  <div>
    <el-row>
      <el-col :span="24">{{$t("send")}}:</el-col>
    </el-row>
    <el-row>
      <el-col :span="6">
        ID
      </el-col>
      <el-col :span="6">
        func
      </el-col>
      <el-col :span="6">
        start address
      </el-col>
      <el-col :span="6">
        length
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6">
        <el-select v-model="id" clearable placeholder="ID">
          <el-option
            v-for="item in idOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="6">
        <el-select v-model="functionCode" clearable placeholder="function code">
          <el-option
            v-for="item in functionCodeOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="6">
        <el-select v-model="value" clearable placeholder="start address">
          <el-option
            v-for="item in IDoptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="6">
        <el-select v-model="value" clearable placeholder="length">
          <el-option
            v-for="item in IDoptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>
    </el-row>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        idOptions: [{
          value: '00',
          label: '00'
        }, {
          value: '01',
          label: '01'
        }, {
          value: '02',
          label: '02'
        }, {
          value: '03',
          label: '03'
        }],
        id: '',

        functionCodeOptions:[{
          value: '03',
          label: '03',
        },{
          value: '04',
          label: '04'
        },{
          value: '06',
          label: '06',
        },{
          value: '16',
          label: '16'
        }],
        functionCode: ''
      }
    }
  }
</script>