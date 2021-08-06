import GatewayFrame from '../components/frames/GatewayFrame.vue'
import GatewayCommand from '../components/GatewayCommand.vue'

import i18n from '../lang/lang.js'

import DeviceManager from '../components/DeviceManager.vue'
import GatewayConfig from '../components/GatewayConfig.vue'

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
      path: 'gatewayConfig/:device',
      name: 'gatewayConfig',
      component: GatewayConfig,
      meta: {title: route => `${route.params.device}`}
    }
  ]
}

const devicePath = [routes]

export default devicePath