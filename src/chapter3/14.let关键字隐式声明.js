/*
 * @Author: your name
 * @Date: 2020-08-05 15:27:06
 * @LastEditTime: 2020-08-05 15:29:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \You-Dont-Kown-JS-Code-Segment\src\chapter3\14.let关键字隐式声明.js
 */

var foo = true;

if(foo){
    let bar = 2 * 2;
    console.log(bar);
}
console.log(bar);

//输出结果
4
ReferenceError