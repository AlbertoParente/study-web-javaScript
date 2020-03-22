const name = "Alberto"
const concatenation = "Olá " + name + "!"
const template = `
    Olá
    ${name}!`

console.log(concatenation, template)

// Expressions...

console.log(`1 + 1 = ${1 + 1}`)

const up = text => text.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)