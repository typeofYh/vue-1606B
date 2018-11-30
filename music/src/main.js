import Vue from "vue";
import App from "./App";
import router from "@/router/";
import getdata from "@/mock/";
import lazyload from "vue-lazyload";
Vue.use(lazyload, {
    loading: "../../static/images/loading.gif"
})
new Vue({
    el: "#app",
    router: router,
    render: h => h(App)
})