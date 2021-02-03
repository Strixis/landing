import Vue from 'vue';

import 'styles/normalize.css';

import App from './App.vue';

Vue.config.devtools = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
