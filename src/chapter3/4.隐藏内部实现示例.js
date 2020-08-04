/*
 * @Author: your name
 * @Date: 2020-08-04 19:48:36
 * @LastEditTime: 2020-08-04 20:07:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \You-Dont-Kown-JS-Code-Segment\src\chapter3\不隐藏内部实现示例.js
 */

 /**
  * 
  * 在这个示例里 变量b隐藏在doSomeThing作用域内
  */
function doSomeThing(a){
    var b;
    b = a + handle(a);
    console.log(b)
}

function handle(a){
    return a - 2;
}


doSomeThing(6);

//输出结果
10
