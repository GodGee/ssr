const Vue = require("vue");
const exp = require("express");
const express = exp();
const renderer = require("vue-server-renderer").createRenderer();
const createApp = require("./dist/bundle.server.js")["default"];

// //创建vue实例
// const app = new Vue({
//   template: '<div>Hello gg</div>',
// })

express.use("/", exp.static(__dirname + "/dist"));
const clientBundleFileUrl = "/bundle.client.js";

//服务端渲染的核心在于 通过vue-server-renderer插件的renderToString() 方法，将Vue实例转换成字符串插入到html文件中
express.get("*", (req, res) => {
  const context = { url: req.url };
  console.log("context: ", createApp(context));
  createApp(context).then(app => {
    renderer.renderToString(app, (err, html) => {
      if (err) {
        return res.state(500).end("运行错误");
      }
      res.send(`<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <title>服务器渲染</title>
          <script src="${clientBundleFileUrl}"></script>
        </head>
        <body>
          ${html}
        </body>
      </html>
      `);
    });
  });
});

express.listen(8088, () => {
  console.log("服务已启动……");
});
