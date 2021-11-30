export default {
  //全局配置
  // 是否开启登录拦截
  loginInterception: true,
  // 不经过token校验的路由
  routesWhiteList: ['/auth/sign-in', '/auth/register', '/401', '/404'],
}
