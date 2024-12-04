const connection = require('../config/db');

const getHomePage = (req, res) => {
    // res.send('Hello World with VietAnh & nodemon!')

    let users = []
    connection.query(
        'SELECT * FROM Users u',
        function (err, results, fields) {
            users = results;

            console.log(">>>Results HomePage = ", results); // results contains rows returned by server
            // console.log(">>>Fields = ", fields); // fields contains extra meta data about results, if available

            // console.log(">> check users: ", users)
            res.send(JSON.stringify(users))
        }
    );

}

const getABC = (req, res) => {
    res.send('check ABC')
}

const getDynamic = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomePage,
    getABC,
    getDynamic
}