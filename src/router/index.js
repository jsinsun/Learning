import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

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
    path: 'work/process/leave/form/:Leave',
    name: 'process',
    component: () => import(/* webpackChunkName: "about" */ '../views/work/process.vue'),
  },
  {
    path: 'work/process/leave/handle/:Leave',
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
    name: 'model',
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
  }

]

const router = new VueRouter({
  routes
})

// let oneRun = true // 通过oneRun变量控制 避免陷入死循环
// router.beforeEach((to, from, next) => {
//   if (oneRun) {
//     oneRun = false // 必须在creatNewRouter() 执行
//     // createNewRouter();
//     console.log(to)
//     next({ ...to, replace: true })// 必不可少的，确保你的动态路由创建成功再去执行其它代码
//   }
// })

export default router
