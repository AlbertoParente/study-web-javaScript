Array.prototype.map2 = function (callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const cart = [
    '{ "name": "Rubber", "price": 3.45 }',
    '{ "name": "Book", "price": 13.90 }',
    '{ "name": "Pencil Kit ", "price": 41.22 }',
    '{ "name": "Pen", "price": 7.50 }'
]

// Return a Array wiht prices

const forObject = json => JSON.parse(json)
const onlyPrice = product => product.price

const result = cart.map2(forObject).map2(onlyPrice)
console.log(result)
