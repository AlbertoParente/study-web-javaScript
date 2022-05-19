class Person {
    constructor(name) {
        this.name = name
    }

    speak() {
        console.log(`My name is ${this.name}`);
    }
}

const p1 = new Person('João!')
p1.speak()

const createPerson = name => {
    return {
        speak: () => console.log(`My name is ${name}`)
    }
}

const p2 = createPerson('João!')
p2.speak()
