<template>
    <el-form>
        <el-form-item>
            <el-select v-model="type" placeholder="type">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
        </el-form-item>
        <el-form-item v-show="type=='wifi'" v-for="(value, index) in wifiForm" :key="index" :label="index">
            <el-input v-model="wifiForm[index]"></el-input>
        </el-form-item>
        <el-form-item v-show="type=='rs485'" v-for="(value, index) in rs485Form" :key="index" :label="index">
            <el-input v-model="rs485Form[index]"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button :disabled="!(type)" type="primary" @click="addInterface">创建</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
  export default {
    data() {
      return {
        options: [
            {
                value: 'wifi',
                label: 'wifi'
            }, {
                value: 'rs485',
                label: 'rs485'
            }, 
        ],
        wifiForm: {
            dev: 'wifi',
            ip: '192.168.1.115',
            port: '1221',
            protocal: 'modbus',
            interval: '5000'
        },
        rs485Form: {
            dev: 'rs485',
            tty: '/dev/ttymxc4',
            baud: '9600',
            databit: '8',
            stopbit: '1',
            parity: 'none',
            protocal: 'modbus',
            interval: '5000'
        },
        type: null
      }
    }
  }
</script>