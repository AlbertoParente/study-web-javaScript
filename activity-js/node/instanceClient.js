const counterA = require('./instanceOnly')
const counterB = require('./instanceOnly')

const counterC = require('./instanceNew')()
const counterD = require('./instanceNew')()

counterA.inc()
counterA.inc()
console.log(counterA.value, counterB.value)

counterC.inc()
counterC.inc()
console.log(counterC.value, counterD.value)
