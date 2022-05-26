const students = [
    { name: 'Alberto', note: 7.3, scholarship: false },
    { name: 'Juliana', note: 9.2, scholarship: true },
    { name: 'Graziella', note: 9.8, scholarship: false },
    { name: 'Gabriella', note: 8.7, scholarship: true }
]

const allScholarship = (result, scholarship) => result && scholarship

console.log(students.map(a => a.scholarship).reduce(allScholarship))

const someScholarship = (result, scholarship) => result || scholarship

console.log(students.map(a => a.scholarship).reduce(someScholarship))
