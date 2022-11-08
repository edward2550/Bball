const express = require('express')
const router = express.Router()
const mvpController = require('../controllers/mvp') 
const { ensureAuth } = require('../middleware/auth')



router.post('/createMvp/:id', mvpController.createMvp)

module.exports = router