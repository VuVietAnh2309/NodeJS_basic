const express = require('express')
const {getHomePage, getABC, getDynamic} = require('../controllers/homeControler')
const router = express.Router();

// GET METHOD, router.METHOD('/route', handler)
router.get('/homepage', getHomePage)
router.get('/abc', getABC)
router.get('/dynamic', getDynamic)

module.exports = router;
