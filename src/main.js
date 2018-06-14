
import Vue from 'vue';
import App from './App.vue';

import store from './store';

new Vue({
  el: '#app',
  store,
  render: h => h(App)
});


// import Vue from 'vue';
// import Vuefire from 'vuefire';
// import App from './App.vue';
//
// Vue.use(Vuefire);
//
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// });
