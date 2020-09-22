/*
 * @Author: your name
 * @Date: 2020-08-05 11:48:40
 * @LastEditTime: 2020-08-05 11:50:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \You-Dont-Kown-JS-Code-Segment\src\chapter3\立刻执行函数保证undefind安全.js
 */

undefined = true;

(function IIFE(undefined){
    var a;
    if(a == undefined){
        console.log('Undefind is safe here');
    }
})()