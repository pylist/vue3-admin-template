import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'
import 'element-plus/packages/theme-chalk/src/base.scss'

import '@/styles/index.scss'  // 全局css

const app = createApp(App)
app.use(router)
app.use(store)

app.mount('#app')
