/*
 * @Author: isboyjc
 * @Date: 2019-12-17 21:51:06
 * @LastEditors  : isboyjc
 * @LastEditTime : 2019-12-18 12:05:54
 * @Description: cache test server
 */
const LKoa = require("./../../core/index");
const app = new LKoa();

// 路由中间件
const Router = require("./../../middleware/router");
const router = new Router();

// 接口缓存中间件
const Cache = require("./../../middleware/cache")
// 缓存信息配置
const cache = new Cache({
  // 设置需缓存接口
  cachesInterface:[{path:"/data",method:"get"}],
  // 设置缓存时效
  cachesTime: 10000
})

// 缓存配置修改
cache.cachesInterface = [{path:"/data",method:"get"},{path:"/list",method:"post"}]
cache.cachesTime = 5000

// 使用缓存中间件
app.use(cache.init)

// data接口
router.get("/data",async ctx => {
  let data = [
    {
      name: "/data",
      num: Math.floor(Math.random()*10000)
    },
    {
      name: "/data",
      num: Math.floor(Math.random()*10000)
    }
  ]
  ctx.body = JSON.stringify(data)
})

// list接口
router.get("/list",async ctx => {
  let data = [
    {
      name:"/list",
      num: Math.floor(Math.random()*10000)
    }
  ]
  ctx.body = JSON.stringify(data)
})

// 手动更新缓存
// setTimeout(() => {
//   cache.update()
// }, 5000);

app.use(router.routes())


app.listen(3031,()=>{
  console.log(`简版koa服务已启动，http://localhost:3031，server start!`)
  console.log("======================================================")
})
