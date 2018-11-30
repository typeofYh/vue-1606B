import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

let vm = new Vue();
Vue.prototype.bus = vm;


/* eslint-disable no-new */
new Vue({
    el: '#app',
    render: h => h(App)
})