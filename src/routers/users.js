const { Router } = require('express');
const {
  addUser,
  getUser,
  getUsers,
  loginUser,
} = require('../controllers/users');
const { validObjectId } = require('../middleware/validations');

const router = Router();

router.route('/').post(addUser).get(getUsers);
router.route('/login').post(loginUser);
router.route('/:id').get(validObjectId, getUser);

module.exports = router;
