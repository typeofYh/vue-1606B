/*
 * @Author: yihang 
 * @Date: 2018-10-12 15:44:24 
 * @Last Modified by: yihang
 * @Last Modified time: 2018-10-12 16:48:26
 */

import Vue from 'vue';
import axios from "axios";
Vue.component('my-div', {
    template: '<div><p>{{n}}</p><button @click="add">{{title}}</button></div>',
    data() {
        return {
            n: 0,
            title: "按钮"
        }
    },
    methods: {
        add() {
            this.n++;
        }
    }
});
var vm = new Vue({
    el: "#app",
    data: {
        list: [],
        title: "1608B"
    },
    mounted() {
        axios.get('/data').then(data => {
            this.list = data.data.data;
        });
    }
});

new Vue({
    el: "#wrap",
    components: {
        'my-radius': {
            template: `<div><div v-for="val in 3" :style="style"></div></div>`,
            data() {
                return {
                    style: {
                        width: '100px',
                        height: '100px',
                        background: 'red',
                        borderRadius: "50px"
                    }
                }
            }
        }
    }
})