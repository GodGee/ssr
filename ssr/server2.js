const Vue = require('vue')
const server = require('express')()
const renderer = require('vue-server-renderer').createRenderer()

server.get('*', (req, res) => {
  const app = new Vue({
    data: {
      url: req.url,
    },
    template: `<div>访问的 URL是：{{url}}</div>`,
  })

  renderer.renderToString(app, (err, html) => {
    if (err) {
      res.status(500).end('Internal Server Error')
      return
    }
    res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' }) //writeHeader可以设置http返回状态码，多个http响应头。但是setHeader只针对单一属性的设置。
    // res.setHeader('Content-Type', 'text/html;charset=UTF-8') //解决乱码  注意：文件必须是utf-8格式
    res.end(`
      <!DOCTYPE html>
      <html lang="en">
        <head><title>Hello</title></head>
        <body>${html}</body>
      </html>
    `)
  })
})

server.listen(8080)
