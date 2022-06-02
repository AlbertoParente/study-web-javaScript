class Grandfather {
    constructor(surname) {
        this.surname = surname
    }
}

class Father extends Grandfather {
    constructor(surname, profession = 'Teacher') {
        super(surname)
        this.profession = profession
    }
}

class Child extends Father {
    constructor() {
        super('Alberto')
    }
}

const child = new Child

console.log(child)
