import {createApp} from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
import './assets/main.css'
import './assets/styles/index.scss'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


app.use(router)
    .use(ElementPlus)
    .mount('#app')


