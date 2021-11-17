import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Vuelidate from 'vuelidate'


// axios.defaults.baseURL = 'http:localhost:5000/';

// Vue.use(axios)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Vuelidate)
Vue.config.productionTip = false;
// Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount("#app");

export default axios.create({
  baseURL: "http://localhost:8081/api",
  headers: {
    "Content-type": "application/json",
    'Access-Control-Allow-Origin':'*'
  }
});
