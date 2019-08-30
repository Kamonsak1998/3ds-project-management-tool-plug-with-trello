import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import router from './router';
import VeeValidate from 'vee-validate';
import { store } from './store';
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueApexCharts from 'vue-apexcharts'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueCarousel from 'vue-carousel';

Vue.use(VueCarousel);
Vue.use(BootstrapVue)
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)
Vue.use(VueAxios, axios)
Vue.use(VeeValidate);
Vue.use(VueRouter);


const token = localStorage.getItem('token')
const idBoard = localStorage.getItem('idBoard')
const startDate = localStorage.getItem('startDate')
const Sprint = localStorage.getItem('Sprint')
const userName = localStorage.getItem('userName')
const idUser = localStorage.getItem('idUser')

if (token && token != "") {
  store.commit('addToken', token)
}
if (idBoard && idBoard != "") {
  store.commit('addBoard', idBoard)
} 
if (startDate && startDate != "") {
  store.commit('addStartDate', startDate)
}
if (Sprint && Sprint != "") {
  store.commit('addSprint', Sprint)
}
if (userName && userName != "") {
  store.commit('addUsername', userName)
}
if (idUser && idUser != "") {
  store.commit('addIduser', idUser)
}

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
}).$mount('#app')
