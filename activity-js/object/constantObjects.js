// person -> 123 -> { ... }

const person = { name: 'Alberto' }
person.name = 'Parente'
console.log(person)

// person -> 456 -> { ... }
// person = { name: 'Juliana' }

Object.freeze(person)

person.name = 'Edileusa'
person.end = 'Adress Tocantins'
delete person.name

console.log(person.name)
console.log(person)

const personConstant = Object.freeze({ name: 'João' })
personConstant.name = 'Edileusa'
console.log(personConstant)
