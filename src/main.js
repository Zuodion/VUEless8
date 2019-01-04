import Vue from 'vue'
import App from './App.vue'

import axios from 'axios';
Vue.prototype.$http = axios;
axios.defaults.baseURL = "https://vuejs-http-46039.firebaseio.com/data.json"

Vue.config.productionTip = false

new Vue({
    axios,
    render: h => h(App),
}).$mount('#app')