
import Vue from 'vue';
import App from './App.vue';

import 'babel-polyfill';

import store from './store';

new Vue({
  el: '#app',
  store,
  render: h => h(App)
});
