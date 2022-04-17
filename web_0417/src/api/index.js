// API接口管理
import requests from './request'

export const reqTest = () =>
  requests({
    url: '/test',
    method: 'get'
  })
