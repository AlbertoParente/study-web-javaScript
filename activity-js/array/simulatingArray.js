const almostArray = { 0: 'Juliana', 1: 'Alberto', 2: 'Julia' }
console.log(almostArray)
Object.defineProperty(almostArray, 'toString', {
    value: function () { return Object.value(this) },
    enumerable: false
})

console.log(almostArray[0])

const myArray = ['Juliana', 'Alberto', 'Julia']
console.log(almostArray.toString(), myArray)
