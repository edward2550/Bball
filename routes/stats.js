const express = require('express')
const router = express.Router()
const upload = require("../middleware/multer")
const statsController = require('../controllers/stats') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, statsController.getStats)

router.get('/statsSheet', ensureAuth, statsController.getStatsSheet)
router.put('/updateStats/:id', statsController.updateStats)
router.post('/createStats', upload.single("file"), statsController.createStats)
router.delete('/deleteStats/:id', statsController.deleteStats)

//dashboard router gonna be located in the stats cuz you gonna be able to use it here



module.exports = router