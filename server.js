const express = require("express");
const path = require("path");
const router = require("./routes/order-notifications");

const app = express();
app.use(express.json()); //ensures application/json as Content-Type header in client
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/order-notifications", router); //Add this route to WooCommerce webhook

app.listen(1377, () => {
  console.log("Listening on 1377");
});
