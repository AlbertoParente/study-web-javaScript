const github = "AlbertoParente"

console.log(github.charAt(4))
console.log(github.charAt(14))
console.log(github.charCodeAt(3)) // Table unicode
console.log(github.indexOf('t'))
console.log(github.substring(1))
console.log(github.substring(0, 7))
console.log('github.com/'.concat(github))
// or
console.log('github' + '.com/' + github)
console.log('github.com/'.concat(github.replace('A', 'a')))
console.log('Joao, Alberto, Parente, Filho'.split(','))
