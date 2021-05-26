import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

Vue.prototype.$http = axios;

new Vue({
    el: '#app',
    render: h => h(App)
});