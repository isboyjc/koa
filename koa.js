/*
 * @Author: isboyjc
 * @Date: 2019-12-17 21:48:45
 * @LastEditors: isboyjc
 * @LastEditTime: 2019-12-17 22:14:49
 * @Description: koa服务
 */

const Koa = require("koa")
const app = new Koa()

app.use(async (ctx, next) => {
  const start = new Date().getTime()
  console.log(`start,request url:${ctx.url}`)
  await next()
  const end = new Date().getTime()
  console.log(`end,request url:${ctx.url},耗时:${parseInt(end - start)}ms`)
})

app.use((ctx, next) => {
  ctx.body = [
    {
      msg: "这是一个koa接口！"
    }
  ]
})

app.listen(3038)
