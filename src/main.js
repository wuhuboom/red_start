import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/comm.less";
import "amfe-flexible";
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
