import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    config:{},
    userId: null,
    // messageToken: '',
  },
  getters:{
    getUserId: state => state.userId,
    getHeaders: state => {
      return {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + state.userId,
      }
    }
    // getMessageToken: state => {
    //   return state.messageToken
    // }
  },
  mutations: {
    setUserId(state, payload) {
      state.userId = payload
    },
    // setMessageToken(state, token) {
    //   state.messageToken = token
    // },
    addValue (state, payload){
      state.config.all.find(x => x.id === payload.interfaceId).param[payload.paramIndex]
      .value.push(payload.newValue)
    },
    deleteValue (state, payload){
      state.config.all.find(x => x.id === payload.interfaceId).param[payload.paramIndex]
      .value.splice(payload.valueIndex, 1)
    },
    addParam (state, payload){
      state.config.all.find(x => x.id === payload.interfaceId).param.push(payload.newParam)
    },
    setParam (state, payload){
      let p = state.config.all.find(x => x.id === payload.interfaceId).param[payload.paramIndex]
      p.dev = payload.newSetting.dev
      p.scale = payload.newSetting.scale
      p.min = payload.newSetting.min
      p.max = payload.newSetting.max
    },
    setParamDev (state, payload){
      let p = state.config.all.find(x => x.id === payload.interfaceId).param[payload.paramIndex]
      p.dev = payload.newDev
    },
    setParamScale (state, payload){
      let p = state.config.all.find(x => x.id === payload.interfaceId).param[payload.paramIndex]
      p.scale = payload.newScale
    },
    setParamMin (state, payload){
      let p = state.config.all.find(x => x.id === payload.interfaceId).param[payload.paramIndex]
      p.min = payload.newMin
    },
    setParamMax (state, payload){
      let p = state.config.all.find(x => x.id === payload.interfaceId).param[payload.paramIndex]
      p.max = payload.newMax
    },
    deleteParam (state, payload){
      state.config.all.find(x => x.id === payload.interfaceId).param.splice(payload.paramIndex, 1)
      console.log(state.config.all.find(x => x.id === payload.interfaceId).param)
    },

    addDevice (state, payload){
      state.config.all.find(x => x.id === payload.interfaceId).devices.push(payload.newDevice)
    },
    deleteDevice (state, payload){
      state.config.all.find(x => x.id === payload.interfaceId).devices.splice(payload.deviceIndex, 1)
      console.log(state.config.all.find(x => x.id === payload.interfaceId).devices)
    },
    setDeviceFun (state, payload){
      let p = state.config.all.find(x => x.id === payload.interfaceId).devices[payload.deviceIndex]
      p.fun= payload.newFun
    },
    setDeviceStart (state, payload){
      let p = state.config.all.find(x => x.id === payload.interfaceId).devices[payload.deviceIndex]
      p.start= payload.newStart
    },
    setDeviceLength (state, payload){
      let p = state.config.all.find(x => x.id === payload.interfaceId).devices[payload.deviceIndex]
      p.length = payload.newLength
    },
    setInterface (state, payload){
      state.config.all[payload.id].interface = payload.data
    },
    addInterface (state, payload){
      state.config.all.push({
        id: payload.id,
        interface: payload.data,
        devices: [],
        param: []
      })
    },
    initState (state, payload){
      state.config = payload.config
    }
  },
  actions:{

  },
  modules:{

  }
})
