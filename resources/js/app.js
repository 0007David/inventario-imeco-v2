require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import App from '../js/views/App.vue';
import VueSweetalert2 from 'vue-sweetalert2';
import BootstrapVue from 'bootstrap-vue';

import routes from './router/routes';
// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';
// Boostrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { isAuth } from './utils/utils';

Vue.component('pagination', require('laravel-vue-pagination'));

Vue.component('navbar',() => import('./views/components/navbar.vue'));
Vue.component('asidebar',() => import('./views/components/asidebar.vue'));
Vue.component('footer-template',() => import('./views/components/footer.vue'));
Vue.component('order-progress',require('./views/components/OrderProgress.vue').default);

Vue.use(VueRouter);
Vue.use(VueSweetalert2);
Vue.use(BootstrapVue);
Vue.use(VueAxios, axios);

const router = new VueRouter({
    mode: 'history',
    routes: routes
});
router.beforeEach(function (to, from, next) {
    if (to.name !== 'login' && !isAuth())
        window.location.href = '/login';
    else
        next();
});

const app = new Vue(
    Vue.util.extend({ router },App),
).$mount('#app');

/*const app= new Vue({
el:'#app',
mounted(){
    window.Echo.channel('imeco-realtime').listen('OrderStatusChangedEvent',(e)=>
    {
       console.log('Mensaje en tiempo real'); 
    });
 }
}).util.extend({router},App);*/
