const createApp = require('./app')
const server = require('express')()
const renderer = require('vue-server-renderer').createRenderer({
  template: require('fs').readFileSync('./index.template.html', 'utf-8'),
})

server.get('*', (req, res) => {
  const app = createApp({ url: req.url })
  renderer.renderToString(app, (err, html) => {
    if (err) {
      res.status(500).end('Internal Server Error')
      return
    }
    console.log('html: ', html)
    res.end(html)
  })
})

server.listen(8080)
