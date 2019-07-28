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

Vue.use(VeeValidate);
Vue.use(VueRouter);
Vue.use(BootstrapVue);

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
}).$mount('#app')
