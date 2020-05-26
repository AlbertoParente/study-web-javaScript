const espress = require('express')
const app = espress()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

app.post('/users', (req, resp) => {
    console.log(req.body)
    resp.send('<h1>Success</h1>')
})

app.listen(3003)