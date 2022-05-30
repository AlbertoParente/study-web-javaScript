console.log(typeof Array, typeof new Array, typeof [])

let approved = new Array('Juliana', 'Alberto', 'Vitoria')

console.log(approved)
approved = ['Juliana', 'Alberto', 'Vitoria']
console.log(approved[0])
console.log(approved[1])
console.log(approved[2])
console.log(approved[3])
approved[3] = 'Alberto Parente'
approved.push('Julia')
console.log(approved.length)
approved[9] = 'Dennys'
console.log(approved.length)
console.log(approved[8] === undefined)
console.log(approved)
approved.sort()
console.log(approved)
delete approved[1]
console.log(approved[1])
console.log(approved[2])
approved = ['Juliana', 'Alberto', 'Vitoria']
approved.splice(1, 1)
console.log(approved)
approved = ['Juliana', 'Alberto', 'Vitoria']
approved.splice(1, 2)
console.log(approved)
approved = ['Juliana', 'Alberto', 'Vitoria']
approved.splice(1, 1, 'Element1', 'Element2')
console.log(approved)
