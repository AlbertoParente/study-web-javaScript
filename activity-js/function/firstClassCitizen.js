function fun1() {

}

function fun2() {
    
}

const array = [function (a,b) { return a + b }, fun1, fun2]
console.log(array[0](2,3))

const obj = {}
obj.speak = function() { return 'hello' }
console.log(obj.speak())

function run(fun){
    fun()
}

run(function() { console.log('Running...') })

function sum(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

sum(2,3)(4)
const fiveMore = sum (2, 3)
fiveMore(4)