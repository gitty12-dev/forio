import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import scrollto from 'vue-scrollto'
// BootStrap Add
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const app = createApp(App)
app.use(scrollto, {
  duration: 10, // スクロールアニメーションの長さ（ミリ秒）
  easing: "ease-in", // 使用されるイージング
  cancelable: false // ユーザーがスクロールをキャンセルできるかどうか)
});
app.mount('#app');