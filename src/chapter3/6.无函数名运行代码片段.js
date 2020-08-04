/*
 * @Author: your name
 * @Date: 2020-08-04 20:08:09
 * @LastEditTime: 2020-08-04 20:14:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \You-Dont-Kown-JS-Code-Segment\src\chapter3\6.无函数名运行代码片段.js
 */

 
function foo(){
    var a = 5;
    /**
     * 函数bar即使没有显式调用，也能在foo被调用的时候运行
     */
    (function bar(){
        console.log(a + 2);
    })()

}

foo();

//输出结果
7