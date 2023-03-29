import { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Layout from '../layout/index.vue'
const modules = import.meta.glob('@/views/*.vue') // 导入
  
export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      // component: (resolve: any) => require([`@/Layout/index.vue`], resolve)
      // component: modules[`@/views/HomeView.vue`]
      component: import.meta.glob('@/layout/index.vue')
    },
  ]
})

export function setupReouter(app: App<Element>) {
  app.use(router)
}