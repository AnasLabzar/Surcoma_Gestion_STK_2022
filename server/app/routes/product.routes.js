module.exports = app => {
  const products = require("../controllers/product.controller.js");
  var router = require("express").Router();
  // Create a new Tutorial
  router.post("/post", products.create);
  // Retrieve all Tutorials
  router.get("/get", products.findAll);
  // Retrieve a single Tutorial with id
  router.get("/get/:id", products.findOne);
  // Update a Tutorial with id
  router.put("/put/:id", products.update);
  // Delete a Tutorial with id
  router.delete("/delete/:id", products.delete);
  // Create a new Tutorial
  router.delete("/delete", products.deleteAll);
  app.use('/Surcoma', router);
};