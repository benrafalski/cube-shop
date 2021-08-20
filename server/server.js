const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const stripe = require('stripe')('sk_test_51JIbRbCeYChu5FtFnHRRu5AMFleCNJEp08fUvGQYbxgQTm8D9kCXYaPZj1TXyTMOwyhEuTBtzFWHKikcOnXcYKj4003g9Dfe0j')

const Users = require('./models/User.js')

const app = express()
const port = process.env.PORT || 8000

// middlewares
app.use(express.json()) // body parser
app.use(cors({ origin: true }))
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

// payment with stripe
app.post('/payments/create', async (req, res) => {
    const total = req.body.total
    console.log('Payment Request Recieved', total)
    
    if(total){
        try {
            const paymentIntent = await stripe.paymentIntents.create({
                amount: total, // in cents***
                currency: 'usd'
            })
            res.status(201).send({
                clientSecret: paymentIntent.client_secret
            })
        } catch(e) {
            return res.status(500).send({
                error: {
                    message: e.message
                }
            })
        }
    }
})


// listener
app.listen(port, () => {
    console.log(`listening on localhost:${port}`)
})