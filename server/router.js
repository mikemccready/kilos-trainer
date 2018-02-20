const express = require('express')
const router = express.Router()

const userController = require('./controllers/user-controller')
const sessionController = require('./controllers/session-controller')

router.post('/users/create', userController.create)
router.post('/sessions/create', sessionController.create)

module.exports = router
