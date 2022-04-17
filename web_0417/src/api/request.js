// 对于axios进行二次封装
import axios from 'axios'
import nprogress from 'nprogress'
// nprogress进度条样式
import 'nprogress/nprogress.css'

const requests = axios.create({
  // 配置对象

  // 基础路径
  baseURL: '/api',

  // 请求超时
  timeout: 5000
})

// 请求拦截器
requests.interceptors.request.use(config => {
  // 加载进度条显示
  nprogress.start()
  return config
})

// 响应拦截器
requests.interceptors.response.use(
  res => {
    nprogress.done()
    return res.data
  },
  error => {
    nprogress.done()
    // 服务器请求失败的回调
    return Promise.reject(new Error('failed'))
  }
)

export default requests
