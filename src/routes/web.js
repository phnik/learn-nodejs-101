const express = require('express')
const { getHomepage, getHoiDanIt, getForm } = require('../controllers/homeController')

const router = express.Router();

router.get('/', getHomepage);
router.get('/hoidanit', getHoiDanIt);
router.get('/testform', getForm)
module.exports = router;