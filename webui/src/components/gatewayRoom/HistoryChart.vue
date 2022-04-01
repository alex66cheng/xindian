<template>
    <div>
        <el-row>
            <div class="block">
                <el-date-picker
                    v-model="pickle"
                    type="datetimerange"
                    :picker-options="pickerOptions"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    align="right"
                    :change="getHistoryData()">
                </el-date-picker>
            </div>
        </el-row>
        <el-row>
            <div id="chart-1" style="height: 300px;">
                <line-chart :data="historyData" :min="10" :max="35"></line-chart>
            </div>
        </el-row>
    </div>
</template>

<script>
export default {
    data(){
        return {
            pickerOptions: {
                shortcuts: [{
                    text: '最近一周',
                    onClick(picker) {
                    const end = new Date()
                    const start = new Date()
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
                    picker.$emit('pick', [start, end])
                    }
                }, {
                    text: '最近一个月',
                    onClick(picker) {
                    const end = new Date()
                    const start = new Date()
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
                    picker.$emit('pick', [start, end])
                    }
                }, {
                    text: '最近三个月',
                    onClick(picker) {
                    const end = new Date()
                    const start = new Date()
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
                    picker.$emit('pick', [start, end])
                    }
                }]
            },
            pickle: [new Date(2022, 2, 30, 10, 0), new Date(2022, 2, 30, 11, 0)],
            historyData:{
                '2022/2/30 10:46:8': 25.64,
                '2022/2/30 10:46:14': 25.64,
                '2022/2/30 10:46:20': 25.64,
                '2022/2/30 10:46:26': 25.65,
                '2022/2/30 10:46:32': 25.65,
                '2022/2/30 10:46:38': 25.64,
                '2022/2/30 10:46:44': 25.64,
                '2022/2/30 10:46:50': 25.64,
                '2022/2/30 10:46:56': 25.63,
                '2022/2/30 10:47:22': 25.63,
                '2022/2/30 10:47:8': 25.62,
                '2022/2/30 10:47:14': 25.62,
                '2022/2/30 10:47:20': 25.62,
                '2022/2/30 10:47:26': 25.63,
                '2022/2/30 10:47:32': 25.63
            }
        }
    },
    created() {
        this.getHistoryData()
    },
    methods: {
       getHistoryData(){
           console.log(Math.floor(this.pickle[0].getTime()))
           console.log(Math.floor(this.pickle[1].getTime()))
           console.log(this.$route.params.key)
            this.$ajax({
                method: 'GET',
                url: 'http://54.65.68.13:8080/history',
                params: {
                    fromTime: Math.floor(this.pickle[0].getTime()),
                    toTime: Math.floor(this.pickle[1].getTime()),
                    key: this.$route.params.key
                }
            })
            .then( res => {
                var objstr = JSON.stringify(res.data)
                console.log(objstr)

                this.historyData = res.data
            })
            .catch( error => {
                console.log(error)
            })
        },
    }
}
</script>

<style>

</style>