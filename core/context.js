/*
 * @Author: isboyjc
 * @Date: 2019-12-17 23:00:06
 * @LastEditors: isboyjc
 * @LastEditTime: 2019-12-17 23:05:14
 * @Description: context 上下文
 */
module.exports = {
  get url(){
    return this.request.url
  },

  get method(){
    return this.request.method
  },

  get body(){
    return this.response.body
  },

  set body(val){
    this.response.body = val
  }
}