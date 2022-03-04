module.exports = app => {
    const Exele = require("../controllers/Exele.controller.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/uploadData", Exele.upload);
    // Retrieve all Tutorials
    // router.get("/get", Exele.findAll);
    // // Retrieve a single Tutorial with id
    // router.get("/get/:id", Exele.findOne);
    // // Update a Tutorial with id
    // router.put("/put/:id", Exele.update);
    // // Delete a Tutorial with id
    // router.delete("/delete/:id", Exele.delete);
    // // Create a new Tutorial
    // router.delete("/delete", Exele.deleteAll);
    app.use('/exel', router)
};