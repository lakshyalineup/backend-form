const express = require('express');
const { addToCart } = require('../controllers/cartController');
const { authenticate } = require('../middlewares/userMiddleware');
const router = express.Router();

router.post('/add-to-cart', authenticate, addToCart);

module.exports = router;
