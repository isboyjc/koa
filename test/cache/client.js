/*
 * @Author: isboyjc
 * @Date: 2019-12-18 23:47:26
 * @LastEditors  : isboyjc
 * @LastEditTime : 2019-12-18 23:49:23
 * @Description: client - 模拟客户端发起请求
 */
const request = require('request');

setInterval(()=>{
  request(`http://localhost:3031/data`,(err,res)=>{
    console.log(`${new Date()}发起了一个${res.req.method}请求,请求地址为：${res.request.path},返回结果为：${res.body}`)
  })
},500);