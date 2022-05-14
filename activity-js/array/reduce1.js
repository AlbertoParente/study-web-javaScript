const students = [
    { name: 'Alberto', note: 7.3, scholarship: false },
    { name: 'Juliana', note: 9.2, scholarship: true },
    { name: 'Graziella', note: 9.8, scholarship: false },
    { name: 'Gabriella', note: 8.7, scholarship: true }
]

console.log(students.map(a => a.note))
const result = students.map(a => a.note).reduce(function (accumulator, actual) {
    console.log(accumulator, actual)
    return accumulator + actual
}, 0)

console.log(result)
