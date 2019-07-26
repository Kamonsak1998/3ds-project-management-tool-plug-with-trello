import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import router from './router'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
import Slider from '@jeremyhamm/vue-slider'


Vue.use(Slider)


import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);


Vue.use(Vuesax)
Vue.use(VueRouter)
Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App),
}).$mount('#app')
