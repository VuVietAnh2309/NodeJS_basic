require('dotenv').config()

const express = require('express');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const connection = require('./config/db');

const app = express(); // app express
const port = process.env.PORT || 8888; //port => hard code, uat = user accept testing
const hostname = process.env.HOST_NAME;

// config template
configViewEngine(app);

// Khai bao Route
app.use('/', webRoutes);
// app.use('/v2', webRoutes);


//   Simple query connection 
// connection.query(
//     'SELECT * FROM Users u',
//     function (err, results, fields) {
//         console.log(">>>Results = ", results); // results contains rows returned by server
//         // console.log(">>>Fields = ", fields); // fields contains extra meta data about results, if available
//     }
// );


app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})