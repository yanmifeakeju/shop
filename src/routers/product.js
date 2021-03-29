/*
TODO:
Adavanced filtered, with featured and price
*/

const { Router } = require('express');
const {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/products');
const { validObjectId } = require('../middleware/validations');
const authenticateToken = require('../middleware/authenticateToken');

const router = Router();
router.use('/:id', authenticateToken);
router.use('/:id', validObjectId);

router.route('/').get(getProducts).post(addProduct);
router.route('/:id').get(getProduct).put(updateProduct).delete(deleteProduct);

module.exports = router;
