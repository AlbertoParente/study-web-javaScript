const school = [{
    name: 'Class C1',
    students: [{
        name: 'Alberto',
        note: 8.1
    }, {
        name: 'Juliana',
        note: 9.3
    }]
}, {
    name: 'Class C2',
    students: [{
        name: 'Pedro',
        note: 8.9
    }, {
        name: 'Gabriella',
        note: 7.3
    }]
}]

const getNoteFromStudent = student => student.note
const getNotesFromClass = theClass => theClass.students.map(getNoteFromStudent)

const notes1 = school.map(getNotesFromClass)
console.log(notes1)

console.log([].concat([8.1, 9.3], [8.9, 7.3]))

Array.prototype.flatMap = function (callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notes2 = school.flatMap(getNotesFromClass)
console.log(notes2)
