/*
 * @Author: yanxu
 * @Description: 函数式变编程
 * @Date: 2021-01-06 11:04:00
 * @LastEditors: yanxu
 * @LastEditTime: 2021-01-06 11:35:25
 * @LastEditDetails: 
 */

 const map = fn => array => array.map(fn)
 const prop = key => object => object[key]
 const reduce = (fn, inital) => array => array.reduce(fn, inital)
 const add = (x, y) => x + y
 const sum = reduce(add, 0)
 const filter = fn => array => array.filter(fn)

 const average = items => (
   items.length === 0 ? 0 : sum(items) / items.length
 )

 const flow = (...fns) => x => (
   fns.reduce((result, fn) => fn(result), x)
 )

 const calcAvgCost = (items, filterFn = () => true) => (
   flow (
     filter(filterFn),
     map(prop('price')),
     average
   )(items)
 )
 let a = [1,2,3,4,5,6,7]