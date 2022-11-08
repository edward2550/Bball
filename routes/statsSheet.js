const express = require('express')
const router = express.Router()
const upload = require("../middleware/multer")
const statsController = require('../controllers/stats') 
const statsSheetController = require('../controllers/statsSheet')
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, statsSheetController.getStats)

router.post('/createStats', upload.single("file"), statsSheetController.createStats)

router.put('/updateStats/:id', statsSheetController.updateStats)
// router.get('/statsSheet', ensureAuth, statsController.getStatsSheet)

router.delete("/deleteStats/:id", statsSheetController.deleteStats)



//dashboard router gonna be located in the stats cuz you gonna be able to use it here



module.exports = router