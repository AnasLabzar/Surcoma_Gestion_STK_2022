module.exports = app => {
  const users = require("../controllers/users.controller");
  var router = require("express").Router();
  // Create a new Tutorial
  router.post("/register", users.create);
  // Retrieve a single Tutorial with id
  router.post("/Login", users.findOne);
  app.use('/Surcoma/User', router);
};