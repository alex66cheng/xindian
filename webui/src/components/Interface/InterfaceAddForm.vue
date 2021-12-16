<template>
    <el-form>
        <el-form-item label="ID" >
            <el-row>
            <el-col :span="8">
                <el-input v-model="InterfaceId"></el-input>
            </el-col>
            <el-col :span="2" class="line"> - </el-col>
            <el-col :span="12">
                <el-select v-model="type" placeholder="type">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </el-col>
            </el-row>
        </el-form-item>
        <el-form>
            <el-form-item v-show="type=='wifi'" v-for="(value, index) in wifiForm" :key="index" :label="index">
                <el-input v-model="wifiForm[index]"></el-input>
            </el-form-item>
        </el-form>
        <el-form>
            <el-form-item v-show="type=='rs485'" v-for="(value, index) in rs485Form" :key="index" :label="index">
                <el-input v-model="rs485Form[index]"></el-input>
            </el-form-item>
        </el-form>
        <el-form-item>
            <el-button :disabled="!(type)" type="primary" @click="confirmAdd">创建</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
  export default {
    data() {
      return {
        InterfaceId: '',
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
    },
    methods: {
        confirmAdd(){
            console.log('add confirm! data: ' + JSON.stringify(this.wifiForm))
            console.log('add confirm! data: ' + JSON.stringify(this.rs485Form))
            if(this.type == 'wifi'){
                this.$store.commit('addInterface', {
                    id: this.InterfaceId,
                    data: this.wifiForm
                })
            }else if(this.type == 'rs485'){
                this.$store.commit('addInterface', {
                    id: this.InterfaceId,
                    data: this.rs485Form
                })
            }else{
                console.log('confirmAdd type error: ' +  this.type + ' is nota valid type')
            }
        }
    }
  }
</script>