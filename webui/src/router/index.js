import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
//import LoginComponent from './components/Login.vue'
//import ForgetPasswordComponent from './components/ForgetPassword.vue'
//import ChangePasswordComponent from './components/ChangePassword.vue'

import Monitor from '../views/Monitor.vue'



import DeviceStatus from '../components/DeviceStatus.vue'

import GatewayFrame from '../components/frames/GatewayFrame.vue'
import GatewayCommand from '../components/GatewayCommand.vue'

import DeviceManager from '../components/DeviceManager.vue'
import GatewayConfig from '../components/GatewayConfig.vue'

import ScheduleFrame from '../components/frames/ScheduleFrame.vue'
import Schedule from '../views/Schedule.vue'

import HistoryFrame from '../components/frames/HistoryFrame.vue'
import History from '../components/History.vue'

import ProblemFrame from '../components/frames/ProblemFrame.vue'
import SolvedProblem from '../components/SolvedProblem.vue'
import UnsolvedProblem from '../components/UnsolvedProblem.vue'

import langComponent from '../components/langComponent.vue'

import i18n from '../lang/lang.js'

import DashboardPath from './DashboardPath.js'

//import firebase from 'firebase/app' 防止重整logout
import 'firebase/auth'

Vue.use(Router)



const router = new Router({
  mode: 'history',
  //mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    /*{
      path: '/',
      name: '',
      component: LoginLayout,
      children:[
          {path:'/' , name:'login' ,component:LoginComponent},
          {path:'/forgetpassword' , name:'forgetpassword' ,component:ForgetPasswordComponent},
          {path:'/changepassword' , name:'changepassword' ,component:ChangePasswordComponent}
      ]
    },*/
    {
      path: '/:lang',
      component: langComponent,
      beforeEnter(to, from, next){
        const lang = to.params.lang

        if(!['jp', 'cn'].includes(lang)){
          return next(i18n.locale)
        }

        if(i18n.locale != lang){
          i18n.locale = lang
        }
        
        return next()
      },
      children:[
        {
          path: '',
          name: 'home',
          component: Home,
        },
        {
          path: 'login',
          name:'login',
          component: Login
        },
        {
          path: 'register',
          name:'register',
          component: Register
        },
      
        {
          path: 'monitor',
          meta:{
            requiresAuth: true
          },
          
          component: Monitor,
          children:[
          
            ...DashboardPath,
            {
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
            },
            {
              path: 'schedule',
              component: ScheduleFrame,
              children: [
                {
                  path: '',
                  name: 'schedule',
                  component: Schedule,
                  meta: {title: route => i18n.messages[route.params.lang]['schedule']}
                }
              ]
            },
            {
              path: 'history',
              component: HistoryFrame,
              children: [
                {
                  path: '',
                  name: 'history',
                  component: History,
                  meta: {title: route => i18n.messages[route.params.lang]['History_Title']}
                
                }
              ]
            },
            {
              path: 'deviceStatus',
              name: 'deviceStatus',
              component: DeviceStatus,
                
            },
          
            {
              path: 'problem',
              name: 'problem',
              component: ProblemFrame,

              children: [
                {
                  path: 'solved',
                  name: 'solved',
                  component:SolvedProblem,
                  meta:{
                    title: 'solvedProblem'
                  }           
                },
                {
                  path: 'unsolved',
                  name: 'unsolved',
                  component: UnsolvedProblem,
                  meta:{
                    title: 'unsolvedProblem'
                  }
                }
              ]
            },
            {
              path: '',
              redirect: 'dashboard/gateway601'
            }
          ]
        }
      ]
    },
   
  ]
})

/*router.beforeEach((to, from, next)=>{
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const isAuthenticated = firebase.auth().currentUser
  if(requiresAuth && !isAuthenticated){
    next('/login')
  }else{
    next()
  }
})*/

export default router
