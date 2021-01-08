/*
 * @Author: yanxu
 * @Description: 
 * @Date: 2021-01-05 18:29:05
 * @LastEditors: yanxu
 * @LastEditTime: 2021-01-05 19:18:43
 * @LastEditDetails: 
 */

 const http = require('http')

 http.createServer((req, res) => {
   let status = 200
   res.writeHead(status, {'Content-Type': 'text/plain'})
   console.log(333)
   res.end('Hello Node.js\n')
 }).listen(3000, '127.0.0.1')

 console.log('Server running at http://127.0.0.1:3000/')
