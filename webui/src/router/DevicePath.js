import GatewayFrame from '../components/frames/GatewayFrame.vue'
import GatewayCommand from '../components/GatewayCommand.vue'

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
      path: 'modbus',
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
