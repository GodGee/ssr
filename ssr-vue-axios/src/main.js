// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import { createRouter } from "./router";
import { createStore } from "./store";

Vue.config.productionTip = false;

/* eslint-disable no-new */
// new Vue({
//   el: "#app", //编写通用的代码，前后端公用vue，#app document.getElementById('app') 后端node不识别去掉
//   router,
//   components: { App },
//   template: "<App/>"
// });

//编写通用的代码
export function createApp() {
  const router = createRouter();
  const store = createStore();
  const app = new Vue({
    store,
    router,
    components: { App },
    template: "<App/>"
  });

  return { app };
}
