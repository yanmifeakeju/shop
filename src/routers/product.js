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
} = require('../controllers/product');
const { validObjectId } = require('../middleware/validations');

const router = Router();
router.use('/:id', validObjectId);

router.route('/').get(getProducts).post(addProduct);
router.route('/:id').get(getProduct).put(updateProduct).delete(deleteProduct);

module.exports = router;
