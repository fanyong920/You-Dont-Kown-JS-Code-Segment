/*
 * @Author: your name
 * @Date: 2020-08-04 20:33:52
 * @LastEditTime: 2020-08-04 20:51:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \You-Dont-Kown-JS-Code-Segment\src\chapter3\8.arguments.callee.js
 */

 
/**
 * callee属性是 arguments 对象的一个成员，它表示对函数对象本身的引用，这有利于匿名函数的递归或者保证函数的封装性
 */

 /**
  * 一般的递归函数
  */
 var sum = function(n){
    if (1 == n) return 1;
    else return n + sum (n-1);
}
/**
 * 
 * 一般的递归函数 
 */
function sum2(n){
    if(n <= 0){
        return n;
    }
    return n + sum2(n - 1);
}
 console.log(sum(5))
 console.log(sum2(5))

 /**
  * 
  * arguments.callee实现递归
  */
 var sum = function(n){
    if (n <= 0) {                       
        return 1;
    }else{
        return n + arguments.callee(n - 1)
    }
}