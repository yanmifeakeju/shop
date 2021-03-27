const { Router } = require('express');
const { model } = require('mongoose');
const { addUser } = require('../controllers/users');

const router = Router();

router.route('/').post(addUser);

module.exports = router;
