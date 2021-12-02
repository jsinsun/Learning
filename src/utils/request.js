import axios from 'axios'

//https://www.jianshu.com/p/4a872643f5ea 封装axios

//请求拦截
axios.interceptors.request.use(config => {
  return config
}, err => {
 return Promise.reject(err)
})

//response拦截器
axios.interceptors.response.use(response => {
  return response
}, err => {
  return Promise.reject(error)
})

export default axios
