const { Router } = require('express');

const {
  addCategory,
  deleteCategory,
  getCategories,
  getCategory,
  updateCategory,
} = require('../controllers/category');

const { validObjectId } = require('../middleware/validations');

const router = Router();
router.use('/:id', validObjectId);

router.route('/').post(addCategory).get(getCategories);
router
  .route('/:id')
  .get(getCategory)
  .put(updateCategory)
  .delete(deleteCategory);

module.exports = router;
