const express = require('express')
const { getHomepage, getHoiDanIt, createUser, getCreateUser, getUpdatePage, postUpdateUser, postDeleteUser, postHandleRemoveUser } = require('../controllers/homeController')

const router = express.Router();

router.get('/', getHomepage);
router.get('/hoidanit', getHoiDanIt);
router.get('/create', getCreateUser)
router.post('/create-user', createUser)
router.get('/update/:id', getUpdatePage);
router.post('/update-user', postUpdateUser)
router.post('/delete-user/:id', postDeleteUser)
router.post('/delete-user', postHandleRemoveUser)

module.exports = router;