/*
 * @Author: your name
 * @Date: 2020-08-04 19:53:46
 * @LastEditTime: 2020-08-04 19:59:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \You-Dont-Kown-JS-Code-Segment\src\chapter3\变量冲突.js
 */


function foo(){
    function bar(a){
        i  = 3;//将外层作用域的变量i赋值为3，导致 i一直等于10
        console.log(a + i);
    }

    for(var i = 0; i < 10; i++){
        bar(i * 2);
    }
}
//程序发生死循环
foo()

//输出结果 无线循环11
11