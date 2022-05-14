const note = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i in note) {
    console.log(i, note[i])
}

const person = {
    name: 'Alberto',
    surname: 'Silva',
    age: 27,
    weight: 70
}

for (let attribute in person) {
    console.log(`${attribute} = ${person[attribute]}`)
}
