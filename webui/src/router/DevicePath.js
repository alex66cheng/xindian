import i18n from '../lang/lang.js'

const routes = {
  path: 'device-manager',
  component: () => import('../components/frames/GatewayFrame.vue'),
  children:[
    {
      path: '',
      name: 'device-manager',
      component: () => import('../components/DeviceManager.vue'),
      meta:{title: route => i18n.messages[route.params.lang]['Device_Manager']}
    },
    {
      path: 'modbus/:device',
      name: 'modbus',
      component: () => import('../components/GatewayCommand.vue'),
      meta:{title: route => i18n.messages[route.params.lang]['Gateway_Command']}
    },
    {
      path: 'interface-table/:device',
      name: 'interface-table',
      component: () => import('../components/Interface/InterfaceTable.vue'),
      meta: {title: route => `${route.params.device}`}
    }
  ]
}

const devicePath = [routes]

export default devicePath
