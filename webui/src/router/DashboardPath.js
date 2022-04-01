const routes = {
  path: 'dashboard-manager',
  name: 'dashboard-manager',
  component: () => import('../components/frames/DashboardFrame.vue'),
  children:[
    {
      path: 'dashboard-table',
      name: 'dashboard-table',
      component: () => import('../components/gatewayRoom/DashboardTable'),
      meta: {
        title: 'Table',
        closable: false
      }
    },
    {
      path: 'dashboard/:id',
      name: 'dashboard',
      component: () => import('../components/gatewayRoom/Dashboard'),
      meta: {
        title: route => `${route.params.id}`,
        key: 'path',
        closable: true,
      }
    },
    {
      path: 'dashboard/:id/:key/history',
      name: 'sensor-history',
      component: () => import('../components/gatewayRoom/HistoryChart.vue'),
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
