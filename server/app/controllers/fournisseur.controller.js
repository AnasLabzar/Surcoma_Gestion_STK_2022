const db = require("../models");
const Fournisseur = db.Fournisseur;
// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  // if (!req.body.title) {
  //   res.status(400).send({ message: "Content can not be empty!" });
  //   return;
  // }
  // Create a Tutorial

  const fournisseur = new Fournisseur({
    Anas: req.body.Anas,
    Username: req.body.Username,
    Supplier_Type: req.body.Supplier_Type,
    Adresse: req.body.Adresse,
    Mail: req.body.Mail,
    Tel: req.body.Tel,
    Fax: req.body.Fax
  });
  // Save Tutorial in the database
  fournisseur
    .save(fournisseur)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};
// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const Username = req.query.Username;
  var condition = Username ? { Username: { $regex: new RegExp(Username), $options: "i" } } : {};
  Fournisseur.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};
// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Fournisseur.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Tutorial with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Tutorial with id=" + id });
    });
};
// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }
  const id = req.params.id;
  Fournisseur.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found!`
        });
      } else res.send({ message: "Tutorial was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + id
      });
    });
};
// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  Fournisseur.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
        });
      } else {
        res.send({
          message: "Tutorial was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id
      });
    });
};
// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    Fournisseur.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Tutorials were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials."
      });
    });
};
// Find all published Tutorials
// exports.findAllPublished = (req, res) => {
//   Tutorial.find({ published: true })
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving tutorials."
//       });
//     });
// };