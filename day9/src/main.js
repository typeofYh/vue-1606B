import a from './js/a';
import "./css/style.css";
import Vue from 'vue';
import headers from './components/headers.vue';

new Vue({
    el: '#app',
    components: {
        headers
    }
})