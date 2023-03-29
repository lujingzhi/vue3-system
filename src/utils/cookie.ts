import Cookie from 'js-cookie'

// 设置token
const tokenKey = 'access_token'
export const setToken = (token: string) => Cookie.set(tokenKey, token)
export const getToken = () => Cookie.get(tokenKey)
export const removeToken = () => Cookie.remove(tokenKey)

// 登录信息
export const setLoginInfo = (userInfo: { userName: string, password: string, rememberMe: string }) => {
  for (const key in userInfo) {
    Cookie.set(key, userInfo[key], { expires: 30 })
  }
}
export const removeLoginInfo = (userInfo: { userName: string, password: string, rememberMe: string }) => {
  for (const key in userInfo) {
    Cookie.removeToken(key)
  }
}