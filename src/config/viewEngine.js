const express = require('express')
const path = require('path')

const configViewEngine = (app) => {
    // config template engines\

    app.set('views', path.join('./src', 'views'));
    app.set('view engine', 'ejs')

    //config static files: images/css/js
    app.use(express.static(path.join('./src', 'public')));
}

module.exports = configViewEngine;