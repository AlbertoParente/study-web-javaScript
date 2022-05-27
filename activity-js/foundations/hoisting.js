// Using var
console.log('a =', a)

var a = 2

console.log('a =', a)

function test1() {
    console.log('a =', a)

    var a = 3

    console.log('a =', a)
}

test1()

// Using let

// console.log('b =', b)
let b = 2

console.log('b =', b)

function test2() {
    // console.log('b =', b)
    let b = 3
    console.log('b =', b)
}

test2()
