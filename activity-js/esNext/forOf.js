for (let letter of 'AlbertoParente') {
    console.log(letter)
}

const subjectsEcma = ['Map', 'Set', 'Promise']

for (let i in subjectsEcma) {
    console.log(i)
}

for (let subject of subjectsEcma) {
    console.log(subject)
}

const subjectsMap = new Map([
    ['Map', { approached: true }],
    ['Set', { approached: true }],
    ['Promise', { approached: false }]
])

for (let subject of subjectsMap) {
    console.log(subject)
}

for (let subject of subjectsMap.keys()) {
    console.log(subject)
}

for (let value of subjectsMap.values()) {
    console.log(value)
}

for (let [keys, value] of subjectsMap.entries()) {
    console.log((keys, value))
}

const s = new Set(['a', 'b', 'c'])
for (let letter of s) {
    console.log(letter)
}
