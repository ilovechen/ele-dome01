import Vue from 'vue'
import VueRouter from 'vue-router'
// import Index from '../views/Index.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import(/* webpackChunkName: "about" */ '../views/Index.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//路由守卫
router.beforeEach((to,from,next)=>{
  const isLogin = localStorage.ele_login ? true : false;
  if (to.path == '/login') {
    next();
  } else {
    //是否在登录状态下
    isLogin ? next() : next('/login')
  }
})

export default router
