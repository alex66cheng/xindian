import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    testid: "123",
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
            port: '1221'
          },
          protocal: {
            type: 'modbus',
            devices: [
              {
                id: '1',
                fun: '3',
                start: '0',
                length: '4'
              }
            ],
            interval: '5000',
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
                    byte: '4'
                  },
                  {
                    byte: '3'
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
                    byte: '6'
                  },
                  {
                    byte: '5'
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
                    byte: '8'
                  },
                  {
                    byte: '7'
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
                    byte: '10'
                  },
                  {
                    byte: '9'
                  }
                ],
                scale: '100'
              }
            ]
          }
        },
        {
          interface: {
            id: '2',
            dev: 'wifi',
            ip: '192.168.1.115',
            port: '1222'
          },
          protocal: {
            type: 'auto',
            param: [
              {
                id: 'WDIR',
                name: 'wind direction',
                min: '0',
                max: '360',
                unit: '°',
                value: [
                  {
                    byte: '2'
                  },
                  {
                    byte: '3',
                    shift: '7',
                    mask: '1'
                  }
                ],
                scale: '1'
              },
              {
                id: 'LOW',
                name: 'power low',
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
                min: '0',
                max: '100',
                unit: '°C',
                value: [
                  {
                    byte: '4'
                  },
                  {
                    byte: '3',
                    mask: '7'
                  }
                ],
                scale: '10'
              },
              {
                id: 'OHUM',
                name: 'out door humidity',
                min: '0',
                max: '100',
                unit: '%',
                value: [
                  {
                    byte: '5'
                  }
                ],
                scale: '1'
              },
              {
                id: 'WIND',
                name: 'wind speed',
                min: '0',
                max: '100',
                unit: 'm/s',
                value: [
                  {
                    byte: '6'
                  }
                ],
                scale: '7.299'
              },
              {
                id: 'QWIND',
                name: 'instance wind speed',
                min: '0',
                max: '100',
                unit: 'm/s',
                value: [
                  {
                    byte: '7'
                  }
                ],
                scale: '0.9'
              },
              {
                id: 'RAIN',
                name: 'rain',
                min: '0',
                max: '100',
                unit: 'mm',
                value: [
                  {
                    byte: '9'
                  },
                  {
                    byte: '8'
                  }
                ],
                scale: '0.9'
              }
            ]
          }
        },
        {
          interface: {
            id: '3',
            dev: 'rs485',
            tty: '/dev/ttymxc4',
            baud: '9600',
            databit: '8',
            stopbit: '1',
            parity: 'none'
          },
          protocal: {
            type: 'modbus',
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
            interval: '5000',
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
                    byte: '6'
                  },
                  {
                    byte: '5'
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
                    byte: '4'
                  },
                  {
                    byte: '3'
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
                    byte: '6'
                  },
                  {
                    byte: '5'
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
                    byte: '4'
                  },
                  {
                    byte: '3'
                  }
                ],
                scale: '10'
              }
            ]
          }
        }
      ]
    }
    
  },
  getters:{
    
  },
  mutations: {

  },
  actions:{

  },
  modules:{

  }
})