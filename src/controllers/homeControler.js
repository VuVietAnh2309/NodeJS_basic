const { get } = require('http');
const connection = require('../config/db');
const { getAllUsers, getUserById, updateUserById, deleteUserById } = require('../services/crud');

const getHomePage = async (req, res) => {
    let results = await getAllUsers()

    return res.render('home.ejs', { listUsers: results })
}

const getABC = (req, res) => {
    res.send('check ABC')
}

const getDynamic = (req, res) => {
    res.render('sample.ejs')
}


const postCreateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;

    console.log('>>>email =  ', email, '>>>name = ', name, '>>>city: ', city)

    // let {email, name. city} = req.body;

    // connection.query(
    //     'SELECT * FROM Users u',
    //     function (err, results, fields) {
    //         console.log(">>>Results = ", results); // results contains rows returned by server
    //         // console.log(">>>Fields = ", fields); // fields contains extra meta data about results, if available
    //     }

    let [results, fields] = await connection.query(
        ` INSERT INTO Users (email, name, city) VALUE (?, ?, ?) `, [email, name, city], // 3 tham số được lấy từ bên trên
    );

    console.log(">>>Check results: ", results)

    res.send('Created user succeed !')
}

const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

const getUpdatePage = async (req, res) => {
    const userId = req.params.id;

    let user = await getUserById(userId)

    res.render('edit.ejs', { userEdit: user })
}

const postUpdateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    let userId = req.body.userId;

    console.log('>>>email =  ', email, '>>>name = ', name, '>>>city: ', city, '>>>userId: ', userId)

    await updateUserById(email, name, city, userId);

    res.redirect('/');
}

const postDeleteUser = async (req, res) => {
    const userId = req.params.id;
    let user = await getUserById(userId);

    res.render('delete.ejs', { userEdit: user })
}

const postRemoveUser = async (req, res) => {
    const id = req.body.userId;

    await deleteUserById(id);
    res.redirect('/')
}



module.exports = {
    getHomePage, getABC, getDynamic, postUpdateUser,
    postCreateUser, getCreatePage, getUpdatePage, postDeleteUser, postRemoveUser
}