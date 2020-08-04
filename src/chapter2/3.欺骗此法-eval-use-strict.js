/*
 * @Author: your name
 * @Date: 2020-08-04 19:41:15
 * @LastEditTime: 2020-08-04 20:06:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \You-Dont-Kown-JS-Code-Segment\src\chapter2\欺骗此法-eval.js
 */

 
//欺骗词法-eval函数 

/**
 * 使用严格模式，eval函数的欺骗词法作用失效
 * 程序抛错ReferenceError: b is not defined
 */
function foo(evalStr,a){
    'use strict'  
    eval(evalStr);
    console.log(a + b);
}

foo('var b = 4',3);
