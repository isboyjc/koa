/*
 * @Author: isboyjc
 * @Date: 2019-12-17 22:43:50
 * @LastEditors: isboyjc
 * @LastEditTime: 2019-12-17 23:13:10
 * @Description: request - req
 */
module.exports= {
  get url(){
    return this.req.url
  },

  get method(){
    return this.req.method.toLowerCase()
  }
}