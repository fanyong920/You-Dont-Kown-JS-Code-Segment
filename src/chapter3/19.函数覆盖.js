foo();//在函数被定义的代码之前执行函数，依然能执行，说明函数被提升

function foo() {
    console.log('我提升了...')
}

 function foo() {
    console.log('我是第二次foo函数声明，我函数覆盖了之前的foo声明')
}

