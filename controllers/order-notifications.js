const orderNotificationMethods = {};

orderNotificationMethods.sendOrderNotification = (req, res, next) => {
  console.log(req.headers);
  console.log(req.body);
};

module.exports = orderNotificationMethods;
