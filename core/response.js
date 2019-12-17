/*
 * @Author: isboyjc
 * @Date: 2019-12-17 22:44:02
 * @LastEditors: isboyjc
 * @LastEditTime: 2019-12-17 22:58:27
 * @Description: response - res
 */
module.exports = {
  get body(){
    return this._body
  },

  set body(val){
    this._body = val
  }
}