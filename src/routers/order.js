const { Router } = require('express');
const { getOrders, createOrder } = require('../controllers/orders');
const authenticateToken = require('../middleware/authenticateToken');

const router = Router();

router.use(authenticateToken);

router.route('/').get(getOrders).post(createOrder);

module.exports = router;
