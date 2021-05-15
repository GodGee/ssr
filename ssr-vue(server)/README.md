# ssr-vue

> A Vue.js project

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

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