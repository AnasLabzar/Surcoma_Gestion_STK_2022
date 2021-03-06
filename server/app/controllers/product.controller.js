const db = require("../models");
var nodemailer = require('nodemailer');

const Product = db.products;
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'principeanas80@gmail.com',
    pass: 'easycafe'
  }
});
// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  // if (!req.body.title) {
  //   res.status(400).send({ message: "Content can not be empty!" });
  //   return;
  // }
  // Create a Tutorial
 
  const product = new Product({
    title: req.body.title,
    Nom_Article: req.body.Nom_Article,
    Désignation: req.body.Désignation,
    Nom_fournisseur: req.body.Nom_fournisseur,
    N_Catégorie: req.body.N_Catégorie,
    TVA: req.body.TVA,
    Prix_unitaire_HT: req.body.Prix_unitaire_HT,
    Prix_TTC: req.body.Prix_TTC,
    Init_qty: req.body.Qte,
    Curr_qty: req.body.Qte,
    STK_actuel: req.body.STK_actuel
  });
  // Save Tutorial in the database
  product
    .save(product)
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
  const title = req.query.title;
  var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
  Product.find(condition)
    .then(data => {
      data.map(val => {
        if (Math.trunc((val.Curr_qty / val.Init_qty) * 100) < 40) {
          var mailOptions = {
            from: 'principeanas80@gmail.com',
            to: 'ajsmarrakechmedina@gmail.com',
            subject: 'Sending Email of product ' + val.Nom_Article,
            text: `Hello friend the product ${val.Nom_Article} is 9areb it9ada`,
            html: '<h1>Anas Labzar</h1>'
          };
          transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
              console.log("anas", error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
        }
      }

      )

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
  Product.findById(id)
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
  Product.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
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
  Product.findByIdAndRemove(id)
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
  Product.deleteMany({})
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