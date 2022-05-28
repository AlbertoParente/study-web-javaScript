const person = {
    greeting: 'Good Morning!',
    speak() {
        console.log(this.greeting)
    }
}

person.speak()

const speak = person.speak

speak() // Conflict between paradigms: functional and OO

const speakOfPerson = person.speak.bind(person)

speakOfPerson()
