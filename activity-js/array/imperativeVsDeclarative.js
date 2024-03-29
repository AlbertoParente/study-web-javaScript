const students = [
    { name: 'Alberto', note: 7.9 },
    { name: 'Juliana', note: 9.2 }
]

// Imperative
let total1 = 0

for (let i = 0; i < students.length; i++) {
    total1 += students[i].note
}
console.log(total1 / students.length)

// Declarative
const getNote = students => students.note
const sum = (total, actual) => total + actual
const total2 = students.map(getNote).reduce(sum)

console.log(total2 / students.length)
