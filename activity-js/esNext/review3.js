// ES8: Object.values / Object.entries
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj))
console.log(Object.entries(obj))

// Literal notation
const name = 'Alberto'
const person = {
    name,
    hello() {
        return 'Hello person...!'
    }
}
console.log(person.name, person.hello())

// Class
class Animal { }
class Dog extends Animal {
    speak() {
        return 'Au Au!'
    }
}
console.log(new Dog().speak())
