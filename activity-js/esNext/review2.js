// Arrow Function
const sum = (a, b) => a + b
console.log(sum(2, 3))

// Arrow Function (this)
const lexical1 = () => console.log(this === exports)
const lexical2 = lexical1.bind({})
lexical1()
lexical2()

// Parameters default
function log(text = 'Node') {
    console.log(text)
}
log()
log('I am stronger...!')

// Operator rest
function total(...numbers) {
    let total = 0
    numbers.forEach(element => total += element)
    return total
}
console.log(total(2, 3, 4, 5))
