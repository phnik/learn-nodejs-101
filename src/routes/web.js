const express = require('express')
const { getHomepage, getHoiDanIt, getForm, createUser, getCreateUser, getAllUsers } = require('../controllers/homeController')

const router = express.Router();

router.get('/', getHomepage);
router.get('/hoidanit', getHoiDanIt);
// router.get('/testform', getForm)
router.get('/create', getCreateUser)
router.post('/create-user', createUser)
module.exports = router;