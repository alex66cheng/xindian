import DashboardFrame from '../components/frames/DashboardFrame.vue'
import Dashboard from '../components/gatewayRoom/Dashboard'

const routes = {
  path: 'dashboardManager',
  name: 'dashboardManager',
  component: DashboardFrame,
  children:[
    {
      path: 'dashboard/:id',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        title: route => `${route.params.id}`,
        key: 'path',
        closable: false
      }
    }
  ]
}

const dashboardPath = [routes]

export default dashboardPath
