const port = 3003

const express = require('express')
const app = express()
const database = require('./database')

app.get('/products', (req, res, next) => {
    res.send(database.getProductsAll())
})

app.get('/products/:id', (req, res, next) => {
    res.send(database.getProductId(req.params.id))
})

app.post('/products', (req, res, next) => {
    const product = database.saveProduct({
        name: req.body.name,
        price: req.body.price
    })
    res.send(product) // Convert in JSON
})

app.listen(port, () => {
    console.log(`Server running in port: ${port}.`)
}) 