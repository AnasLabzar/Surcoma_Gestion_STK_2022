module.exports = app => {
    const fournisseur = require("../controllers/fournisseur.controller");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/post", fournisseur.create);
    // Retrieve all Tutorials
    router.get("/get", fournisseur.findAll);
    // Retrieve a single Tutorial with id
    router.get("/get/:id", fournisseur.findOne);
    // Update a Tutorial with id
    router.put("/put/:id", fournisseur.update);
    // Delete a Tutorial with id
    router.delete("/delete/:id", fournisseur.delete);
    // Create a new Tutorial
    router.delete("/delete", fournisseur.deleteAll);
    app.use('/Surcoma/Fournisseur', router);
  };