const person = {
    name: 'Juliana',
    age: 17,
    weight: 63
}

console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))

Object.entries(person).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

Object.entries(person).forEach(([key, value]) => {
    console.log(`${key}: ${value}`)
})

Object.defineProperty(person, 'dateOfBirth', {
    enumerable: true,
    writable: false,
    value: '2020/08/13'
})

person.dateOfBirth = '2029/08/13'
console.log(person.dateOfBirth)
console.log(Object.keys(person))

// Object.assign (ECMAScript 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)
obj.c = 12345
console.log(obj)
