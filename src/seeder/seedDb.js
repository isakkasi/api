const User = require("../models/User");
const mongoose = require("mongoose");
const URI = require("../config/db"); 

const users = [   
  new User({
    username: "user1",
    password: "Origin",
    author: "Dan Brown",
    description:
      "2017 mystery thriller novel. Dan Brown is back with another thriller so moronic you can feel your IQ points flaking away like dandruff",
    price: 12
  }),]
//connect mongoose
mongoose
  .connect(String(dev.db), { useNewUrlParser: true })
  .catch(err => {
    console.log(err.stack);
    process.exit(1);
  })
  .then(() => {
    console.log("connected to db in development environment");
  });
//save your data. this is an async operation
//after you make sure you seeded all the products, disconnect automatically
products.map(async (p, index) => {
  await p.save((err, result) => {
    if (index === products.length - 1) {
      console.log("DONE!");
      mongoose.disconnect();
    }
  });
});