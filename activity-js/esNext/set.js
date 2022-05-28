// Does not accept repetition / not indexed
const teams = new Set()

teams.add('São Paulo')
teams.add('Corintians').add('Santos').add('Palmeiras')
teams.add('Vasco')
teams.add('São Paulo')
console.log(teams)
console.log(teams.size)
console.log(teams.has('vasco'))
console.log(teams.has('Vasco'))
teams.delete('Vasco')
console.log(teams.has('Vasco'))

const names = ['Alberto', 'Juliana', 'Graziella']
const namesSet = new Set(names)

console.log(namesSet)
