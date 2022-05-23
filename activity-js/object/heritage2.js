// Prototype chain
Object.prototype.attr0 = '0' // Avoid doing this!

const grandfather = { attr1: 'A' }
const father = { __proto__: grandfather, attr2: 'B', attr3: '3' }
const child = { __proto__: father, attr3: 'C' }
console.log(child.attr0, child.attr1, child.attr2, child.attr3)

const car = {
    speedActual: 0,
    speedMax: 200,
    speedUp(delta) {
        if (this.speedActual + delta <= this.speedMax) {
            this.speedActual += delta
        } else {
            this.speedActual = this.speedMax
        }
    },
    status() {
        return `${this.speedActual}Km/h of ${this.speedMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    speedMax: 324
}

const volvo = {
    model: 'V40',
    status() {
        return `${this.model}: ${this.status}`
    }
}

Object.setPrototypeOf(ferrari, car)
Object.setPrototypeOf(volvo, car)

console.log(ferrari)
console.log(volvo)

volvo.speedUp(100)
console.log(volvo.status())

ferrari.speedUp(300)
console.log(ferrari.status())
