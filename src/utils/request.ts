/* eslint-disable no-unused-expressions */
import axios from 'axios'
import { Modal } from 'ant-design-vue'
import { ExclamationCircleOutlined } from "@ant-design/icons-vue";
import { useUserStore } from '@/stores/modules/user'
import { ErrorMsg } from './message'
import { createVNode } from 'vue'

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  // baseURL: 'http://192.168.50.36:8080',
  timeout: 1000 * 60
})

const { token, ResetToken } = useUserStore()

service.interceptors.request.use(
  (config: any) => {
    // 是否需要设置 token
    const isToken = (config.headers || {}).isToken === false
    if (token && !isToken) {
      config.headers['Authorization'] = `Bearer ${token}`
    }

    // config.headers.version = '2.0.19'
    return config
  },
  (error: any) => {
    Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response: { data: any }) => {
    const res = response.data
    if ([200, 501].includes(res.code)) {
      return response.data
    } else {
      if (res.code !== 509) {
        ErrorMsg(res.msg || '系统异常，请稍后重试')
      }

      if (res.code === 600) {
        Modal.confirm({
          title: () => '提示',
          icon: () => createVNode(ExclamationCircleOutlined),
          content: () => '登录状态已过期,请重新登录',
          onOk() {
            ResetToken()
            location.reload()
          },
          onCancel() {
            console.log('Cancel');
          },
          class: 'test',
        });
      }

      return Promise.reject(res || 'Error')
    }
  },
  (error: { msg: any }) => {
    ErrorMsg(error.msg || '系统异常，请稍后重试')
    return Promise.reject(error)
  }
)

export default service
