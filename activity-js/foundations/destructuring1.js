const person = {
    name: 'Alberto',
    age: 27,
    adress: {
        street: 'Street teste',
        number: 13
    }
}

const { name, age } = person

console.log(name, age)

const { name: n, age: a } = person

console.log(n, a)

const { surname, lastName = true } = person

console.log(surname, lastName)

const { adress: { street, number, postalCode = true } } = person

console.log(street, number, postalCode)
