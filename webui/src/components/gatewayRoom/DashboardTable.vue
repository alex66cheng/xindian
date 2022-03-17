<template>
<div>
  <el-table
    stripe
    ref="filterTable"
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="location"
      label="Location"
      sortable
      min-width="15%"
    >
    </el-table-column>
    <el-table-column
      prop="name"
      label="Name"
      min-width="30%">
    </el-table-column>
    <el-table-column
      prop="tags"
      label="tags"
      min-width="45%">
      <template slot-scope="scope">
        <el-tag
            v-for="tag in scope.row.tags"
            :key="tag"
            type="primary"
            >
            {{tag}}
        </el-tag>
      </template>
    </el-table-column>
    <el-table-column
        min-width="10%">
        <template slot-scope="scope">
            <el-button @click="gotoDashboard(scope.row.name)" type="text">Detail</el-button>
        </template>
    </el-table-column>
  </el-table>
</div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [
          {
            location: 'ohga',
            name: 'Pig0001',
            tags: ['temperature', 'humidity', 'CO2', 'Ammonia']
          },{
            location: 'ohga',
            name: '601',
            tags: ['peoplecount', 'temperature', 'humidity', 'pm25']
          }, {
            location: 'ohga',
            name: '602',
            tags: ['peoplecount', 'temperature', 'humidity']
          }, {
            location: 'ohga',
            name: '603',
            tags: ['peoplecount', 'temperature', 'humidity']
          }
        ]
      }
    },
    methods: {
      gotoDashboard(n){
        this.$router.replace({name:'dashboard', params:{id: n}})
      }
    }
  }
</script>