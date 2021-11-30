
//判断当前角色是否有访问权限
const hasPermission = (roles, route) => {
  if (route.meta && route.meta.roles) {
    //some() 方法用于检测数组中的元素是否满足指定条件（函数提供）。
    //some() 不会对空数组进行检测  some() 不会改变原始数组
    //includes() 方法用来判断一个数组是否包含一个指定的值，如果是返回 true，否则false。
    // 与 some() 方法类似的还有 every() 方法，
    // 它们的区别是：只要数组中有一个元素满足条件，some() 就返回 true；
    // 只有当数组中的所有元素都满足条件时，every() 才返回 true。
    return roles.some(role => role.meta.roles.includes(role))
  }
  else {
    return true;
  }
}

export const filterAsyncRoutes = (routes, roles, res = []) => {
  routes.forEach(route => {
    const tmp = { ...route };
    if (hasPermission(roles, temp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp);
    }
  });
  return res;
}
