/*const a = {name: 'Test 1'}
console.log(a)

const b = a
b.name = 'Test 2'
console.log(b)

let c = 3
let d = c
d++
console.log(d)
console.log(c)
*/

let value

console.log(value)

value = null
console.log(value)
//console.log(value.toString()) // Erro!

const product = {}

console.log(product.price)
console.log(product)

product.price = 3.50
console.log(product)

product.price = undefined // Avoid assigning undefined
console.log(!!product.price)
// delete product.price
console.log(product)

product.price = null
console.log(!!product.price)
console.log(product)
