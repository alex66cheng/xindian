import GatewayFrame from '../components/frames/GatewayFrame.vue'
import GatewayCommand from '../components/GatewayCommand.vue'

import i18n from '../lang/lang.js'

import DeviceManager from '../components/DeviceManager.vue'

const routes = {
  path: 'deviceManager',
  component: GatewayFrame,
  children:[
    {
      path: '',
      name: 'deviceManager',
      component: DeviceManager,
      meta:{title: route => i18n.messages[route.params.lang]['Device_Manager']}
    },
    {
      path: 'modbus/:device',
      name: 'modbus',
      component: GatewayCommand,
      meta:{title: route => i18n.messages[route.params.lang]['Gateway_Command']}
    },
    {
      path: 'interface-table/:device',
      name: 'interface-table',
      component: () => import("../components/Interface/InterfaceTable.vue"),
      meta: {title: route => `${route.params.device}`}
    }
  ]
}

const devicePath = [routes]

export default devicePath
