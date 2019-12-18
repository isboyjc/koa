# koa
koa核心源码实现(简版)





### 目录

```js
├── core ------------------------------------------ koa核心文件[简版]
│   ├── context.js -------------------------------- ctx上下文
│   ├── index.js ---------------------------------- 核心
│   ├── request.js -------------------------------- request封装
│   ├── response.js ------------------------------- response封装
├── middleware ------------------------------------ 中间件文件夹[简版]
│   ├── cache.js ---------------------------------- koa接口缓存中间件
│   ├── router.js --------------------------------- koa路由中间件
│   ├── static.js --------------------------------- koa静态服务中间件
├── public ---------------------------------------- 静态文件夹
├── test ------------------------------------------ 测试文件夹
│   ├── cache ------------------------------------- koa接口缓存中间件测试包
│   │   ├── client.js ----------------------------- 客户端模拟请求服务
│   │   ├── index.js ------------------------------ 测试入口
│   │   ├── server.js ----------------------------- 缓存服务
├── express.js ------------------------------------ express server
├── http.js --------------------------------------- http server
├── index.js -------------------------------------- 简版koa server-注释流程
├── koa.js ---------------------------------------- koa server
```



### 启动

```js
npm install
// or
yarn install
```



```js
// 简版koa server启动
yarn serve

// http server启动
yarn http:serve

// express server启动
yarn express:serve

// koa server启动
yarn koa:serve

// 缓存中间件测试server启动
yarn test:cache
```



