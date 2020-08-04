/*
 * @Author: your name
 * @Date: 2020-08-04 19:39:05
 * @LastEditTime: 2020-08-04 20:07:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \You-Dont-Kown-JS-Code-Segment\src\chapter2\欺骗词法-with关键字.js
 */

 
//欺骗词法-with关键字
/**
 * 严格模式，with关键字的欺骗词法作用失效
 * 程序抛错
 * SyntaxError: Strict mode code may not include a with statement
 */
'use strict' 
function foo(obj){
    with (obj){
        a = 2
    }
}
var obj1 = {
    a:1
};
var obj2 = {
    b:1
};

foo(obj1);
console.log(obj1.a);

foo(obj2);
console.log(obj2.a)
console.log(a);

