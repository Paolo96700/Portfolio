import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AOS from 'aos';
import "aos/dist/aos.css"

import "./style.css";
import "flowbite";

const app = createApp(App)

app.use(router, AOS.init())

app.mount('#app')
