<template>
<el-form>
    <el-button  @click="editable = !(editable)" style="">Edit</el-button>
    <el-form-item v-for="(value, index) in this.interface" :key="index" :label="index">
        <el-input :disabled="editable" v-model="interface[index]"></el-input>
    </el-form-item>
</el-form>
</template>

<script>
export default{
    data(){
        return {
            id: '',
            interface: {},
            editable: false
        }
    },
    props:{
        InterfaceData: Object
    },
    created(){
        this.id = this.InterfaceData.id
        this.interface = this.InterfaceData.interface
    },
    methods:{
    }
}
</script>
