import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/style/main.css';


// Импортируем наши роутеры
import routers from './routes';

const app = createApp(App)

app.use(routers);

app.mount('#app')
