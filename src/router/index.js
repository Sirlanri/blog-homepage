import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '',
    component: Home,
    children:[
      {
        //默认的子路由
        path:'',
        name:'',
        component:()=>import('../views/FuncBar.vue'),
        children:[
          {
            path:'',
            name:'homepage',
            components:{
              default:()=>import('../components/Homepage.vue'),
            },
          },
          {
            path:'/sentences',
            name:'sentences',
            component:()=>import('../components/Sentences.vue')
          },
          {
            path:'/dev',
            name:'dev',
            component:()=>import('../components/Development.vue')
          },
          {
            path:'/friends',
            name:'friends',
            component:()=>import('../views/Friends.vue')
          },
          {
            path:'/about',
            name:'about',
            component:()=>import('../components/About.vue')
          },
        ]
      },
    ]
  },

  
  
]

const router = new VueRouter({
  routes
})

export default router
