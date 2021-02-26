require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import App from '../js/views/App.vue';
import VueSweetalert2 from 'vue-sweetalert2';

import routes from './router/routes';
// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.component('pagination', require('laravel-vue-pagination'));

Vue.component('navbar',() => import('./views/components/navbar.vue'));
Vue.component('asidebar',() => import('./views/components/asidebar.vue'));
Vue.component('footer-template',() => import('./views/components/footer.vue'));

Vue.use(VueRouter);
Vue.use(VueSweetalert2);
Vue.use(VueAxios, axios);

const router = new VueRouter({
    mode: 'history',
    routes: routes
});
const app = new Vue(
    Vue.util.extend({ router },
    App)
).$mount('#app');
