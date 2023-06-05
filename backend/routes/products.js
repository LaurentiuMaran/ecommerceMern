const express = require('express');
const router = express.Router();
const isAuthenticatedUser = require('../middlewares/isAuthenticatedUser');
const isAdmin = require('../middlewares/isAdmin');

const {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/productController');

router.post('/', isAuthenticatedUser, isAdmin, createProduct);
router.get('/', getProducts);
router.get('/:id', getProduct);
router.put('/:id', isAuthenticatedUser, isAdmin, updateProduct);
router.delete('/:id', isAuthenticatedUser, isAdmin, deleteProduct);

module.exports = router;
