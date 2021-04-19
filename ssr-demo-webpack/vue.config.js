const nodeExternals = require('webpack-node-externals')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')

// 环境变量：决定入口是客户端还是服务端
const TARGET_NODE = process.env.WEBPACK_TARGET === 'node'
const target = TARGET_NODE ? 'server' : 'client'

module.exports = {
  configureWebpack: () => {
    if (process.env.WEBPACK_TARGET === 'node') {
      return {
        entry: './src/entry-server.js',
        target: 'node',
        devtool: 'source-map',
        output: {
          libraryTarget: 'commonjs2',
        },
        externals: [
          nodeExternals({
            allowlist: [/\.css$/], // [webpack-node-externals] : Option 'whitelist' is not supported. Did you mean 'allowlist'?
          }),
        ],
        optimization: {
          splitChunks: TARGET_NODE ? false : undefined, //不配置报错 Server-side bundle should have one single entry file. Avoid using CommonsChunkPlugin in the server config. vuessr 报错解决
        },
        plugins: [new VueSSRServerPlugin()],
      }
    } else {
      return {
        entry: './src/entry-client.js',
        plugins: [new VueSSRClientPlugin()],
      }
    }
  },
}
