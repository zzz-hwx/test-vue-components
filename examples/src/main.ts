import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

// 单独引入各个组件
// import DuyiButton from '@duyiui-plus/components/button'
// import DuyiCard from '@duyiui-plus/components/card'

// 引入所有的组件
import duyiui from '@duyiui-plus/components'

// 引入组件的样式代码
import '@duyiui-plus/theme-chalk/src/index.scss'

const app = createApp(App)

// 挂载组件
// app.use(DuyiButton)
// app.use(DuyiCard)
app.use(duyiui)

app.use(router)

app.mount('#app')
