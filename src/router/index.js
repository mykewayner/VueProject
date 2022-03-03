import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/views/Home/HomePage.vue'
import store from '@/store'
Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomePage,


  },
  {
    path: '/',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/Login/LoginPage.vue'),

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next)=>{
  if ( to.name === 'home' && !store.state.logged ){next({name: 'login',})}
  else next()
})

export default router
