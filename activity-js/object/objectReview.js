// Dynamic collection of key/value pairs
const product = new Object

product.name = 'Chair'
product['Product brand'] = 'Generic'
product.price = 500

console.log(product)
delete product.price
delete product['Product brand']
console.log(product)

const car = {
    model: 'A5',
    value: '100000',
    owner: {
        name: 'Alberto Parente',
        age: 27,
        adress: {
            streetAdress: 'Teste',
            number: 01
        }
    },
    conductors: [{
        name: 'Juliana',
        age: 23
    }, {
        name: 'Maria',
        age: 30
    }],
    calculateInsuranceValue: function () {
        // ...
    }
}

car.owner.adress.number = 1000
car['owner']['adress']['streetAdress'] = 'Av teste'
console.log(car)

// delete car.conductors
delete car.owner.adress
delete car.calculateInsuranceValue
console.log(car)
console.log(car.conductors)
console.log(car.conductors.length)
