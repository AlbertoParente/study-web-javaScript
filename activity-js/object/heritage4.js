function MyObject() { }
console.log(MyObject.prototype)

const Obj1 = new MyObject
const Obj2 = new MyObject
console.log(Obj1.__proto__ === Obj2.__proto__)
console.log(MyObject.prototype === Obj1.__proto__)

MyObject.prototype.name = 'Anonymous'
MyObject.prototype.speak = function () {
    console.log(`Good Morning! My name is ${this.name}!`)
}

Obj1.speak()

Obj2.name = 'Dennys'
Obj2.speak()

const obj3 = {}
obj3.__proto__ = MyObject.prototype
obj3.name = 'obj3'
obj3.speak()

console.log((new MyObject).__proto__ === MyObject.prototype)
console.log(MyObject.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)
