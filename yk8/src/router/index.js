import Vue from 'vue'
import Router from 'vue-router'
import all from '@/components/all';
import create from '@/components/create';
import share from '@/components/share';
import end from '@/components/end';
import addObject from '@/components/addObject';
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        redirect: '/all'
    }, {
        path: '/all',
        component: all
    }, {
        path: '/create',
        component: create
    }, {
        path: '/share',
        component: share
    }, {
        path: '/end',
        component: end
    }, {
        path: '/addObject',
        component: addObject
    }]
})