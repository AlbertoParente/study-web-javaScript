const http = require('http')

const getGroup = letter => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letter}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let result = ''
    
            res.on('data', dados => {
                result += dados
            })
    
            res.on('end', () => {
                try {
                    resolve(JSON.parse(result))
                } catch(e) {
                    reject(e)
                }
            })
        })
    })
}

// let names = []
// getGroup('A').then(students => {
//     names = names.concat(students.map(a => `A: ${a.nome}`))
//     getGroup('B').then(students => {
//         names = names.concat(students.map(a => `B: ${a.nome}`))
//         getGroup('C').then(students => {
//             names = names.concat(students.map(a => `C: ${a.nome}`))
//             console.log(names)
//         })
//     })
// })

Promise.all([getGroup('A'), getGroup('B'), getGroup('C')])
    .then(group => [].concat(...group))
    .then(students => students.map(student => student.nome))
    .then(names => console.log(names))
    .catch(e => console.log(e.message))

getGroup('D').catch(e => console.log(e.message))