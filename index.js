/*
 * @Author: isboyjc
 * @Date: 2019-12-17 21:51:06
 * @LastEditors  : isboyjc
 * @LastEditTime : 2019-12-18 12:05:54
 * @Description: 简版koa koa核心+router+static+cache
 */
const LKoa = require("./core/index");
const app = new LKoa();

// no1 - use&listen实现
// app.use((req,res)=>{
//   res.writeHead(200)
//   res.end("这是一个简版的koa服务！")
// })


// no2 - 上下文实现
// app.use(ctx=>{
//   ctx.body = "这是一个简版的koa服务!!!"
// })


// no3 - 洋葱圈，中间件机制实现
// app.use(async (ctx,next)=>{
//   console.log(1)
//   ctx.body = "1"
//   await next()
//   console.log(5)
//   ctx.body += "5"
// })
// app.use(async (ctx,next)=>{
//   console.log(2)
//   ctx.body += "2"
//   await next()
//   console.log(4)
//   ctx.body += "4"
// })
// app.use(async (ctx,next)=>{
//   console.log(3)
//   ctx.body += "3"
//   await next()
//   console.log("已执行到最深处，开始返回")
// })


// no4 - router中间件实现
// const Router = require("./middleware/router");
// const router = new Router();

// router.get("/home",async ctx => {
//   ctx.body = "home page"
// })
// router.get("/about",async ctx => {
//   ctx.body = "about page"
// })
// router.get("/list",async ctx => {
//   ctx.body = "post list page"
// })



// no4 - 静态服务中间件实现
// const static = require('./middleware/static')
// app.use(static(__dirname + '/public'))


// no4 - 接口缓存中间件实现
// const Cache = require("./middleware/cache")
// 缓存信息配置
// const cache = new Cache({
  // 需缓存接口
  // cachesInterface:[{path:"/data",method:"get"}],
  // 缓存时效
  // cachesTime: 10000
// })

// 缓存配置修改
// cache.cachesInterface = [{path:"/data",method:"get"},{path:"/list",method:"post"}]
// cache.cachesTime = 6000

// app.use(cache.init)

// router.get("/data",async ctx => {
//   let data = [
//     {
//       id:1,
//       msg: `/data random: ${Math.floor(Math.random()*10000)}`
//     },
//     {
//       id:2,
//       msg: `/data random: ${Math.floor(Math.random()*10000)}`
//     }
//   ]
//   ctx.body = JSON.stringify(data)
// })

// 手动更新缓存
// setTimeout(() => {
//   cache.update()
// }, 5000);


// 路由中间件实例输出父中间件 router.routes()
// app.use(router.routes())


app.listen(3036,()=>{
  console.log(`简版koa服务已启动， http://localhost:3036， server start!`)
  console.log("======================================================")
})
