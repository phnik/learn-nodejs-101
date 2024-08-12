const express = require('express')
const { getHomepage, getHoiDanIt } = require('../controllers/homeController')

const router = express.Router();

router.get('/', getHomepage);
router.get('/hoidanit', getHoiDanIt);

module.exports = router;