// Object.preventExtensions
const product = Object.preventExtensions({
    name: 'Bike', 
    price: 599.99,
    tag: 'Promotion'
})
console.log('Extensible:', Object.isExtensible(product))

product.name = 'Ball'
product.description = 'Basketball'
delete product.tag
console.log(product)

// Object.seal
const person = { name: 'Juliana', age: 23}
Object.seal(person)
console.log('Sealed:', Object.isSealed(person))

person.surname = 'Cavalcante'
delete person.name
person.age = 24
console.log(person)

// Object.freeze = sealed + value constant