import DashboardFrame from '../components/frames/DashboardFrame.vue'
import DashboardTable from '../components/gatewayRoom/DashboardTable'
import Dashboard from '../components/gatewayRoom/Dashboard'

const routes = {
  path: 'dashboardManager',
  name: 'dashboardManager',
  component: DashboardFrame,
  children:[
    {
      path: 'dashboard-table',
      component: DashboardTable,
      meta: {
        title: 'Table',
        closable: false
      }
    },
    {
      path: 'dashboard/:id',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        title: route => `${route.params.id}`,
        key: 'path',
        closable: true,
      }
    }
  ]
}

const dashboardPath = [routes]

export default dashboardPath
