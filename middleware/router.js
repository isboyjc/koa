/*
 * @Author: isboyjc
 * @Date: 2019-12-18 00:08:51
 * @LastEditors: isboyjc
 * @LastEditTime: 2019-12-18 00:57:12
 * @Description: koa router中间件实现
 */
class Router{
  constructor(){
    this.stack = []
  }

  get(path,middleware){
    this.register(path, 'get', middleware);
  }

  post(path,middleware){
    this.register(path, 'post', middleware);
  }
  
  register(path, methods, middleware){
    let route = {path, methods, middleware}
    this.stack.push(route);
  }

  routes(){
    let stock = this.stack;
    return async (ctx, next) => {
      let currentPath = ctx.url;
      let route;
      for (let i = 0; i < stock.length; i++) {
        let item = stock[i];
        // 判断path和method 是否相同
        if (currentPath === item.path && item.methods.indexOf(ctx.method.toLowerCase()) >= 0) { 
          route = item.middleware;
          break;
        }
      }
      if (typeof route === 'function') {
        route(ctx, next);
        return;
      }
      await next();
    }
  }
}

module.exports = Router;