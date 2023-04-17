// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Chapter1 from '@/views/Chapter1.vue'

// const routes = [
//   {
//     path: "/home",
//     name: "Home",
//     component: Home,
//   },
//   {
//     path: "/",
//     name: "Login",
//     component: Login,
//   },
//   {
//     path: "/register",
//     name: "Register",
//     component: Register,
//   },
//   {
//     path: "/add_user",
//     name: "Add_User",
//     component: Add_User,
//   },
//   {
//     path: "/add_delivery",
//     name: "Add_delivery",
//     component: Add_delivery,
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//   },
// ];

// const router = new VueRouter({
//   routes,
// });
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue')
    // component: () => import('@/layouts/default/Default.vue'),
  },
  {
    path: '/chapter1',
    name: 'Chapter1',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Chapter1.vue'),
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    
},
{
  path: '/chapter5a',
  name: 'Chapter5a',
  component: () => import(/* webpackChunkName: "home" */ '@/views/Chapter5bad.vue'),
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  
},
{
  path: '/chapter5b',
  name: 'Chapter5b',
  component: () => import(/* webpackChunkName: "home" */ '@/views/Chapter5normal.vue'),
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  
},
{
  path: '/chapter5c',
  name: 'Chapter5c',
  component: () => import(/* webpackChunkName: "home" */ '@/views/Chapter5happy.vue'),
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  
},
{
  path: '/chapter2',
  name: 'Chapter2',
  component: () => import(/* webpackChunkName: "home" */ '@/views/Chapter2.vue'),
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  
},
{
  path: '/chapter3',
  name: 'Chapter3',
  component: () => import(/* webpackChunkName: "home" */ '@/views/Chapter3.vue'),
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  
},
{
  path: '/chapter4',
  name: 'Chapter4',
  component: () => import(/* webpackChunkName: "home" */ '@/views/Chapter4.vue'),
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  
},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
