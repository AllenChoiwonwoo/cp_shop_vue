import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import HeaderCompo from './components/headerCompo.vue';
// import axios from 'axios'
// import footer from '../components/footer.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    // components: {
    //   Home,
    // }
    components: {
      // header: HeaderCompo,
      default: Home,
    }

    // component: Home
    //  component: () => import( /* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/SignUp.vue')
  },
  //*  index.js
  {
    path: '/productDetail/:prodId',
    name: 'productDetail',
    component: () => import('../views/ProductDetail.vue'),
    props: true,
  },
  {
    path: '/basket',
    name: 'basket',
    component: () => import('../views/BasketVue.vue')
  },
  {
    path: '/maintest',
    name: 'maintest',
    component: () => import( /* webpackChunkName: "about" */ '../views/maintest.vue')
  },
  
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  // },
  // {
  //   path: '/read',
  //   name: 'Read',
  //   component: () => import('../components/readVue.vue')
  // },
  // {
  //   path: '/user',
  //   name: 'User',
  //   component: () => import('../views/user.vue')
  // }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
// const app = new Vue({
//   router
// }).$mount('#app')