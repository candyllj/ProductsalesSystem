import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import admin from '../views/Admin.vue'
import layOut from '../views/layout/home.vue';
import login from '../views/login.vue'
import Clasify from '../views/Clasify.vue'

const routes=[
  { path: "/", redirect: "/login",component:login },
  { path: "/login", name: "login",component:login },
  {
    path:"/home",
    name:"home",
    component:layOut,
    children:[
      {
        path: 'index',
        component: Home
      },
      {
        path: 'admin',
        component: admin
      },
      {
        path:'Clasify',
        component:Clasify
      }
    ]
  }
  
]

export default createRouter({
  // history: routerHistory,
  history: createWebHashHistory(),
  routes:routes
})



  
