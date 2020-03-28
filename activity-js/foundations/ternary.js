const result1 = note => note >= 7 ? 'Aprovado' : 'Reprovado'

console.log(result1(7.1))
console.log(result1(6.7))

// or

const result2 = note => {
    return note >= 7 ? 'Aprovado' : 'Reprovado'
}
console.log(result2(7.1))
console.log(result2(6.7))