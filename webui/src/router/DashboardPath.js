import DashboardFrame from '../components/frames/DashboardFrame.vue'
import Dashboard from '../components/gatewayRoom/Dashboard'

const routes = {
  path: 'dashboardManager',
  component: DashboardFrame,
  children:[
    {
      path: 'dashboard/:id',
      component: Dashboard,
      meta: {
        title: route => `${route.params.id}`,
        key: 'path'
      }
    }
  ]
}

const dashboardPath = [routes]

export default dashboardPath
