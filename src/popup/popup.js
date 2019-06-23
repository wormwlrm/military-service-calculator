import Vue from 'vue';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/ko';
import 'element-ui/lib/theme-chalk/index.css';
import dayjs from 'dayjs';
import { store } from '../store/store';
import App from './App';
import routes from '../router/routes';

global.browser = require('webextension-polyfill');

Vue.prototype.$browser = global.browser;
Vue.prototype.$dayjs = dayjs;

Vue.use(VueRouter);
Vue.use(ElementUI, { locale });

const router = new VueRouter({
  routes // `routes: routes`의 줄임
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  dayjs,
  render: h => h(App)
});
