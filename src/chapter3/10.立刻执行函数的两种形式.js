/*
 * @Author: your name
 * @Date: 2020-08-05 11:34:54
 * @LastEditTime: 2020-08-05 11:39:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \You-Dont-Kown-JS-Code-Segment\src\chapter3\10.立刻执行函数的两种形式.js
 */

 /**
  * 两种形式只有细微的区别，其功能是一致的
  */
function foo(){
    (function bar(){
        console.log('I success');
    })()
    console.log('foo...')
}

function foo2(){
    (function bar(){
        console.log('I success too');
    }())
    console.log('foo2...')
}

foo();
foo2()

//输出结果
//I success
//foo...
//I success too
//foo2...