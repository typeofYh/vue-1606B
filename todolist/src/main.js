import Vue from "vue";
import App from "./app.vue";

let vm = new Vue(); //监听
Vue.prototype.bus = vm;

new Vue({
    el: "#app",
    render: h => h(App)
});

//createElement  App funciotn