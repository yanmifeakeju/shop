const { Router } = require('express');
const { getOrders, createOrder } = require('../controllers/orders');

const router = Router();

router.route('/').get(getOrders).post(createOrder);

module.exports = router;
