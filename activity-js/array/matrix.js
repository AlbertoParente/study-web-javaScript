function Person(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
}

var me = new Person('John', 'Smith', 'Alberto')

console.table(me)

// with array of arrays
var people = [['John', 'Smith'], ['Jane', 'Doe']]

console.table(people)
