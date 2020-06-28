import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Entrance from './components/Entrance.vue'
import Calendar from './components/Calendar.vue'
import ClassDisp from './components/ClassDisp.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/entrance',
      name: 'entrance',
      component: Entrance
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: Calendar
    },
    {
      path: '/classdisp',
      name: 'classdisp',
      component: ClassDisp
    }
  ]
})
