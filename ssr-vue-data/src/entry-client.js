//编写客户端入口文件
import { createApp } from "./main";

const { app } = createApp();
const router = app.$router;

window.onload = function() {
  app.$mount("#app");
};
