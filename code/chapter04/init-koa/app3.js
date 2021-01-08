const fs = require('fs')
const Koa = require('koa')
const app = new Koa()

app.use(ctx => {
  if (ctx.path == '/good') {
    return ctx.body = 'good'
  }
  fs.readFile('somefile.txt', (err, data) => {
    // 用try/catch捕获读取文件异常 不会意外结束当前进程
    // 只有同步代码才能捕获 异步不可(若用promise 用promise异常处理方式)
    try {
      if (err) throw err
      console.log(data)

      ctx.body = 'Hello Koa'
    } catch (e) {
      // 捕获不到readCallback函数抛出的异常
      console.log(e)
    } finally {
      console.log('离开try/catch')
    }
    
  })
})

app.listen(3000)