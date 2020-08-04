/*
 * @Author: your name
 * @Date: 2020-08-04 20:08:09
 * @LastEditTime: 2020-08-04 20:12:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \You-Dont-Kown-JS-Code-Segment\src\chapter3\6.无函数名运行代码片段.js
 */

 /**
  * 
  */
 function foo(){
    var a = 5;
    function bar(){
        console.log(a + 2);
    }
    /**
     * 函数bar必须被显式的调用才能运行里面的代码片段
     */
    bar(a)

}

foo();

//输出结果
7