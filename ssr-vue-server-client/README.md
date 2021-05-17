# ssr-vue

服务端
注释 webpack.base.conf 下的入口文件
// entry: {
// app: './src/main.js'
// },

webpack 增加  "server": "webpack --config build/webpack.server.conf.js"

target:"node",//前端用 import 后端可以用 require 解析

npm run server

修改server.js 文件 接受来自 entry-server 的回调 

npm run server

node server.js

虽然做了服务端渲染，每次访问地址都发送请求

编写服务端代码
mian--->entry-server--->server--->webpack.server.conf


客户端
webpack 增加  "client": "webpack --config build/webpack.client.conf.js"
npm run client

node server.js

编写客户端代码
mian--->entry-client--->server--->webpack.client.conf

总结：
    两个vue实例     
    客户端渲染单页面操作，单页面第一次会发送请求，后续组件切换，浏览器地址哈希都是通过客户端渲染
    服务端渲染seo优化
    客户端代码混入服务端html，替换服务端请求

