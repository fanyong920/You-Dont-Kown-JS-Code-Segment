/*
 * @Author: your name
 * @Date: 2020-08-04 20:28:12
 * @LastEditTime: 2020-08-04 20:31:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \You-Dont-Kown-JS-Code-Segment\src\chapter3\7.匿名函数表达式.js
 */


 /**
 * function(){...}就是匿名函数表达式
 * 为啥叫函数表达式而不是函数声明
 * 因为函数声明必须有函数名
 * 不然就要报语法错误
 */
setTimeout(function(){
    console.log('I need 1 second');
},1000)

