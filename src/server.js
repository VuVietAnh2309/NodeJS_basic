const express = require('express');
const path = require('path');
require('dotenv').config()
// import express from 'express';

const app = express(); // app express
const port = process.env.PORT || 8888; //port => hard code, uat = user accept testing
const hostname = process.env.HOST_NAME;

// console.log(">>> check env: ", process.env)

// config template engines
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// Khai bao route
app.get('/', (req, res) => {
    res.send('Hello World with VietAnh!')
})

app.get('/abc', (req, res) => {
    res.send('check ABC!')
})

app.get('/dynamic', (req, res) => {
    // res.send('<h1>Dynamic VietAnh <\h1>')
    res.render('sample.ejs')
})

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})