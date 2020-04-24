// Using anotation literal
const obj1 = {}
console.log(obj1)

// Object in JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Function Construction
function Product(name, price, desc) {
    this.name = name
    this.getPriceWithDescount = () => {
        return price * (1 - desc)
    }
}

const p1 = new Product('Shirt', 7.99, 0.10)
const p2 = new Product('Notebook', 3000, 0.10)
console.log(p1.getPriceWithDescount(), p2.getPriceWithDescount())

// Finction Factory
function createEmployee(name, baseSalary, faults) {
    return {
        name,
        baseSalary,
        faults,
        getSalaty() {
            return (baseSalary / 30) * (30 - faults)
        }
    }
}

const f1 = new createEmployee('João', 8.000, 4)
const f2 = new createEmployee('Alberto', 12000, 1)
console.log(f1.getSalaty(), f2.getSalaty())

// Object.create
const daughter = Object.create(null)
daughter.name = 'Juliana'
console.log(daughter)

// Function that returns object
const fromJSON = JSON.parse(`{"info": "I am wiht JSON"}`)
console.log(fromJSON.info)