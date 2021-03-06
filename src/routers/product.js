/*
TODO:
Adavanced filtering -> featured and price



*/
const { Router } = require('express');
const multer = require('multer');
const upload = require('../middleware/upload');

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

router
  .route('/')
  .get(getProducts)
  .post(
    upload.fields([
      { name: 'image', maxCount: 1 },
      { name: 'images', maxCount: 5 },
    ]),
    addProduct
  );
router.route('/:id').get(getProduct).put(updateProduct).delete(deleteProduct);

module.exports = router;
