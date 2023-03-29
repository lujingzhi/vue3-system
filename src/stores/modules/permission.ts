import { defineStore } from "pinia";
import { getRouters } from '@/api/base/index'
import Layout from '@/layout/index.vue'

interface IUserPermission {
  routes: []
}

export const usePermissionStore = defineStore('', {
  state: (): IUserPermission => ({
    routes: []
  }),
  actions: {
    async GenerateRoutes() {
      const { data } = await getRouters({ appId: '1448820276972797953' })

      return new Promise(resolve => {
        const accessedRoutes = filterAsyncRouter(data)
        accessedRoutes.push({ path: '*', redirect: '/404', hidden: true })
        this.routes = accessedRoutes
        resolve(accessedRoutes)
      })
    }
  }
})

function filterAsyncRouter(asyncRouterMap: any) {
  return asyncRouterMap.filter((route: any) => {
    if (route.component) {
      // Layout组件特殊处理
      if (route.component === 'Layout') {
        route.component = Layout
      } else {
        route.component = loadView(route.component)
      }

      if (route.name === 'Index') {
        route.meta.affix = true
      }
    }
    if (Array.isArray(route.children) && route.children.length) {
      route.children = filterAsyncRouter(route.children)
    }
    return true
  })
}

function loadView(view: string) {
  // return (resolve: (...modules: any[]) => void) => require([`@/views/${view}`])
}