/*
 * @Author: your name
 * @Date: 2020-08-04 19:53:46
 * @LastEditTime: 2020-08-04 20:00:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \You-Dont-Kown-JS-Code-Segment\src\chapter3\变量冲突.js
 */

 
 
function foo(){
    
    /**
     * 
     * 重新声明了变量i,不引用外层作用域的变量i 
     */
    function bar(a){
        var i  = 3;
        console.log(a + i);
    }

    for(var i = 0; i < 10; i++){
        bar(i * 2);
    }
}
//程序发生死循环
foo()

//输出结果 
3,5,7,9,11