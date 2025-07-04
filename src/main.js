// import './assets/main.css'
import '@/assets/project.css'   

import { createApp } from 'vue'
import router from './router/router.js'
import App from './App.vue'

createApp(App)
    .use(router)
    .mount('#app')
