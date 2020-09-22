/*
 * @Author: your name
 * @Date: 2020-08-05 15:29:39
 * @LastEditTime: 2020-08-05 15:30:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \You-Dont-Kown-JS-Code-Segment\src\chapter3\15.显式声明块作用域.js
 */

var foo = true;

if(foo){
    {
        let bar = 2 * 2;
        console.log(bar);
    }
}
console.log(bar);

//输出结果
4
ReferenceError