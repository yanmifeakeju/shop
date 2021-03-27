const mongoose = require('mongoose');

exports.validObjectId = (req, res, next) => {
  if (!mongoose.isValidObjectId(req.params.id))
    return res
      .status(400)
      .json({ success: false, message: `Invalid ID ${req.params.id}` });

  next();
};
