const User = require('../models/User');

exports.addUser = async (req, res, next) => {
  const {
    name = undefined,
    email = undefined,
    password = undefined,
    apartment = undefined,
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
      apartment,
      street,
      city,
      zipCode,
      country,
    });

    res.status(201).json({ success: true, data: user });
  } catch (error) {
    console.log(error);
    res.send('An error occurred');
  }
};

exports.getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }

    res.status(200).json({ success: true, data: user });
  } catch (error) {
    console.log(error);
    res.send('An error occurred');
  }
};

exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find();

    res.status(200).json({ success: true, data: users });
  } catch (error) {
    console.log(error);
    res.send('An error occurred');
  }
};

exports.loginUser = async (req, res, next) => {
  const { email = undefined, password = undefined } = req.body;
  try {
    const user = await User.findOne({ email }).select('password');

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: 'User not found' });
    }

    const verifyPassword = await user.matchPassword(password);

    if (!verifyPassword) {
      return res
        .status(400)
        .json({ success: false, message: 'Invalid Credentials' });
    }

    return res
      .status(200)
      .json({ success: true, data: { token: user.getToken() } });
  } catch (error) {
    console.log(error);
    res.send('An Error Occurred');
  }
};
