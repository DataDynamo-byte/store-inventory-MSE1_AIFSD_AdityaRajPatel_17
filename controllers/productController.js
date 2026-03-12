const Product = require("../models/Product");

// @desc    Add a new product
// @route   POST /api/products
// @status  201 Created
const addProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({ success: true, data: product });
  } catch (error) {
    if (error.code === 11000) {
      return res
        .status(400)
        .json({ success: false, message: "Product Code already exists" });
    }
    res.status(400).json({ success: false, message: error.message });
  }
};

// @desc    Get all products
// @route   GET /api/products
// @status  200 Success
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ success: true, count: products.length, data: products });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// @desc    Get single product by ID
// @route   GET /api/products/:id
// @status  200 Success / 404 Not Found
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    res.status(200).json({ success: true, data: product });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// @desc    Update product details
// @route   PUT /api/products/:id
// @status  200 Success / 404 Not Found
const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    res.status(200).json({ success: true, data: product });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @status  200 Success / 404 Not Found
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    res.status(200).json({ success: true, message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// @desc    Search products by name
// @route   GET /api/products/search?name=xyz
// @status  200 Success
const searchByName = async (req, res) => {
  try {
    const { name } = req.query;
    if (!name) {
      return res
        .status(400)
        .json({ success: false, message: "Please provide a name to search" });
    }
    const products = await Product.find({
      productName: { $regex: name, $options: "i" },
    });
    res.status(200).json({ success: true, count: products.length, data: products });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// @desc    Filter products by category
// @route   GET /api/products/category?cat=xyz
// @status  200 Success
const filterByCategory = async (req, res) => {
  try {
    const { cat } = req.query;
    if (!cat) {
      return res
        .status(400)
        .json({ success: false, message: "Please provide a category to filter" });
    }
    const products = await Product.find({
      category: { $regex: cat, $options: "i" },
    });
    res.status(200).json({ success: true, count: products.length, data: products });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

module.exports = {
  addProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  searchByName,
  filterByCategory,
};
