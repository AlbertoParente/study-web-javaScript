function getRandomIntegerBetween(min, max) {
    const value = Math.random() * (max - min) + min
    return Math.floor(value)
}

let option = 0

while (option != -1) {
    option = getRandomIntegerBetween(-1, 10)
    console.log(`Chosen option was ${option}.`)
}

console.log('To the next!')
