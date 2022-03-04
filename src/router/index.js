import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/views/Home/HomePage.vue'
import store from '@/store'
Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/login'
  },
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home',
    name: 'home',
    component: HomePage,
    meta: { title: 'Compass - Home' }


  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/Login/LoginPage.vue'),
    meta: { title: 'Compass - Login Page' }

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
const DEFAULT_TITLE = 'Some Default Title';
router.afterEach((to) => {
    // Use next tick to handle router history correctly
    // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
    Vue.nextTick(() => {
        document.title = to.meta.title || DEFAULT_TITLE;
    });
});

export default router
