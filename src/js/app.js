import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import VueEvents from 'vue-events';
import VueRouter from 'vue-router';

import routes from './routes';

import Display from './components/display';
import CommandLine from './components/command-line';

Vue.use(BootstrapVue);
Vue.use(VueEvents);
Vue.use(VueRouter);

const router = new VueRouter({
    routes // short for `routes: routes`
});

const app = new Vue({
    el: '#app',
    router,
    components: {
        Display,
        CommandLine,
    }
});