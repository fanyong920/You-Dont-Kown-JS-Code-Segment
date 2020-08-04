/*
 * @Author: your name
 * @Date: 2020-08-04 19:41:15
 * @LastEditTime: 2020-08-04 19:44:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \You-Dont-Kown-JS-Code-Segment\src\chapter2\欺骗此法-eval.js
 */
//欺骗词法-eval函数 

function foo(evalStr,a){
    'use strict'  //如果使用严格模式，eval函数的欺骗词法作用失效
    eval(evalStr);
    console.log(a + b);
}

foo('var b = 4',3);

//输出结果
7