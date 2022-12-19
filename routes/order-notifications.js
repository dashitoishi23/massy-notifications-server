const express = require("express");
const orderNotificationMethods = require("../controllers/order-notifications");

const router = express.Router();

router.post("/", orderNotificationMethods.sendOrderNotification);

module.exports = router;
