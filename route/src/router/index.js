import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import list from '@/components/list'
Vue.use(Router)

export default new Router({
    routes: [{ //重定向 
        path: '/', //访问/切换到/index
        redirect: '/index',
    }, {
        path: '/index', //url /index
        component: index, //index.vue
        children: [{ //url  /index/....
            path: ':list',
            props: true, //:list  当做自定义属性传递
            component: list //list.vue
        }]
    }]
})