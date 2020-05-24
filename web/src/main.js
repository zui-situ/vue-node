import Vue from 'vue'
import App from './App.vue'
import './assets/iconfont/iconfont.css';
import './assets/scss/style.scss';
import router from './router'

import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
import Card from './components/Card.vue';
import ListCard from './components/ListCard.vue';

Vue.component('mCard',Card);
Vue.component('ListCard',ListCard);

import axios from 'axios';
Vue.prototype.$http = axios.create({
  baseURL:'http://localhost:3000/web/api'
})

Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
