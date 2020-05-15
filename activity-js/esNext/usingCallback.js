const http = require('http')

const getGroup = (letter, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letter}.json`
    http.get(url, res => {
        let result = ''

        res.on('data', dados => {
            result += dados
        })

        res.on('end', () => {
            callback(JSON.parse(result))
        })
    })
}

let names = []
getGroup('A', students => {
    names = names.concat(students.map(a => `A: ${a.nome}`))
    getGroup('B', students => {
        names = names.concat(students.map(a => `B: ${a.nome}`))
        getGroup('C', students => {
            names = names.concat(students.map(a => `C: ${a.nome}`))
            console.log(names)
        })
    })
})