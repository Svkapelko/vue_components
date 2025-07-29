
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import pinia from './stores/store'
import router from './router/router.js'
import MasonryWall from '@yeger/vue-masonry-wall'
import '@/assets/project.css' 


createApp(App) //Метод createApp создает экземпляр Vue-приложения, в качестве аргумента передаётся корневой компонент приложения (App.vue).
    .use(pinia) // Подключаем Pinia к приложению
    .use(router)
    .use(MasonryWall)
    .mount('#app')  // Метод mount монтирует наше Vue-приложение в указанный элемент DOM (в данном случае в элемент с ID #app).
