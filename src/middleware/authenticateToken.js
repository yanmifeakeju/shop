const User = require('../models/User');
const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  console.log('here');

  const authorization =
    req.headers.authorization && req.headers.authorization.startsWith('Bearer');

  const authHeader = authorization && req.headers.authorization;

  const token = authHeader && authHeader.split(' ')[1];

  if (!token)
    return res
      .status(401)
      .json({ success: false, message: 'Unauthorized Access' });

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  const user = await User.findById(decoded.id);

  if (!user) {
    return res
      .status(401)
      .json({ success: false, message: 'Cannot determine user' });
  }

  req.user = user;
  next();
};
