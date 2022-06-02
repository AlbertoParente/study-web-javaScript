const father = { name: 'Alberto', colorHair: 'Black' }
const daughter1 = Object.create(father)

daughter1.name = 'Juliana'
console.log(daughter1.colorHair)

const daughter2 = Object.create(father, {
    name: { value: 'Julia', writable: false, enumerable: true }
})

console.log(daughter2.name)
daughter2.name = 'Amanda'
console.log(`${daughter2.name} wiht hair ${daughter2.colorHair}`)
console.log(Object.keys(daughter1))
console.log(Object.keys(daughter2))

for (let key in daughter2) {
    daughter2.hasOwnProperty(key) ?
        console.log(key) : console.log(`By inheritance: ${key}`)
}
