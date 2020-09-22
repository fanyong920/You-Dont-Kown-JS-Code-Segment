foo();//在函数被定义的代码之前执行函数，依然能执行，说明函数被提升

function foo() {
    console.log('我提升了...')
}

var foo = function () {
    console.log('我是变量函数，我被之前的声明函数覆盖了')
}