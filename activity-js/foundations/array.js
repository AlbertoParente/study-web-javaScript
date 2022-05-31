const value = [7.7, 8.9, 6.3, 9.2]

console.log(value[0], value[3])
console.log(value[4])
value[4] = 10
console.log(value)
console.log(value.length) // Array size
value.push({ id: 3 }, false, null, 'teste') // Include new element
console.log(value)
console.log(value.pop()) // Remove last element
console.log(value)
delete value[0]
console.log(value)
value[10] = 13
console.log(value)
console.log(typeof value)
