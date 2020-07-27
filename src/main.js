import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import  'bootstrap/dist/css/bootstrap.min.css'
import 'jquery'
import './assets/css/all.min.css'
import Vodal from 'vodal';
import "vodal/common.css";
import "vodal/rotate.css";
 
Vue.component(Vodal.name, Vodal);


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
