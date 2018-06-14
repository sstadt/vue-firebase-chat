
import Vue from 'vue';
import Vuefire from 'vuefire';
import App from './App.vue';

Vue.use(Vuefire);

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
});
