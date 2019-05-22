import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Main from './views/Main.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/main',
      name: 'main',
      component: Main,
      children: [
        {
          path: 'user',
          name: 'user',
          component: () => import(/* webpackChunkName: "user" */ './views/User.vue')
        },
        {
          path: 'list',
          name: 'list',
          component: () => import(/* webpackChunkName: "list" */ './views/List.vue')
        }
      ]
    },
    {
      path: '/add',
      name: 'add',
      component: () => import(/* webpackChunkName: "add" */ './views/Add.vue')
    },
    {
      path: '/detail/:title',
      name: 'detail',
      component: () => import(/* webpackChunkName: "detail" */ './views/Detail.vue')
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
