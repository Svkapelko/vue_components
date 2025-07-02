
import { usePaymentStore } from '@stores/payment';
import { createApp } from 'vue' 
import { createPinia } from 'pinia'
import App from './App.vue'

//const pinia = createPinia() // createPinia из библиотеки Pinia создаёт экземпляр хранилища состояний. Pinia — это официальная библиотека Vue для управления состоянием приложений, аналог Redux или Vuex.
const app = createApp(App) // Метод createApp из библиотеки Vue 3 создает экземпляр Vue-приложения. В качестве аргумента передаётся корневой компонент приложения (App.vue).

//app.use(pinia) // Метод use позволяет подключать плагины к приложению Vue. В нашем случае мы подключаем созданный экземпляр Pinia к нашему приложению.

app.use(createPinia())

app.mount('#app') // Метод mount монтирует наше Vue-приложение в указанный элемент DOM (в данном случае в элемент с ID #app).

const paymentStore = usePaymentStore();