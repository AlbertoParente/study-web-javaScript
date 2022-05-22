console.log(this === global)
console.log(this === module)
console.log(this === module.exports)
console.log(this === exports)

function logThis() {
    console.log('Within a function...!')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)
}

logThis()
