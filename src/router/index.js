import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'
import { GetMenus } from '../api/menus';
import { getData } from '../utils/index'

Vue.use(VueRouter)


//https://www.jianshu.com/p/4f2566b67989
//https://segmentfault.com/a/1190000009506097

const newroutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/',
    component: Layout,
    redirect: '/notice',
    name: 'home',
    hidden: true,
    children: [
      {
        path: '/notice',
        name: 'notice',
        component: () => import('../views/desk/notice.vue')
      },
      {
        path: '/exercises',
        name: 'exercises',
        component: () => import('../views/exercises/exercises.vue')
      },
      //   {
      //     path: '/work/start',
      //     name: 'start',
      //     component: () => import(/* webpackChunkName: "about" */ '../views/work/start.vue'),
      //     meta: {
      //       keepAlive: true //需要被缓存
      //     }
      //   },
      //   {
      //     path: '/work/process/leave/form/:Leave',
      //     name: 'process',
      //     component: () => import(/* webpackChunkName: "about" */ '../views/work/process.vue'),
      //     meta: {
      //       keepAlive: true //需要被缓存
      //     }
      //   }
    ]
  }
]


const router = new VueRouter({
  routes: newroutes
})

router.beforeEach((to, from, next) => {

  // GetMenus().then(res => {
  //   //console.log(res.data.data);
  //   //放入store中

  //   //定义routes

  //   let menus = getData(res.data.data);
  //   menus = menus.filter(res => res.component !== undefined);
  //   //最好是后端排序完成传给前端
  //   //let asyncRoutes = [];

  //   // menus.forEach(item => {
  //   //   router.addRoute('home', {
  //   //     path: item.path,
  //   //     name: item.name,
  //   //     component: () => import('../views/desk/' + item.component + '.vue')
  //   //   })
  //   // })
  //   console.log(menus);


  // })
  next();
})

export default router
