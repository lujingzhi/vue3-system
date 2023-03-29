import { defineStore } from "pinia";
import { setToken, removeToken, getToken } from '@/utils/cookie'
import { login, getUserInfo } from '@/api/base/index'

interface IUser {
  [x: string]: any
  token: string
  roles: Array<string>
  permissions: Array<string>
  userName: string
  avatar: string
  userId: string
}

export const useUserStore = defineStore('', {
  state: (): IUser => ({
    token: getToken() || '',
    roles: [],
    permissions: [],
    userName: '',
    avatar: '',
    userId: ''
  }),
  actions: {
    // 登录
    async Login(userInfo: { username: string; password: string; accessToken?: string }) {
      if (userInfo.accessToken) {
        setToken(userInfo.accessToken)
        this.token = userInfo.accessToken
      } else {
        userInfo.username = userInfo.username.trim()
        const { username, password } = userInfo
        const { data } = await login({ username, password })
        setToken(data.access_token)
        this.token = data.access_token
      }
    },
    // 获取用户信息
    async GetUserInfo() {
      return new Promise((resolve, reject) => {
        getUserInfo().then((data: any) => {
          const res = data.data
          const { roles, permissions } = res
          const { avatar, userId, userName } = res.user

          if (res.roles && res.roles.length > 0) {
            this.roles = roles
            this.permissions = permissions
          } else {
            this.roles = ['ROLE_DEFAULT']
          }

          this.userId = userId
          this.userName = userName
          this.avatar = avatar
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 退出登录
    LogOut() {
      return new Promise<void>(resolve => {
        removeToken()
        this.token = ''
        this.roles = []
        resolve()
      })
    },
    ResetToken() {
      removeToken()
      this.token = ''
      this.roles = []
    }
  }
})