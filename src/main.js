import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueCookies from 'vue-cookies'
// import axios from 'axios'
import {BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueCookies);
// Vue.use(axios);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.$cookies.config('1d');
Vue.config.productionTip = false;

new Vue({
  data() {
    return {
    }
  },
  created() {
    console.log("main.js 에서 출력한 로그");
  },
  router,
  render: h => h(App)
}).$mount('#app')
