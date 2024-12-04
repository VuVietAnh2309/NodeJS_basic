const connection = require('../config/db')

const getAllUsers = async () => {
    let [results, fields] = await connection.query('select * from Users');
    return results;
}

const getUserById = async (userId) => {
    let [results, fields] = await connection.query('select * from Users where id = ?', [userId]);
    // console.log(">>>Check results: ", results)
    let user = results && results.length > 0 ? results[0] : {};

    return user;
}

const updateUserById = async (email, name, city, userId) => {
    let [results, fields] = await connection.query(
        `UPDATE Users
        SET email = ?, name = ?, city = ?
        WHERE id = ?`, [email, name, city, userId]
    );
}

const deleteUserById = async(id) => {
    let [results, fields] = await connection.query(
        ` DELETE FROM Users WHERE id = ? `, [id], // 3 tham số được lấy từ bên trên
    );
}

module.exports = {
    getAllUsers, getUserById, updateUserById, deleteUserById
}