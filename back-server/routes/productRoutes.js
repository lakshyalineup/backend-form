const express = require('express');
const { getProducts, getProductById, createProduct } = require('../controllers/productController');
const router = express.Router();

// Routes for product management
router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/', createProduct); // This route should be protected and accessible only by admins

module.exports = router;
