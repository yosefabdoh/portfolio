import { createPinia } from 'pinia'
import { createApp } from 'vue'
import '@fontsource-variable/signika'
import '@fontsource-variable/noto-kufi-arabic'
import App from './App.vue'
import './assets/main.css'

createApp(App).use(createPinia()).mount('#app')
