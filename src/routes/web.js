const express = require('express')
const { getHomePage, getABC, getDynamic, postCreateUser, postRemoveUser,
    getCreatePage, getUpdatePage, postUpdateUser, postDeleteUser } = require('../controllers/homeControler')
const router = express.Router();

// GET METHOD, router.METHOD('/route', handler)
router.get('/', getHomePage);
router.get('/abc', getABC);
router.get('/dynamic', getDynamic);

//Create
router.get('/create', getCreatePage);
router.post('/create-user', postCreateUser);

// Update
router.post('/update-user', postUpdateUser);
router.get('/update/:id', getUpdatePage);

// Delete
router.post('/delete-user', postRemoveUser);
router.post('/delete-user/:id', postDeleteUser);


module.exports = router;
