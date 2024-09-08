import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axiosInstance from './plugins/axios';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.config.globalProperties.$axios = axiosInstance;

app.use(createPinia())
app.use(router)

app.mount('#app')
