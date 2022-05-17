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
                } catch (e) {
                    reject(e)
                }
            })
        })
    })
}

let getStudents = async () => {
    const groupA = await getGroup('A')
    const groupB = await getGroup('B')
    const groupC = await getGroup('C')
    return [].concat(groupA, groupB, groupC)
}

getStudents()
    .then(studensts => studensts.map(student => student.nome))
    .then(names => console.log(names))
    .catch(e => console.log(e.message))
