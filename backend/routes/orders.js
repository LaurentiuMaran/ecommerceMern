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

router
  .route('/')
  .post(isAuthenticatedUser, newOrder)
  .get(isAuthenticatedUser, isAdmin, allOrders);

router.route('/me').get(isAuthenticatedUser, myOrders);

router
  .route('/:id')
  .get(isAuthenticatedUser, getSingleOrder)
  .put(isAuthenticatedUser, isAdmin, updateOrder)
  .delete(isAuthenticatedUser, isAdmin, deleteOrder);

module.exports = router;
