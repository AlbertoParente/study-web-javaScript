const greeting = 'Hello' 

function exec() {
    const greeting = 'hello...'
    return greeting
}


const client = {
    name: 'Alberto',
    age: 27,
    weigth: 70,
    adress: {
        street: 'Street teste',
        number: 13,
    }
}

console.log(greeting)
console.log(exec())
console.log(client)
console.log(client.adress)