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

import ProblemFrame from '../components/frames/ProblemFrame.vue'
import SolvedProblem from '../components/SolvedProblem.vue'
import UnsolvedProblem from '../components/UnsolvedProblem.vue'
import i18n from '../lang/lang.js'

import DashboardPath from './DashboardPath.js'

import firebase from 'firebase/app'
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
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name:'login',
      component: Login
    },
    {
      path: '/register',
      name:'register',
      component: Register
    },
   
    {
      path: '/',
      meta:{
        requiresAuth: true
      },
      
      component: Monitor,
      children:[
       
        ...DashboardPath,
        {
          path: 'gatewayCommand',
          component: GatewayFrame,
          children:[
            {
              path: '',
              component: GatewayCommand,
              meta:{title: i18n.messages[i18n.locale]['Gateway_Command']}
            }
          ]
        },
        {
          path: 'deviceStatus',
          component: DeviceStatus,
            
        },
       
        {
          path: 'problem',
          component: ProblemFrame,

          children: [
            {
              path: 'solved',
              component:SolvedProblem,
              meta:{
                title: 'solvedProblem'
              }           
            },
            {
              path: 'unsolved',
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
