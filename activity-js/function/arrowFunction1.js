let doubleFunc = function(a) {
    return 2 * a
}

doubleFunc = (a) => {
    return 2 * a
}

doubleFunc = a => 2 * a // Return implicit
console.log(doubleFunc(Math.PI))

let hello = function() {
    return 'Hello...!'
}

hello = () => 'Hello...!'
hello = _ => 'Hello...!'
console.log(hello())