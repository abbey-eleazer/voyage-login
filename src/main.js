import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia';
// import "firebase/fireapp"
import { auth, db, fireapp } from '@/firebase/firebase';


const app = createApp(App)
const pinia = createPinia();
const firebase = { auth, db, fireapp }
app.use(router)
app.use(pinia)
app.use(firebase)

app.mount('#app')
