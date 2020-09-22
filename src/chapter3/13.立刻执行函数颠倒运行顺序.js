/*
 * @Author: your name
 * @Date: 2020-08-05 14:27:05
 * @LastEditTime: 2020-08-05 14:30:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \You-Dont-Kown-JS-Code-Segment\src\chapter3\13.立刻执行函数颠倒运行顺序.js
 */

/**
 * 函数bar虽然书写在后面，但是首先运行
 */
(function foo(def){
    def(99);
    console.log(108);
})(function bar(n){
    console.log(n + 1);
})

//打印结果
100