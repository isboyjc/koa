/*
 * @Author: isboyjc
 * @Date: 2019-12-17 21:53:53
 * @LastEditors: isboyjc
 * @LastEditTime: 2019-12-17 23:59:07
 * @Description: koa核心源码实现-简版
 */
const http = require("http")
const context = require("./context")
const request = require("./request")
const response = require("./response")

class LKoa{
  constructor(){
    this.middlewares = []
  }

  listen(...args){
    const server = http.createServer(async (req,res)=>{
      // 创建上下文
      let ctx = this.createContext(req,res)
      // 中间件合成
      let fn = this.compose(this.middlewares)
      // 执行合成函数
      await fn(ctx)

      // 响应
      res.end(ctx.body)
    })

    server.listen(...args)
  }

  use(middleware){
    this.middlewares.push(middleware)
  }

  // 构建上下文
  createContext(req,res){
    const ctx = Object.create(context)
    ctx.request = Object.create(request)
    ctx.response = Object.create(response)

    ctx.req = ctx.request = req
    ctx.res = ctx.response = res
    return ctx
  }

  // 函数复合
  compose(middlewares){
    return function(ctx){
      function dispatch(i){
        let fn = middlewares[i]
        if(!fn){
          return Promise.resolve()
        }
        return Promise.resolve(
          fn(ctx,function next(){
            return dispatch(i+1)
          })
        )
      }
      return dispatch(0)
    }
  }
}

module.exports = LKoa