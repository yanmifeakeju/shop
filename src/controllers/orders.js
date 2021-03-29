const Order = require('../models/Order');

exports.createOrder = async (req, res, next) => {
  try {
    console.log(req.body);

    res.send('creating an new order');
  } catch (error) {}
};

exports.getOrder = async (req, res, next) => {};

exports.getOrders = async (req, res, next) => {};

exports.updateOrders = async (req, res, next) => {};

exports.deleteOrders = async (req, res, next) => {};

// (async () => {
//   const orders = [
//     new OrderItem({
//       quantity: 5,
//       product: '605cfc77f1c85587d2cb58f4',
//     }),
//     new OrderItem({
//       quantity: 5,
//       product: '605cfc77f1c85587d2cb58f4',
//     }),
//     new OrderItem({
//       quantity: 5,
//       product: '605cfc77f1c85587d2cb58f4',
//     }),
//   ];

//   const ordered = Promise.all(
//     orders.map(async (order) => {
//       await order.save();
//       return order._id;
//     })
//   );

//   console.log(await ordered);
// })();

// console.log(order);

// (async () => {
//   const order = await Order.create({
//     user: '605ff89269ab390d65ae22bd',
//     items: [
//       {
//         product: '605cfc77f1c85587d2cb58f4',
//         quantity: 3,
//       },
//       {
//         product: '605cfc77f1c85587d2cb58f4',
//         quantity: 3,
//       },
//       {
//         product: '605cfc77f1c85587d2cb58f4',
//         quantity: 3,
//       },
//     ],
//   });

//   // console.log(order);

//   const orderDetails = await Order.findById(order._id).populate(
//     'items.product',
//     'name price'
//   );

//   console.log(
//     orderDetails.items.forEach((item) => {
//       console.log(item.quantity * item.product.price);
//     })
//   );
// })();
