let a = 123

global.b = 123

this.c = 456
this.d = false
this.e = 'Test'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

// Creating varible without var or let!
abc = 3 // Avoid doing this, as it creates globally variable.
console.log(global.abc)

// module.exports = { e: 456, f: false, g: 'Teste' }