const pool = require("../config/database");
const connection = require("../config/old");
const { getAllUsers } = require('../services/CRUDService')
const getHomepage = async (req, res) => {
    //simple query
    // getAllUsers(req, res);
    let results = await getAllUsers();

    return res.render('home.ejs', { listUsers: results });
}

const getHoiDanIt = (req, res) => {
    res.render('sample.ejs')
}

const getForm = (req, res) => {
    pool.query(
        'SELECT * FROM Users;',
        function (err, results, fields) {
            console.log(">> results =\n", results);
            res.send(JSON.stringify(results));
        }
    );
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

// const getAllUsers = async (req, res) => {
//     const [results, fields] = await pool.query('select * from Users;');
//     console.log("check results:", results);
//     // console.log("check fields:", fields);
// }
module.exports = {
    getHomepage, getHoiDanIt, getForm, createUser, getCreateUser, getAllUsers
}