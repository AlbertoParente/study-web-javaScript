const product = [
    { name: 'Notebook', price: 2499, fragile: true },
    { name: 'Ipad Pro', price: 4199, fragile: true },
    { name: 'Glass', price: 12.49, fragile: true },
    { name: 'Plastic Cup', price: 18.99, fragile: false }
]

console.log(product.filter(function (p) {
    return false
}))

const expensive = product => product.price >= 500
const fragile = product => product.fragile

console.log(product.filter(expensive).filter(fragile))
