import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import axiosPlugin from './plugins/axios'

const app = createApp(App)

app.use(axiosPlugin, {
  baseUrl: 'https://api.andromia.science'
})

app.use(router)

app.mount('#app')
