/*
 * @Author: isboyjc
 * @Date: 2019-12-17 21:51:06
 * @LastEditors: isboyjc
 * @LastEditTime: 2019-12-18 01:07:27
 * @Description: 简版koa测试 koa核心+router
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
const Router = require("./middleware/router");
const router = new Router();

router.get("/home",async ctx => {
  ctx.body = "home page"
})
router.get("/about",async ctx => {
  ctx.body = "about page"
})
router.get("/list",async ctx => {
  ctx.body = "post list page"
})


// 路由中间件实例输出父中间件 router.routes()
app.use(router.routes())

// 静态服务中间件
const static = require('./middleware/static')
app.use(static(__dirname + '/public'))

app.listen(3036,()=>{
  console.log("简版koa服务已启动,监听3036端口")
})
