import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
   {
     path:"/",
     redirect:'/login'
   },
   {
     path:'/login',
     component:()=>import('../components/Login.vue')
   },
   { 
      path:'/home',
      redirect:'/welcome',
      component:()=>import('../components/Home.vue'),
      children:[
        {
          path:'/welcome',
          component:()=>import('../components/Welcome')
        },
        {
          path:'/users',
          component:()=>import('../components/user/Users.vue')
        },
        {
          path:'/rights',
          component:()=>import('../components/power/Rights.vue')
        },
        {
          path:'/roles',
          component:()=>import('../components/power/Roles.vue')
        }, 
        {
          path:'/categories',
          component:()=>import('../components/goods/Cate.vue')
        },
        {
          path:'/params',
          component:()=>import('../components/goods/Params.vue')
        },
      ]
   },
   
]

const router = new VueRouter({
  routes
})
// 挂载路由导航守卫
router.beforeEach((to,from,next)=>{
  //to将要访问的路径
  // from 代表从哪个路径跳转而来
  // next 是一个函数，表示放行
  // next()放行     next('/login') 强制跳转
  if (to.path === '/login'){
    next()
    return
  }
  //获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr){
    next('/login')
    return
  }
  next()
})
export default router
