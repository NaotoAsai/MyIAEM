import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Entrance from './components/Entrance.vue'
import Calendar from './components/Calendar.vue'
import ClassDisp from './components/ClassDisp.vue'
import store from './store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { requiresAuth: true }
    },
    {
      path: '/entrance',
      name: 'entrance',
      component: Entrance
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: Calendar,
      meta: { requiresAuth: true }
    },
    {
      path: '/classdisp',
      name: 'classdisp',
      component: ClassDisp,
      meta: { requiresAuth: true }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)){
    if (store.getters.accessToken === null) {
      next({ name: 'entrance' })
    } else {
      next()
    }
  } else {
    if (store.getters.accessToken !== null){
      next({ name: 'home' })
    } else {
      next()
    }
  }
})

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     Auth.currentAuthenticatedUser() // 認証済みのユーザが存在するかどうかをチェックする関数
//       .then(() => {
//         next()
//       })
//       .catch(error => {
//         console.error(error)
//         next({
//           path: 'entrance',
//           query: {redirect: to.fullPath}
//         })
//       })
//   }
//   next()
// })

export default router