
let menus = [
  {
    name: '',
    title: '工作台',
    icon: 'el-icon-document',
    child: [
      {
        name: 'notice',
        title: '通知公告',
        path: '/notice',
        component: 'notice',
        icon: ''
      }
    ]
  }
]

export default {
  'get|api/getMenus': option => {
    return {
      code: 0,
      message: '',
      data: menus
    }
  }
}
