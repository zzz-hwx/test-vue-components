import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 单独引入各个组件
import DuyiButton from '@duyiui-plus/components/button'

const app = createApp(App)

// 挂载组件
app.use(DuyiButton)

app.use(router)

app.mount('#app')
