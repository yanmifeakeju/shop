const User = require('../models/User');

exports.addUser = async (req, res, next) => {
  const {
    name = undefined,
    email = undefined,
    password = undefined,
    phone = undefined,
    street = undefined,
    city = undefined,
    zipCode = undefined,
    country = undefined,
  } = req.body;

  try {
    const user = await User.create({
      name,
      email,
      password,
      phone,
      street,
      city,
      zipCode,
      country,
    });

    res.status(200).json({ success: true, data: user });
  } catch (error) {
    console.log(Error);
    res.send('An error occurred');
  }
};
