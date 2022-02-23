const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')
const itemRouter = require('./routes/store-router')

const app = express()
const apiPort = 2500

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
console.log(db)

app.get('/', (req, res) => {
    res.send('Hello Darkness my old Friend')
})

app.use('/api', itemRouter)

app.listen(apiPort, () => console.log('Server running on port ' + apiPort))