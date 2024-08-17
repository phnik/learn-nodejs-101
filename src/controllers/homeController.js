const pool = require("../config/database");
const connection = require("../config/old");
// const { unsubscribe } = require("../routes/web");
const { getAllUsers, getUserById, updateUserById } = require('../services/CRUDService')
const getHomepage = async (req, res) => {
    //simple query
    // getAllUsers(req, res);
    let results = await getAllUsers();

    return res.render('home.ejs', { listUsers: results });
}

const getHoiDanIt = (req, res) => {
    res.render('sample.ejs')
}


const createUser = (req, res) => {
    console.log(req.body);
    let { email, myName, city } = req.body;
    console.log('test: ', email, myName, city);
    connection.query(
        `INSERT INTO Users (email, name, city) VALUES(?, ?, ?)`,
        [email, myName, city],
        (err, results) => {
            console.log(results);
        }
    )
    res.send('create a new user!')
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
    // connection.query(
    //     `INSERT INTO Users (email, name, city) VALUES(?, ?, ?)`,
    //     [email, myName, city],
    //     (err, results) => {
    //         console.log(results);
    //     }
    // )
    console.log('Updated User:', results);
    res.redirect('/');
}

const postDeleteUser = (req, res) => {
    res.send('Delete User!');
}
module.exports = {
    getHomepage, getHoiDanIt, createUser, getCreateUser, getUpdatePage, postUpdateUser, postDeleteUser
}