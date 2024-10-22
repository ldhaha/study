import './css/index.css'
import './css/index.less'
import image from './img/image.png'
import { createApp } from 'vue'
import App from './vue_demo/App.vue'
const name = 'WEBPACK'

function add(a, b) {
  return a + b
}
createApp(App).mount('#app')
console.log('aasdad')
console.log(name)
add(1, 2)
console.log(image)
