const mongoose = require('mongoose')
const { dbURI } = require('../config')

mongoose.connect(dbURI)
mongoose.Promise = global.Promise
const db = mongoose.connection
db.on('error', console.error.bind(console, 'mongo connection error'))

module.exports = db;
