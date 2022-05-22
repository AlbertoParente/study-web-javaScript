require('./global')

console.log(myApp.hello())

myApp.name = 'github.com/AlbertoParente' // Does not change due to freeze
console.log(myApp.name)
