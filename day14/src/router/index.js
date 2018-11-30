import Vue from "vue";
import VueRouter from "vue-router";
import home from "component/home.vue";
import news from "component/news.vue";
import vip from "component/vip.vue";
import list from "component/list.vue";
import aaa from "component/default.vue";
Vue.use(VueRouter);
export default new VueRouter({
    routes: [{
        path: '/home',
        name: 'index',
        component: home,
        children: [{
                path: 'child',
                component: {
                    template: "<p>home---child</p>"
                }
            }, {
                path: 'index',
                component: {
                    template: "<p>home---index</p>"
                }
            }] //子路由
    }, {
        path: '/news',
        name: 'news',
        component: news,
        children: [{
            path: 'list',
            components: {
                default: aaa,
                a: {
                    template: "<li>八维停电了没有下课铃声</li>"
                }
            }
        }]
    }, {
        path: '/vip/:vipname', //动态路由:路由名  $route.params.vipname
        name: 'vip',
        component: vip
    }, {
        path: '/list',
        name: 'list',
        component: list
    }]
})