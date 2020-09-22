/*
 * @Author: your name
 * @Date: 2020-08-05 15:31:06
 * @LastEditTime: 2020-08-05 15:34:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \You-Dont-Kown-JS-Code-Segment\src\chapter3\16.块作用域实现内存回收.js
 */


function handle(bigData){
    console.log(bigData)
}

//处理完，里面的变量就可以被回收了。
{
    let bigData = {a:1};
    handle(bigData);
}

var mybutton = document.getElementById('#myButton');

mybutton.addEventListener('click',function click(evt){
    console.log('button click');
},false)