const name = "Alberto"
const concatenation = "Hello " + name + "!"
const template = `
    Hello
    ${name}!`

console.log(concatenation, template)

// Expressions...

console.log(`1 + 1 = ${1 + 1}`)

const up = text => text.toUpperCase()

console.log(`Hey... ${up('Attention')}!`)
