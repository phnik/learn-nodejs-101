const express = require('express')
const { getHomepage, getHoiDanIt, createUser, getCreateUser, getUpdatePage, postUpdateUser, postDeleteUser } = require('../controllers/homeController')

const router = express.Router();

router.get('/', getHomepage);
router.get('/hoidanit', getHoiDanIt);
// router.get('/testform', getForm)
router.get('/create', getCreateUser)
router.post('/create-user', createUser)
router.get('/update/:id', getUpdatePage);
router.post('/update-user', postUpdateUser)
router.post('/delete-user/:id', postDeleteUser)
// router.get('/delete')
module.exports = router;