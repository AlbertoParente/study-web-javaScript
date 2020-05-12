const fs= require('fs')

const directory = __dirname + '/file.json'

// Synchronous...
const content = fs.readFileSync(directory, 'UTF-8')
console.log(content)

// Asynchronous...
fs.readFile(directory, 'UTF-8', (erro, content) => {
    const config = JSON.parse(content)
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./file.json')
console.log(config.db)

fs.readdir(__dirname, (erro, file) => {
    console.log('Coontent of folder...')
    console.log(file)
})