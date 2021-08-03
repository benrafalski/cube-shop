const express = require('express')
const mongoose = require('mongoose')

const Users = require('./models/User.js')

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

// GET - all users
app.get('/users', (req, res) => {
    Users.find((err, data) => {
        err 
            ? res.status(500).send(err)
            : res.status(200).send(data)
    })
})

// POST - new user
app.post('/users', (req, res) => {
    const dbUser = req.body;
    
    Users.create(dbUser, (err, data) => {
        err
            ? res.status(500).send(err)
            : res.status(201).send(data)
    })
})

// listener
app.listen(port, () => {
    console.log(`listening on localhost:${port}`)
})