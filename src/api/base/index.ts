import request from '@/utils/request'

export const login = (data: any) => {
  return request({
    url: '/auth/login',
    method: 'post',
    data
  })
}

export const getUserInfo = (params?: any) => {
  return request({
    url: '/system/user/getInfo',
    method: 'get',
    params
  })
}

export const getRouters = (params: any): any => {
  request({
    url: '/system/menu/getRouters',
    method: 'get',
    params
  })
}