// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import infiniteScroll from 'vue-infinite-scroll'
import App from './App'
import router from './router'
import store from './storage/'
import './style/app.scss'

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(infiniteScroll)
Vue.use(require('vue-moment'))

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store,
  directives: {
    infiniteScroll
  }
})
