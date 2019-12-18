/*
 * @Author: isboyjc
 * @Date: 2019-12-17 21:52:46
 * @LastEditors  : isboyjc
 * @LastEditTime : 2019-12-19 00:22:32
 * @Description: 原生http服务
 */
const http = require("http")

const server = http.createServer((req,res)=>{
  res.writeHead(200)
  res.end("这是一个http服务!")
})

server.listen(3037,()=>{
  console.log("http服务已启动， http://localhost:3037， server start!")
})