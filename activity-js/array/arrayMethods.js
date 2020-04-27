const pilots = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilots.pop()
console.log(pilots)

pilots.push('Verstappen')
console.log(pilots)

pilots.shift() // Remove first!
console.log(pilots)

pilots.unshift('Hamilton')
console.log(pilots)

// Splice add and remove elements

// Add
pilots.splice(2, 0, 'Bottas', 'Massa')
console.log(pilots)

// Remove
pilots.splice(3, 1)
console.log(pilots)

const somePilots1 = pilots.splice(2) // New array
console.log(somePilots1)

const somePilots2 = pilots.splice(1, 4)
console.log(somePilots2)