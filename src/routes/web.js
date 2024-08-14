const express = require('express')
const { getHomepage, getHoiDanIt, getForm, createUser } = require('../controllers/homeController')

const router = express.Router();

router.get('/', getHomepage);
router.get('/hoidanit', getHoiDanIt);
// router.get('/testform', getForm)
router.post('/testform', createUser)
module.exports = router;