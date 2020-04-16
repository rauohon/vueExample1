import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import AppConfig from '@/config/config'
import HttpModule from '@/plugin/http/http'
import store from '@/store'

Vue.config.productionTip = true

/* Http config */
Vue.use(HttpModule, AppConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
