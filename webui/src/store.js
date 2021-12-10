import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    testid: '123',
    config:{
      my: {
        id: 'KA0000001'
      },
      mqtt: {
        ip: '52.197.39.218',
        client: 'kaso8467',
        port: '1883'
      },
      all: [
        {
          id: '1',
          interface: {
            dev: 'wifi',
            ip: '192.168.1.115',
            port: '1221',
            protocal: 'modbus',
            interval: '5000'
          },
          devices: [
            {
              id: '1',
              fun: '3',
              start: '0',
              length: '4'
            }
          ],
          param: [
            {
              id: 'TEMP',
              name: 'temperature',
              dev: '1',
              min: '0',
              max: '100',
              unit: '°C',
              value: [
                {
                  byte: '4',
                  shift: '',
                  mask: ''
                },
                {
                  byte: '3',
                  shift: '',
                  mask: ''
                }
              ],
              scale: '10'
            },
            {
              id: 'HUM',
              name: 'humidity',
              dev: '1',
              min: '0',
              max: '100',
              unit: '%',
              value: [
                {
                  byte: '6',
                  shift: '',
                  mask: ''
                },
                {
                  byte: '5',
                  shift: '',
                  mask: ''
                }
              ],
              scale: '10'
            },
            {
              id: 'CO2',
              name: 'CO2',
              dev: '1',
              min: '0',
              max: '3000',
              unit: 'ppm',
              value: [
                {
                  byte: '8',
                  shift: '',
                  mask: ''
                },
                {
                  byte: '7',
                  shift: '',
                  mask: ''
                }
              ],
              scale: '1'
            },
            {
              id: 'NH3',
              name: 'Ammonia',
              dev: '1',
              min: '0',
              max: '3000',
              unit: 'ppm',
              value: [
                {
                  byte: '10',
                  shift: '',
                  mask: ''
                },
                {
                  byte: '9',
                  shift: '',
                  mask: ''
                }
              ],
              scale: '100'
            }
          ]
        },
        {
          id: '2',
          interface: {
            dev: 'wifi',
            ip: '192.168.1.115',
            port: '1222',
            protocal: 'auto',
            scale: '1'
          },
          param: [
            {
              id: 'WDIR',
              name: 'wind direction',
              dev: '',
              min: '0',
              max: '360',
              unit: '°',
              value: [
                {
                  byte: '2',
                  shift: '',
                  mask: ''
                },
                {
                  byte: '3',
                  shift: '7',
                  mask: '1'
                }
              ]
            },
            {
              id: 'LOW',
              name: 'power low',
              dev: '',
              min: '0',
              max: '1',
              unit: ' ',
              value: [
                {
                  byte: '3',
                  shift: '3',
                  mask: '1'
                }
              ],
              scale: '1'
            },
            {
              id: 'OTEMP',
              name: 'out door temperature',
              dev: '',
              min: '0',
              max: '100',
              unit: '°C',
              value: [
                {
                  byte: '4',
                  shift: '',
                  mask: ''
                },
                {
                  byte: '3',
                  shift: '',
                  mask: '7'
                }
              ],
              scale: '10'
            },
            {
              id: 'OHUM',
              name: 'out door humidity',
              dev: '',
              min: '0',
              max: '100',
              unit: '%',
              value: [
                {
                  byte: '5',
                  shift: '',
                  mask: ''
                }
              ],
              scale: '1'
            },
            {
              id: 'WIND',
              name: 'wind speed',
              dev: '',
              min: '0',
              max: '100',
              unit: 'm/s',
              value: [
                {
                  byte: '6',
                  shift: '',
                  mask: ''
                }
              ],
              scale: '7.299'
            },
            {
              id: 'QWIND',
              name: 'instance wind speed',
              dev: '',
              min: '0',
              max: '100',
              unit: 'm/s',
              value: [
                {
                  byte: '7',
                  shift: '',
                  mask: ''
                }
              ],
              scale: '0.9'
            },
            {
              id: 'RAIN',
              name: 'rain',
              dev: '',
              min: '0',
              max: '100',
              unit: 'mm',
              value: [
                {
                  byte: '9',
                  shift: '',
                  mask: ''
                },
                {
                  byte: '8',
                  shift: '',
                  mask: ''
                }
              ],
              scale: '0.9'
            }
          ]
        },
        {
          id: '3',
          interface: {
            dev: 'rs485',
            tty: '/dev/ttymxc4',
            baud: '9600',
            databit: '8',
            stopbit: '1',
            parity: 'none',
            protocal: 'modbus',
            interval: '5000'
          },
          devices: [
            {
              id: '15',
              fun: '3',
              start: '0',
              length: '2'
            },
            {
              id: '24',
              fun: '3',
              start: '0',
              length: '2'
            }
          ],
          param: [
            {
              id: 'TEMP15',
              dev: '15',
              name: 'temperature15',
              min: '0',
              max: '100',
              unit: '°C',
              value: [
                {
                  byte: '6',
                  shift: '',
                  mask: ''
                },
                {
                  byte: '5',
                  shift: '',
                  mask: ''
                }
              ],
              scale: '10'
            },
            {
              id: 'HUM15',
              name: 'humidity15',
              dev: '15',
              min: '0',
              max: '100',
              unit: '%',
              value: [
                {
                  byte: '4',
                  shift: '',
                  mask: ''
                },
                {
                  byte: '3',
                  shift: '',
                  mask: ''
                }
              ],
              scale: '10'
            },
            {
              id: 'TEMP24',
              dev: '24',
              name: 'temperature24',
              min: '0',
              max: '100',
              unit: '°C',
              value: [
                {
                  byte: '6',
                  shift: '',
                  mask: ''
                },
                {
                  byte: '5',
                  shift: '',
                  mask: ''
                }
              ],
              scale: '10'
            },
            {
              id: 'HUM24',
              name: 'humidity24',
              dev: '24',
              min: '0',
              max: '100',
              unit: '%',
              value: [
                {
                  byte: '4',
                  shift: '',
                  mask: ''
                },
                {
                  byte: '3',
                  shift: '',
                  mask: ''
                }
              ],
              scale: '10'
            }
          ]
        }
      ]
    }
    
  },
  getters:{
    
  },
  mutations: {
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
    }
    
  },
  actions:{

  },
  modules:{

  }
})