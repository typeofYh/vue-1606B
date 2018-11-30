import Vue from "vue";
import VueRouter from "vue-router";
import remmend from "@/components/remmend";
import person from "@/components/person";
import rank from "@/components/rank";
import search from "@/components/search";
import remmendDetail from "@/components/remmendDetail";
import mylike from "@/components/mylike";
Vue.use(VueRouter);
export default new VueRouter({
    routes: [{
        path: "/",
        redirect: "/remmend"
    }, {
        path: "/remmend",
        component: remmend,
        children: [{
            path: ":remmendid",
            name: "remmendDetail",
            props: true,
            component: remmendDetail
        }]
    }, {
        path: "/person",
        component: person
    }, {
        path: "/rank",
        component: rank
    }, {
        path: "/search",
        component: search
    }, {
        path: '/like',
        component: mylike
    }]
});