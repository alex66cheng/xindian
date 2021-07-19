
import DashboardFrame from '../components/frames/DashboardFrame.vue'
import Dashboard from '../components/Dashboard.vue'
import i18n from '../lang/lang.js'
const routes = {
  path: 'Dashboard',  
  
  component: DashboardFrame,
  children:[
    {
      path:'',
      component: Dashboard,
      meta:{
        title: i18n.messages[i18n.locale]['Dashboard_Title']//只要改 Dashboard_title
      }
    },
    /*
    {
      path:'自己命名',
      component: 你的component,//記得import
      meta:{
        title: i18n.messages[i18n.locale][lang裡的i18n裡的jp的key, 沒有的話自己加]
      }
    },
    */  
  ]   
}

const dashboardPath = [routes]




export default dashboardPath