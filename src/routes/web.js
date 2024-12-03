const express = require('express')

const router = express.Router();

// Khai bao route
router.get('/', (req, res) => {
    res.send('Hello World with VietAnh & nodemon!')
})

router.get('/abc', (req, res) => {
    res.send('check ABC!')
})

router.get('/dynamic', (req, res) => {
    // res.send('<h1>Dynamic VietAnh <\h1>')
    res.render('sample.ejs')
})

module.exports = router;
