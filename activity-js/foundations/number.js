const weight1 = 1.0
const weight2 = Number('2.0')

console.log(weight1, weight2)
console.log(Number.isInteger(weight1), Number.isInteger(weight2))

const evaluation1 = 9.871
const evaluation2 = 6.871
const total = evaluation1 * weight1 + evaluation2 * weight2
const average = total / (weight1 + weight2)

console.log(average.toFixed(2))
console.log(average.toString()) // String convert
console.log(average.toString(2)) // Binary
console.log(typeof average)
