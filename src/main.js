import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./styles/index.scss"
import BytemdVue from "@uvdream/bytemd-plugin-vu2"
Vue.config.productionTip = false;
Vue.use(BytemdVue)
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
