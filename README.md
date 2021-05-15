## 根据官网按步骤搭建 ssr

ssr
ssr-demo
ssr-demo-webpack

ssr-test-01 纯浏览器渲染
ssr-test-02 服务端渲染，不包含 Ajax 初始化数据
ssr-test-03 服务端渲染，包含 Ajax 初始化数据
ssr-test-04 使用 serverBundle 和 clientManifest 进行优化
ssr-test-05 配置一个完整的基于 Vue + VueRouter + Vuex 的 SSR

prerender-spa 预渲染
vue init webpack prerender-spa
npm i prerender-spa-plugin -D
预渲染插件配置
const PrerenderSPAPlugin = require("prerender-spa-plugin");
//调用渲染器
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
new PrerenderSPAPlugin({
staticDir: path.join(\_\_dirname, "../dist"),
routes: ["/", "/about"],

      //这个配置很重要，如果没有这个，也不会进行预编译
      renderer: new Renderer({
        inject: {
          foo: "bar"
        },
        headless: false,
        //在项目的入口中使用document.dispatchEvent('render-event')
        renderAfterDocumentEvent: "render-event"
      })
    })

ssr-simple 服务端渲染
