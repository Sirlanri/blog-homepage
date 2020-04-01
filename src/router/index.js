import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[
      {
        //默认的子路由
        path:'',
        name:'funcbar',
        component:()=>import('../views/FuncBar.vue'),
        
        children:[
          {
            path:'',
            name:'homepage',
            component:()=>import('../components/Homepage.vue'),
          }
        ]
      },
      
      
    ]
  },
  
]

const router = new VueRouter({
  routes
})

export default router
