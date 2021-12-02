<template>
  <el-contianer>
    <el-table
    :data='deviceData'
    style='width: 100%'>
      <el-table-column type='expand'>
        <template slot-scope='props'>
          <el-container style="display: flex">
          <el-container style="width: 50%">
            <el-form label-position='left' inline class='demo-table-expand'>
              <el-form-item v-for="(item, key) in props.row.interface" :key="key" :label=key style="width: 100%">
                <span> {{ item }} </span>
              </el-form-item>
            </el-form>
          </el-container>
          <el-container style="width: 50%">
            <span>param table</span>
          </el-container>
          </el-container>
        </template>
      </el-table-column>
      <el-table-column
        label='ID'
        prop='id'>
      </el-table-column>
      <el-table-column
        label='Device'
        prop='interface.dev'>
      </el-table-column>
      <el-table-column
        label='Protocal'
        prop='protocal.type'>
      </el-table-column>
    </el-table>
  </el-contianer>
</template>

<script>


export default {
  components:{
    
  },
  data(){
    return{
      deviceData: [
        {
          'id':'1',
          'interface': {
            'dev': 'wifi',
            'ip': '192.168.1.115',
            'port': '1221'
          },
          'protocal': {
            'type': 'modbus',
            'devices': [
              {
                'id': '1',
                'fun': '3',
                'start': '0',
                'length': '4'
              }
            ],
            'interval': '5000',
            'param': [
              {
                'id': 'TEMP',
                'name': 'temperature',
                'dev': '1',
                'min': '0',
                'max': '100',
                'unit': '°C',
                'value': [
                  {
                    'byte': '4'
                  },
                  {
                    'byte': '3'
                  }
                ],
                'scale': '10'
              },
              {
                'id': 'HUM',
                'name': 'humidity',
                'dev': '1',
                'min': '0',
                'max': '100',
                'unit': '%',
                'value': [
                  {
                    'byte': '6'
                  },
                  {
                    'byte': '5'
                  }
                ],
                'scale': '10'
              },
              {
                'id': 'CO2',
                'name': 'CO2',
                'dev': '1',
                'min': '0',
                'max': '3000',
                'unit': 'ppm',
                'value': [
                  {
                    'byte': '8'
                  },
                  {
                    'byte': '7'
                  }
                ],
                'scale': '1'
              },
              {
                'id': 'NH3',
                'name': 'Ammonia',
                'dev': '1',
                'min': '0',
                'max': '3000',
                'unit': 'ppm',
                'value': [
                  {
                    'byte': '10'
                  },
                  {
                    'byte': '9'
                  }
                ],
                'scale': '100'
              }
            ]
          }
        },
        {
          'id': '2',
          'interface': {
            'dev': 'wifi',
            'ip': '192.168.1.115',
            'port': '1222'
          },
          'protocal': {
            'type': 'auto',
            'param': [
              {
                'id': 'WDIR',
                'name': 'wind direction',
                'min': '0',
                'max': '360',
                'unit': '°',
                'value': [
                  {
                    'byte': '2'
                  },
                  {
                    'byte': '3',
                    'shift': '7',
                    'mask': '1'
                  }
                ],
                'scale': '1'
              },
              {
                'id': 'LOW',
                'name': 'power low',
                'min': '0',
                'max': '1',
                'unit': ' ',
                'value': [
                  {
                    'byte': '3',
                    'shift': '3',
                    'mask': '1'
                  }
                ],
                'scale': '1'
              },
              {
                'id': 'OTEMP',
                'name': 'out door temperature',
                'min': '0',
                'max': '100',
                'unit': '°C',
                'value': [
                  {
                    'byte': '4'
                  },
                  {
                    'byte': '3',
                    'mask': '7'
                  }
                ],
                'scale': '10'
              },
              {
                'id': 'OHUM',
                'name': 'out door humidity',
                'min': '0',
                'max': '100',
                'unit': '%',
                'value': [
                  {
                    'byte': '5'
                  }
                ],
                'scale': '1'
              },
              {
                'id': 'WIND',
                'name': 'wind speed',
                'min': '0',
                'max': '100',
                'unit': 'm/s',
                'value': [
                  {
                    'byte': '6'
                  }
                ],
                'scale': '7.299'
              },
              {
                'id': 'QWIND',
                'name': 'instance wind speed',
                'min': '0',
                'max': '100',
                'unit': 'm/s',
                'value': [
                  {
                    'byte': '7'
                  }
                ],
                'scale': '0.9'
              },
              {
                'id': 'RAIN',
                'name': 'rain',
                'min': '0',
                'max': '100',
                'unit': 'mm',
                'value': [
                  {
                    'byte': '9'
                  },
                  {
                    'byte': '8'
                  }
                ],
                'scale': '0.9'
              }
            ]
          }
        },
        {
          'id': '3',
          'interface': {
            'dev': 'rs485',
            'tty': '/dev/ttymxc4',
            'baud': '9600',
            'databit': '8',
            'stopbit': '1',
            'parity': 'none'
          },
          'protocal': {
            'type': 'modbus',
            'devices': [
              {
                'id': '15',
                'fun': '3',
                'start': '0',
                'length': '2'
              },
              {
                'id': '24',
                'fun': '3',
                'start': '0',
                'length': '2'
              }
            ],
            'interval': '5000',
            'param': [
              {
                'id': 'TEMP15',
                'dev': '15',
                'name': 'temperature15',
                'min': '0',
                'max': '100',
                'unit': '°C',
                'value': [
                  {
                    'byte': '6'
                  },
                  {
                    'byte': '5'
                  }
                ],
                'scale': '10'
              },
              {
                'id': 'HUM15',
                'name': 'humidity15',
                'dev': '15',
                'min': '0',
                'max': '100',
                'unit': '%',
                'value': [
                  {
                    'byte': '4'
                  },
                  {
                    'byte': '3'
                  }
                ],
                'scale': '10'
              },
              {
                'id': 'TEMP24',
                'dev': '24',
                'name': 'temperature24',
                'min': '0',
                'max': '100',
                'unit': '°C',
                'value': [
                  {
                    'byte': '6'
                  },
                  {
                    'byte': '5'
                  }
                ],
                'scale': '10'
              },
              {
                'id': 'HUM24',
                'name': 'humidity24',
                'dev': '24',
                'min': '0',
                'max': '100',
                'unit': '%',
                'value': [
                  {
                    'byte': '4'
                  },
                  {
                    'byte': '3'
                  }
                ],
                'scale': '10'
              }
            ]
          }
        }
      ]
    }
  },
  methods: {
    
    
  },
  created(){
    this.device = this.$route.params.device
  }
}
</script>

<style scoped>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>
