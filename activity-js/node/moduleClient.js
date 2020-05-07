const moduleA = require('./moduleA')
const moduleB = require('./moduleB')

console.log(moduleA.hello)
console.log(moduleA.welcome)
console.log(moduleA.bye)
console.log(moduleA.hello)
console.log(moduleA)

console.log(moduleB.goodMorning)
console.log(moduleB.goodNight())
console.log(moduleB)