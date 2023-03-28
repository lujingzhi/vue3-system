import { createApp } from 'vue'

import App from './App.vue'

import AntDesign from 'ant-design-vue'

import { setupStore } from '@/stores'
import { setupReouter } from '@/router'

import './assets/style/index.scss'

const app = createApp(App)

// 设置store
setupStore(app)

// 设置路由
setupReouter(app)

app.use(AntDesign)
app.mount('#app')
