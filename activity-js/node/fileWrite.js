const fs = require('fs')

const product = {
    name: 'Notebook',
    price: 2500.00,
    descont: 0.15
}

fs.writeFile(__dirname + '/generatedFile.json', JSON.stringify(product), err => {
    console.log(err || 'Saved File...!')
})