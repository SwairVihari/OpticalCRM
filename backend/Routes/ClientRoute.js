const { Router } = require("express");
const express = require("express");
const { getClient, loginClient, getAllClients, registerClient, getCustomersOfClient, getOredersOfCustomerOfClient, logout, updatePassword, forgotPassword, resetPassword } = require("../controllers/clientController");
const router = express.Router();
const { isAuthenticatedClient, authRole } = require("../middleware/auth");
router.route("/client").get(isAuthenticatedClient,getClient);
router.route("/client/updatepassword").post(isAuthenticatedClient,authRole("admin"), updatePassword);
router.route("/allclient").get(isAuthenticatedClient, authRole("admin"), getAllClients);
router.route("/clients/customer/:id").get(isAuthenticatedClient, authRole("admin"), getCustomersOfClient);
router.route("/clients/order/:id").get(isAuthenticatedClient, authRole("admin"), getOredersOfCustomerOfClient);
router.route("/clients/register").post(registerClient)
router.route("/clients/login").post(loginClient);
router.route("/clients/logout").get(logout);
router.route("/clients/password/forgot").post(forgotPassword)
router.route("/clients/password/reset/:token").put(resetPassword)
module.exports = router;
