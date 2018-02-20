const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const router = require('./router')
const db = require('./db')
const PORT = 2020

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('dist'))

app.use('/api', router)

app.listen(PORT, () => console.log('listening port', PORT))
