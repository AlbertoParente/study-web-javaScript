function Classroom(name, videoId) {
    this.name = name
    this.videoId = videoId
}

const classroom1 = new Classroom('Welcome', 123)
const classroom2 = new Classroom('GoodBye', 123)

console.log(classroom1, classroom2)

// Simulating the new method
function neww(f, ...params) {
    const obj = {}

    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const classroom3 = neww(Classroom, 'Welcome', 123)
const classroom4 = neww(Classroom, 'GoodBye', 456)

console.log(classroom3, classroom4)
