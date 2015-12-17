'use strict';

// Global deps
import Vue from 'vue'
import Parent from '../components/parent.vue'
import Child from '../components/child.vue'

// Create a app
new Vue({
  el: '#app',
  components: {
    Parent,
    Child,
  }
})