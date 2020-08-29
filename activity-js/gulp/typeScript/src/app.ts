import { Car, Vendible } from './product'

function show(v: Vendible) {
    console.log(`${v.name} costs ${v.price}!`)
}

const c = new Car
c.name = 'Civic'
c.price = 89499.00
show(c)