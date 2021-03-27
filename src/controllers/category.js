const Category = require('../models/Category');

exports.getCategories = async (req, res, next) => {
  try {
    const categories = await Category.find();
    res.status(200).json({ success: true, data: categories });
  } catch (error) {
    console.log(error);
  }
};

exports.getCategory = async (req, res, next) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({
        success: false,
        message: `Category with ${req.params.id} does not exist`,
      });
    }
    res.status(200).json({ success: true, data: category });
  } catch (error) {}
};

exports.addCategory = async (req, res, next) => {
  const { name = undefined, icon = undefined, color = undefined } = req.body;

  try {
    const category = await Category.create({ name, icon, color });
    res.status(201).json({ sucess: true, data: category });
  } catch (error) {
    res.send('Error occured');
    console.log(error.message);
  }
};

exports.updateCategory = async (req, res, next) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!category) {
      return res.status(404).json({
        success: false,
        message: `Category with ${req.params.id} not found`,
      });
    }

    res.status(200).json({ success: true, data: category });
  } catch (error) {
    console.log(error);
  }
};

exports.deleteCategory = async (req, res, next) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    res.status(200).json({ sucess: true, data: null });
  } catch (error) {
    console.log(error.message);
  }
};
