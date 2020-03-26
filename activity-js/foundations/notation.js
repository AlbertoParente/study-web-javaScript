console.log(Math.ceil(6.1))

const object1 = {

}

object1.name = 'Boll 1'
// object1['name'] = 'Boll 2'

console.log(object1.name)

function object (name) {
    this.name = name
    this.exec = function() {
        console.log('Exec...')
    }
}

const object2 = new object('chair')
const object3 = new object('desk')
console.log(object2.name)
console.log(object3.name)
object3.exec()