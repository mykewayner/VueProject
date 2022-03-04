import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/views/Home/HomePage.vue'
import store from '@/store'
Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/notfound'
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
    component: () => import(/* webpackChunkName: "about" */ '@/views/Login/LoginPage.vue'),
    meta: { title: 'Compass - Login Page' }

  },
  {
    path: '/unauthorized',
    name: 'unauthorized',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Unauthorized/index.vue'),
    meta: { title: '401 - unauthorized' }

  },
  {
    path: '/notfound',
    name: 'notfound',
    component: () => import(/* webpackChunkName: "about" */ '@/views/notFound/index.vue'),
    meta: { title: '404 - Page not found' }

  }
  

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next)=>{
  if ( to.name === 'home' && !store.state.logged ){next({name: 'unauthorized',})}
  else next()
})
const DEFAULT_TITLE = 'Some Default Title';
router.afterEach((to) => {
    Vue.nextTick(() => {
        document.title = to.meta.title || DEFAULT_TITLE;
    });
});

export default router
