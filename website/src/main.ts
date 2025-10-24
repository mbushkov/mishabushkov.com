import './assets/main.css'

// Import Pico's minified CSS
import '@picocss/pico/css/pico.min.css'
import '@picocss/pico/css/pico.colors.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
