/*
 * @Author: your name
 * @Date: 2020-08-05 11:40:27
 * @LastEditTime: 2020-08-05 11:44:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \You-Dont-Kown-JS-Code-Segment\src\chapter3\11.立刻执行函数保证undefind安全.js
 */

 /**
  * 用nodejs运行的话，会报错，因为nodejs没有window对象
  */
var a = 2;
(function IIFE(global){
    var a = 3;
    console.log(a);
    console.log(global.a);
})(window)

console.log(a);

//输出结果
3
2
2
