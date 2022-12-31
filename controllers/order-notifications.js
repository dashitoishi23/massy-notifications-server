const orderNotificationMethods = {};

orderNotificationMethods.sendOrderNotification = (req, res, next) => {
  //TODO
  //1. Get order ID and Customer ID from payload via req.body
  //2. Use Send A Notification API like in the Postman collection to send notification. include_external_user_ids is an array that has the 
  //Customer ID fetched from step 1
  return res.status(201);
};

module.exports = orderNotificationMethods;
