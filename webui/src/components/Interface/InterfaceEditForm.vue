<template>
<el-form>
    <el-button v-if="!(editable)" @click="editable = !(editable)" style="">Edit</el-button>
    <el-button v-if="editable" @click="editable = !(editable)" style="">Done</el-button>
    <el-button v-if="editable" @click="confirmEdit" type="primary">Confirm</el-button>
    <el-form-item v-for="(value, index) in this.interfaceFormData" :key="index" :label="index">
        <el-input :disabled="!(editable)" v-model="interfaceFormData[index]"></el-input>
    </el-form-item>
</el-form>
</template>

<script>
export default{
    data(){
        return {
            editable: false,
            interfaceFormData: {}
        }
    },
    props:{
        InterfaceId: String
    },
    computed: {
        interfaceFormDataFromStatus: function(){
            //console.log(this.InterfacceId)
            //console.log(this.$store.state.config.all)
            return this.$store.state.config.all[this.InterfaceId].interface
        }
    },
    created(){
        this.interfaceFormData = this.interfaceFormDataFromStatus
    },
    methods:{
        confirmEdit(){
            this.editable = !(this.editable)
            console.log('new interface data: ', JSON.stringify(this.interfaceFormData))
            console.log('call mutation "setInterface"')
            this.$store.commit('setInterface', {
                id: this.InterfaceId,
                data: this.interfaceFormData
            })

            console.log(this.$store.state.config.all[this.InterfaceId].interface)
        }
    }
}
</script>
