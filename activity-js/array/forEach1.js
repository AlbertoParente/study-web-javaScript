const approveds = [ 'Juliana', 'Alberto', 'Julia', 'Graziella' ]

approveds.forEach(function(name, index) {
    console.log(`${index + 1}) ${name}`)
})

approveds.forEach(function(name, index, array) {
    console.log(`${index + 1}) ${name}`)
    console.log(array)
})

approveds.forEach(name => console.log(name))

const printApproveds = approved => console.log(approved)
approveds.forEach(printApproveds)