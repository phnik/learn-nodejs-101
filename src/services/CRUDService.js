const pool = require("../config/database");

const getCreateUserDB = async (email, userName, city) => {
    let [results, fields] = await pool.query('INSERT INTO Users (email, name, city) VALUES(?, ?, ?)', [email, myName, city]);
    return results;
}
const getAllUsers = async () => {
    let [results, fields] = await pool.query('SELECT * FROM Users');
    return results;
}

const getUserById = async (userId) => {
    let [results, fields] = await pool.query('SELECT * FROM Users WHERE id = ?', [userId]);
    let user = results && results.length > 0 ? results[0] : {};
    return user;
}

const updateUserById = async (userId, email, userName, city) => {
    let [results, fields] = await pool.query('UPDATE Users SET email = ?, name = ?, city = ? WHERE id = ?', [email, userName, city, userId]);
    return results;
}

const deleteUserById = async (userId) => {
    let [results, fields] = await pool.query('DELETE FROM Users WHERE id = ?', [userId]);
    return results;
}

module.exports = {
    getCreateUserDB, getAllUsers, getUserById, updateUserById, deleteUserById
}