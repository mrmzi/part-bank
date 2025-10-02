import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

const pinia = createPinia()
app.use(pinia)   // ⬅️ این خیلی مهمه
app.use(router)

app.mount("#app")
