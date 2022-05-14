Array.prototype.filter2 = function (callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}

const product = [
    { name: 'Notebook', price: 2499, fragile: true },
    { name: 'Ipad Pro', price: 4199, fragile: true },
    { name: 'Glass', price: 12.49, fragile: true },
    { name: 'Plastic Cup', price: 18.99, fragile: true }
]

const car = product => product.price >= 500
const fragile = product => product.fragile

console.log(product.filter2(car).filter2(fragile))
