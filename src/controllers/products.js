const Product = require('../models/Product');
const Category = require('../models/Category');

exports.getProducts = async (req, res, next) => {
  try {
    const products = await Product.find();

    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.log(error);
    res.send('errors occured');
  }
};

exports.getProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id).populate('category');

    if (!product) {
      return res.status(404).json({
        success: false,
        message: `No product with id ${req.params.id}`,
      });
    }
    res.status(200).json({ success: true, data: product });
  } catch (error) {
    console.log(error);
    res.send('an error occured');
  }
};

exports.addProduct = async (req, res, next) => {
  let {
    name = undefined,
    description = undefined,
    richDescription = undefined,
    image = undefined,
    images = undefined,
    brand = undefined,
    price = undefined,
    category = undefined,
    countInStock = undefined,
    numReviews = undefined,
    isFeatured = undefined,
  } = req.body;

  // if (req.file) {
  //   image = req.file.filename;
  // }
  const basePath = `${req.protocol}://${req.get('host')}`;
  console.log(req.files);
  console.log(basePath);
  return res.send('Hello');

  try {
    const isCategory = await Category.findById(category);

    if (!isCategory) {
      return res
        .status(400)
        .json({ success: false, message: 'Invalid category' });
    }
    const product = await Product.create({
      name,
      description,
      richDescription,
      image,
      images,
      brand,
      price,
      category,
      countInStock,
      numReviews,
      isFeatured,
    });

    res.status(201).json({ success: true, data: product });
  } catch (error) {
    console.log(error);
    res.send('error occurred');
  }
};

exports.updateProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json({ success: true, data: product });
  } catch (error) {
    console.log(error);
    res.send('Error occured');
  }
};

exports.deleteProduct = async (req, res, next) => {
  try {
    await Product.findByIdAndDelete(req.params.id);

    res.status(200).json({ success: true, data: null });
  } catch (error) {
    console.log(error);
    res.send('An error occurred');
  }
};
