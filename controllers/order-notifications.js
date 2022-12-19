const orderNotificationMethods = {};

orderNotificationMethods.sendOrderNotification = (req, res, next) => {
  console.log(req.headers);
  console.log(req.body);

  return res.status(201);
};

module.exports = orderNotificationMethods;
