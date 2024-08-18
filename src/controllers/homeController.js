const pool = require("../config/database");
const connection = require("../config/old");
// const { unsubscribe } = require("../routes/web");
const { getCreateUser, getAllUsers, getUserById, updateUserById, deleteUserById } = require('../services/CRUDService')
const getHomepage = async (req, res) => {
    let results = await getAllUsers();
    return res.render('home.ejs', { listUsers: results });
}

const getHoiDanIt = (req, res) => {
    res.render('sample.ejs')
}


const createUser = (req, res) => {
    console.log(req.body);
    let { email, myName, city } = req.body;
    getCreateUserDB(email, myName, city);
    res.redirect('/');
}

const getCreateUser = (req, res) => {
    res.render('create.ejs')
}

const getUpdatePage = async (req, res) => {

    const userId = req.params.id;
    let user = await getUserById(userId);
    console.log(user);
    res.render('update.ejs', { userEdit: user });
}

const postUpdateUser = async (req, res) => {
    console.log("check req body:", req.body);
    let { id, email, myName, city } = req.body;
    console.log('test: ', id, email, myName, city);
    let results = await updateUserById(id, email, myName, city);
    console.log('Updated User:', results);
    res.redirect('/');
}

const postDeleteUser = async (req, res) => {
    const userId = req.params.id;
    let user = await getUserById(userId);
    res.render('delete.ejs', { user: user })
}

const postHandleRemoveUser = async (req, res) => {
    let results = await deleteUserById(req.body.id);
    console.log('check results delete:', results);
    res.redirect('/');
}
module.exports = {
    getHomepage, getHoiDanIt, createUser, getCreateUser, getUpdatePage, postUpdateUser, postDeleteUser, postHandleRemoveUser
}