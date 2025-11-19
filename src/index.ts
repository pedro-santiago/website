import Vue from 'vue';
import './init';
import View from './views/index.vue';

new Vue({
  el: '#view',
  render: display => display(View),
});
