const { Router } = require("express");
const express = require("express");
const { getAllCustomers, createCustomer, updateCustomer, deleteCustomer, addOrder, getOrder, getCustomer } = require("../controllers/customerController");
const { isAuthenticatedClient, authRole } = require("../middleware/auth");
const router = express.Router();

router.route("/customers").get(getAllCustomers);
router.route("/customer/:id").get(getCustomer);
router.route("/customers/new").post(isAuthenticatedClient, createCustomer);
router.route("/customers/update").post(isAuthenticatedClient, updateCustomer);
router.route("/customers/:id").put(isAuthenticatedClient, updateCustomer).delete(isAuthenticatedClient, deleteCustomer);
router.route("/customer/orders/new/:id").post(addOrder);
router.route("/customer/order").post(getOrder)
module.exports = router;