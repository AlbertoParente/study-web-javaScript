function CreatePerson(name, price) {
    return {
        name,
        price,
        discount: 0.1
    }
}

console.log(CreatePerson('Notebook', 2199.49))
console.log(CreatePerson('ipad', 1199.49))
