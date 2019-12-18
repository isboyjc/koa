/*
 * @Author: isboyjc
 * @Date: 2019-12-18 12:25:21
 * @LastEditors  : isboyjc
 * @LastEditTime : 2019-12-18 12:25:40
 * @Description: cache缓存中间件
 */
class Cache {
  constructor({cachesInterface = [],cachesTime = 10000} = {}){
    // 缓存接口数组
    this._cachesInterface = cachesInterface
    // 缓存生效时间 秒
    this._cachesTime = cachesTime
    // 缓存映射
    this.cachesSourceMap = {}
    // 缓存状态 true-已缓存
    this.flog = false

    console.log('缓存启动')
    console.log(`需缓存接口列表：${JSON.stringify(cachesInterface)}`)
    console.log(`缓存时效：${cachesTime/1000}s`)
  }

  // 缓存初始化方法
  init = async (ctx,next) => {
    let list = this._cachesInterface
    let idx = list.findIndex(v=>v.method.toUpperCase()===ctx.method&&v.path===ctx.url)
    if(idx!==-1){
      let cachesData = this.cachesSourceMap[list[idx].method+list[idx].path]
      if(cachesData){
        ctx.body = cachesData
        return
      }
    }

    await next()

    if(idx!==-1){
      if(!this.flog){
        this.cachesSourceMap[list[idx].method+list[idx].path] = ctx.body
        this.flog = true

        setTimeout(() => {
          console.log(`===================== 缓存过时，正在更新 =====================`)
          this.update()
        }, this._cachesTime);


        // let time = this._cachesTime/1000
        // let timer = setInterval(()=>{
        //   console.log(`缓存时效为${time}s,还有${time--}s`)
        //   if(time <= 0){
        //     clearInterval(timer)
        //   }
        // },1000)
      }
    }
  }

  // 更新缓存方法
  update(){
    this.flog = false
    this.cachesSourceMap = {}
    console.log(`=====================     缓存已更新    =====================`)
  }

  // 设置缓存接口名单
  set cachesInterface(list){
    this._cachesInterface = list
    console.log(`待缓存接口列表更新为：${JSON.stringify(list)}`)
  }

  // 设置缓存时效
  set cachesTime(second){
    this._cachesTime = second
    console.log(`缓存时效更新为：${second/1000}s`)
  }
}

module.exports = Cache