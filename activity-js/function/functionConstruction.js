function Car(maximumSpeed = 200, delta = 5) {
    let maximumSpeed = 0

    this.sppedUp = function () {
        if (currentSpeed + delta <= maximumSpeed) {
            currentSpeed += delta
        } else {
            currentSpeed = maximumSpeed
        }
    }

    this.getCurrentSpeed = function () {
        return currentSpeed
    }
}

const uno = new Car
uno.sppedUp()
console.log(uno.getCurrentSpeed())

const ferrari = new Car(350, 20)
ferrari.sppedUp()
ferrari.sppedUp()
ferrari.sppedUp()
console.log(uno.getCurrentSpeed())

console.log(typeof Car)
console.log(typeof ferrari)
