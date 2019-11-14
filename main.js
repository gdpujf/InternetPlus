import Vue from 'vue'
import App from './App'

import home from './pages/home/home.vue'
Vue.component('home',home)

import service from './pages/service/home.vue'
Vue.component('service',service)

import person from './pages/person/home.vue'
Vue.component('person',person)

import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)

import newscard from './colorui/components/newscard.vue'
Vue.component('newscard',newscard)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

 



