const espress = require('express')
const app = espress()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

app.post('/users', (req, resp) => {
    console.log(req.body)
    resp.send('<h1>Successfully Created...!</h1>')
})

app.post('/users/:id', (req, resp) => {
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>Successfully Edited...!</h1>')
})

app.listen(3003)
