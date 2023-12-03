import { createApp } from 'vue'
import App from './App.vue'
import 'ant-design-vue/dist/reset.css'
import Antd from 'ant-design-vue';
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '',
        component: App,
        name: 'home',
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})


const app = createApp(App)
app.use(router)
app.use(Antd)
app.mount('#app');