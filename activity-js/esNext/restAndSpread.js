// Spread with Object
const employees = { name: 'Alberto', salary: 1350.00 }
const clone = { active: true, ...employees }

console.log(clone)

// Spread with Array
const groupA = ['João', 'Alberto', 'Juliana']
const groupFinal = ['Graziella', ...groupA, 'Pedro']

console.log(groupFinal)
