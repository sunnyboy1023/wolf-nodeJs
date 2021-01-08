const fs = require('fs')
const Koa = require('koa')
const app = new Koa()

app.use(ctx => {
  if (ctx.path == '/good') {
    return ctx.body = 'good'
  }
  fs.readFile('somefile.txt', (err, data) => {
    if (err) throw err
    console.log(data)

    ctx.body = 'Hello Koa'
  })
})
// 增加错误进程捕获 不会因出错导致单线程崩溃
process.on('uncaughtException', err => {
  console.log(err)
})

app.listen(3000)