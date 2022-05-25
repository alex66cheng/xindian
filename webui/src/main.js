import fullscreen from 'vue-fullscreen'
import Vue from 'vue'
import locale from 'element-ui/lib/locale/lang/ja'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'
import i18n from './lang/lang'
import echarts from 'echarts'
// 画像拡大
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
import JQuery from 'jquery'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/font.css'
import axios from 'axios'

import fullCalendar from 'vue-fullcalendar'
//import 'fullcalendar/dist/fullcalendar.css'

import 'fullcalendar/dist/fullcalendar.min.css'
import 'moment'
import 'fullcalendar'
import 'fullcalendar/dist/locale/ja.js'

import VueSession from 'vue-session'

import VueAwesomeSwiper from 'vue-awesome-swiper'


import RouterTab from 'vue-router-tab'
import 'vue-router-tab/dist/lib/vue-router-tab.css'


import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/messaging'

import VueChartkick from 'vue-chartkick'
import 'chartkick/chart.js'

Vue.use(VueChartkick)


Vue.component('full-calendar', fullCalendar)
Vue.prototype.$echarts = echarts
Vue.prototype.$ = JQuery
Vue.prototype.$ajax = axios
Vue.config.productionTip = false
Vue.use(ElementUI, { locale })
Vue.use(fullscreen)
Vue.use(preview)

Vue.use(VueSession)

Vue.use(VueAwesomeSwiper)

Vue.use(RouterTab)

import 'swiper/dist/css/swiper.css'

var firebaseConfig = {
  apiKey: 'AIzaSyCvwHfqX0FHhsz9uqauU54SObeH8dyqk94',
  authDomain: 'xindian-f463a.firebaseapp.com',
  projectId: 'xindian-f463a',
  storageBucket: 'xindian-f463a.appspot.com',
  messagingSenderId: '227141088272',
  appId: '1:227141088272:web:91c3bed3aa609683068695'
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

let app
firebase.auth().onAuthStateChanged(user=>{
  console.log(user)
  if(!app){
    app = new Vue({
      router,
      store,
      i18n,
      components:{App},
      render: h => h(App),
      
    }).$mount('#app')
  }
})

// Initialize Firebase Cloud Messaging and get a reference to the service
const messaging = firebase.messaging();
// Add the public key generated from the console here.
// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
messaging.getToken({ vapidKey: 'BOrKMy0a7AnYTMBeUZjDjE3cIKgyhYWyByN_MQ6eFbOaOF7z3YTrtTvhgAcKJQqg2abLgpVEpVMo5tYog3OybqI' }).then((currentToken) => {
  if (currentToken) {
    // Send the token to your server and update the UI if necessary
    // ...
    console.log(currentToken)
    store.commit('setMessageToken', currentToken)
  } else {
    // Show permission request UI
    console.log('No registration token available. Request permission to generate one.');
    // ...
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  // ...
});

/*new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
*/
