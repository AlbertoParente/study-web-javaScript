let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

console.log(!true)
console.log(!!true)

console.log(!false)
console.log(!!false)

isAtivo = 1
console.log(!!isAtivo)

console.log("It's true...")
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'text')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log("It's false...")
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log("To finish...")
console.log(!!('' || null || 0 || ' '))

let name = ''
console.log(name || 'Unknown')
name = 'AlbertoParente'
console.log(name || 'Unknown')