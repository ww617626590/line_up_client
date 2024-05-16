//引入Vue框架
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入VueRouter
import VueRouter from "vue-router";
//引入路由器
import router from "./router/index";
//应用插件
Vue.use(VueRouter)
//关闭生产提示
Vue.config.productionTip = false

//创建vm
new Vue({
    el:'#app',
    render: h => h(App),
    router:router
})