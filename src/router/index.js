import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


//https://www.jianshu.com/p/4f2566b67989


const routes = [
  {
    path: '/',
    name: 'notice',
    component: () => import('../views/desk/notice.vue')
  },
  {
    path: '/work/start',
    name: 'start',
    component: () => import(/* webpackChunkName: "about" */ '../views/work/start.vue')
  },
  {
    path: '/work/process/leave/form/:Leave',
    name: 'process',
    component: () => import(/* webpackChunkName: "about" */ '../views/work/process.vue'),
  },
  {
    path: '/work/process/leave/handle/:Leave',
    name: 'audit',
    component: () => import(/* webpackChunkName: "about" */ '../views/work/audit.vue'),
  },
  {
    path: '/work/claim',
    name: 'claim',
    component: () => import(/* webpackChunkName: "about" */ '../views/work/claim.vue')
  },
  {
    path: '/work/todo',
    name: 'todo',
    component: () => import(/* webpackChunkName: "about" */ '../views/work/todo.vue')
  },
  {
    path: '/work/send',
    name: 'send',
    component: () => import(/* webpackChunkName: "about" */ '../views/work/send.vue')
  },
  {
    path: '/work/done',
    name: 'done',
    component: () => import(/* webpackChunkName: "about" */ '../views/work/done.vue')
  },
  {
    path: '/flow/model',
    name: 'model',
    component: () => import(/* webpackChunkName: "about" */ '../views/flow/model.vue')
  },
  {
    path: '/flow/deploy',
    name: 'deploy',
    component: () => import(/* webpackChunkName: "about" */ '../views/flow/deploy.vue')
  },
  {
    path: '/flow/manager',
    name: 'manager',
    component: () => import(/* webpackChunkName: "about" */ '../views/flow/manager.vue')
  },
  {
    path: '/flow/follow',
    name: 'follow',
    component: () => import(/* webpackChunkName: "about" */ '../views/flow/follow.vue')
  },
  {
    path:'/exercises/exercises',
    name:'exercises',
    component:()=>import('../views/exercises/exercises.vue')
  }


]

const router = new VueRouter({
  routes
})



export default router
