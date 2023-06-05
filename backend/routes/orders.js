const express = require('express');
const router = express.Router();
const isAuthenticatedUser = require('../middlewares/isAuthenticatedUser');
const isAdmin = require('../middlewares/isAdmin');

const {
  newOrder,
  getSingleOrder,
  myOrders,
  allOrders,
  updateOrder,
  deleteOrder,
} = require('../controllers/orderController');

router.route('/').post(isAuthenticatedUser, newOrder);
router.route('/order/:id').get(isAuthenticatedUser, getSingleOrder);
router.route('/me').get(isAuthenticatedUser, myOrders);
router.route('/admin').get(isAuthenticatedUser, isAdmin, allOrders);
router.route('/admin/:id').put(isAuthenticatedUser, isAdmin, updateOrder);
router.route('/admin/:id').delete(isAuthenticatedUser, isAdmin, deleteOrder);

module.exports = router;
