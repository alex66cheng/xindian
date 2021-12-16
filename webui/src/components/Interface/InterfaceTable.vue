<template>
  <el-container style="display: block; padding: 20px">
    <el-container style="width: 100%">
      <el-button type="primary" @click="openAddDialog()" style="float: right">添加</el-button>
    </el-container>
    <el-table
    :data='deviceData'
    style='width: 100%;'>
      <el-table-column type='expand'>
        <template slot-scope='props'>
          <el-container style="display: flex">
            <el-container style="width: 50%">
              <DeviceTable :interfaceId="props.row.id"></DeviceTable>
            </el-container>
            <el-container style="width: 50%">
              <ParamTable :interfaceId="props.row.id"></ParamTable>
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
      <el-table-column>
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="openEditDialog(scope.$index, scope.row)">Edit</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      title="提示"
      v-if="editDialogVisible"
      :visible.sync="editDialogVisible"
      width="30%">
      <InterfaceEditForm :InterfaceId="editInterfaceId"/>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="editDialogVisible = false">關閉</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="Interface 設置"
      v-if="addDialogVisible"
      :visible.sync="addDialogVisible"
      width="30%">
      <InterfaceAddForm />
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="addDialogVisible = false">關閉</el-button>
      </span>
    </el-dialog>
  </el-container>
</template>

<script>
import DeviceTable from './Device/DeviceTable.vue'
import ParamTable from './Param/ParamTable.vue'
import InterfaceAddForm from './InterfaceAddForm.vue'
import InterfaceEditForm from './InterfaceEditForm.vue'

export default {
  data(){
    return {
      addDialogVisible: false,
      editDialogVisible: false,
      editInterfaceData: {}
    }
  },
  components:{
    DeviceTable,
    ParamTable, 
    InterfaceAddForm,
    InterfaceEditForm
  },
  computed: {
    deviceData: function(){
      return this.$store.state.config.all
    },
    deviceInfo: function(){
      console.log(Object.assign({}, this.$store.state.config.my, this.$store.state.config.mqtt))
      return Object.assign({}, this.$store.state.config.my, this.$store.state.config.mqtt)
    }
  },
  methods: {
    openAddDialog() {
      this.addDialogVisible = true
    },
    openEditDialog(index, row) {
      console.log(index, row)
      this.editInterfaceId = index
      this.editDialogVisible = true

      console.log(this.editInterfaceId)
    },
    handleDelete(index, row) {
      console.log(index, row)
    }
  },
  created(){
    this.device = this.$route.params.device

    this.$store.commit('initState', {
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
    })
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
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>
