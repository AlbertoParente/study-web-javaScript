// Function in JS is First-Class Object (Citizens)
// Higher-order function

// Literal form
function fun1() {

}

// In variable
const fun2 = function () {

}

// In array
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3))

// In attribute of object
const obj = {}
obj.speak = function () { return 'hello' }
console.log(obj.speak())

// Passing as parameter
function run(fun) {
    fun()
}

run(function () { console.log('Running...') })

// Return or contain a function
function sum(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

sum(2, 3)(4)
const fiveMore = sum(2, 3)
fiveMore(4)
