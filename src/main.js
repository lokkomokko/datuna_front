// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
var VueScrollTo = require('vue-scrollto');
import VeeValidate from 'vee-validate';
var VueCookie = require('vue-cookie');
import {VueMasonryPlugin} from 'vue-masonry';
require('masonry-layout')
Vue.use(VueMasonryPlugin)
Vue.use(VeeValidate);

Vue.use(VueScrollTo)


// Tell Vue to use the plugin 
Vue.use(VueCookie);

Vue.config.productionTip = false

// router.beforeEach((to, from, next) => {
//   document.title = to.meta.title
//   next()
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
