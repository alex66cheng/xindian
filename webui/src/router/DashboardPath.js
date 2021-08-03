
import DashboardFrame from '../components/frames/DashboardFrame.vue'
//import Dashboard from '../components/Dashboard.vue'
//import i18n from '../lang/lang.js'
import Dashboard601 from '../components/gatewayRoom/Dashboard601'
import Dashboard602 from '../components/gatewayRoom/Dashboard602'
import Dashboard603 from '../components/gatewayRoom/Dashboard603'
const routes = {
  path: 'dashboard',  
  
  component: DashboardFrame,
  children:[
    /*{
      path:'',
      component: Dashboard,
      meta:{
        title: i18n.messages[i18n.locale]['Dashboard_Title']//只要改 Dashboard_title
        
      }
    },*/
    {
      path:'601',
      name:'601',
      component: Dashboard601,
      meta:{
        title: '601',
        closable: false
      }
    },
    {
      path:'602',
      name:'602',
      component: Dashboard602,
      meta:{
        title: '602',
        closable: false
      }
    },
    {
      path:'603',
      name:'603',
      component: Dashboard603,
      meta:{
        title: '603',
        closable: false
      }
    }
    
  ]   
}

const dashboardPath = [routes]

export default dashboardPath
