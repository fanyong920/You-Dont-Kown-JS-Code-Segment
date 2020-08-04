/*
 * @Author: your name
 * @Date: 2020-08-04 19:48:36
 * @LastEditTime: 2020-08-04 19:51:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \You-Dont-Kown-JS-Code-Segment\src\chapter3\不隐藏内部实现示例.js
 */

 /**
  * 
  * 在这个示例里 变量b没有隐藏在doSomeThing作用域内
  */
function doSomeThing(a){
    b = a + handle(a);
    console.log(b)
}

function handle(a){
    return a - 2;
}

var b ;

doSomeThing(6);

//输出结果
10
