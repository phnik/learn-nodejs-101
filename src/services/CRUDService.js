const pool = require("../config/database");

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

module.exports = {
    getAllUsers, getUserById, updateUserById
}