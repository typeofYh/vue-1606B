import Vue from 'vue'
import Router from 'vue-router'
import mylist from '@/components/mylist'
import mydetail from "@/components/mydetail"
import mybookshelf from '@/components/mybookshelf'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        redirect: '/list'
    }, {
        path: '/list',
        component: mylist
    }, {
        path: '/detail',
        component: mydetail
    }, {
        path: '/bookshelf',
        component: mybookshelf
    }]
})