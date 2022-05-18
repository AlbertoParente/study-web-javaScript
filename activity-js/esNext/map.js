const technologies = new Map()
technologies.set('react', { framework: false })
technologies.set('angular', { framework: true })

console.log(technologies.react) // No
console.log(technologies.get('react').framework)

const brokenKeys = new Map([
    [function () { }, 'Função'],
    [{}, 'Object'],
    [123, 'Number']
])

brokenKeys.forEach((value, key) => {
    console.log(value, key)
})

console.log(brokenKeys.has(123))
brokenKeys.delete(123)
console.log(brokenKeys.has(123))
console.log(brokenKeys.size)

brokenKeys.set(123, 'a')
brokenKeys.set(123, 'b')
brokenKeys.set(157, 'b')
console.log(brokenKeys)
