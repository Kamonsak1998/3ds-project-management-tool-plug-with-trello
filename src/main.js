import Vue from 'vue';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import VueRouter from 'vue-router';
import router from './router';
import 'vuesax/dist/vuesax.css';
import VeeValidate from 'vee-validate';
import { store } from './store';
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)
Vue.use(VueAxios, axios)
Vue.use(VeeValidate);
Vue.use(VueRouter);
Vue.use(BootstrapVue);

const token = localStorage.getItem('token')
if( token && token != ""){
  store.commit('setToken', token)
}

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
}).$mount('#app')
