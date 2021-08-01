const express = require('express')
const mongoose = require('mongoose')

const app = express()
const port = process.env.PORT || 8000

// middlewares
app.use(express.json()) // body parser
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', '*')
    res.setHeader('Access-Control-Allow-Methods', 'PUT', 'POST')
    next()
})

// mongoose config
const connectionURL = 'mongodb://localhost/cube-shop'
mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
let db = mongoose.connection

// check db connection
db.once('open', () => {
    console.log(`connected to ${connectionURL}`)
})

// check for db errors
db.on('error', () => {
    console.log(err)
})

// routes
app.get('/', (req, res) => {
    res.status(200).send('cube shop is open!')
})

// listener
app.listen(port, () => {
    console.log(`listening on localhost:${port}`)
})