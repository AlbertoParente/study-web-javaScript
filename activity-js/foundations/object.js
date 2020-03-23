const product1 = {}
product1.name = 'Celular Ultra Mega'
product1.price = 4998.90
product1['legal discount'] = 0.40

console.log(product1)

const product2 = {
    name: 'Camisa Polo',
    price: 79.90,
}

console.log(product2)

const product3 = {
    name: 'Calça',
    price: 80.00,
    obj: {
        category1: 'Male',
        obj: {
            category2: 'Female',
        }
    }
}

console.log(product3)