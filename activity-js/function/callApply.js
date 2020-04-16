function getPrice(impost = 0, coin = 'R$') {
    return `${coin} ${this.price * (1 - this.desc) * (1 + impost)}`
}

const product = {
    name: 'Notebook',
    price: 3500,
    desc: 0.15,
    getPrice
}

global.price = 20
global.desc = 0.1
console.log(getPrice())
console.log(product.getPrice())

const car = { price: 5000, desc: 0.20 }

console.log(getPrice.call(car))
console.log(getPrice.apply(car))

console.log(getPrice.call(car, 0.17, '$'))
console.log(getPrice.apply(car, [0.17, '$']))