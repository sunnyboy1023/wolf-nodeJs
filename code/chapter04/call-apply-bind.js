/*
 * @Author: yanxu
 * @Description: 
 * @Date: 2021-01-06 15:11:44
 * @LastEditors: yanxu
 * @LastEditTime: 2021-01-06 15:14:57
 * @LastEditDetails: 
 */

 function test(arg) {
   console.log(this.varialbe + arg)
 }

 var obj = {
   varialbe: 1
 }

 var c = test.bind(obj, 3)

 test()
 test.apply(obj, [1])
 test.call(obj, 2)
 c()
