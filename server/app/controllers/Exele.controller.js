const { DataCaisse } = require("../models");
const db = require("../models");
const productModel = require("../models/product.model");
const Product = db.products;
// Create and Save a new Tutorial

const PRODUCT = {
  "THE MAROCAIN PETIT": [
    { name: "The", qty: 18 },
    { name: "Sucre", qty: 40 }
  ],
  "THE MAROCAIN GRAND": [
    { name: "The", qty: 40 },
    { name: "Sucre", qty: 100 }
  ],
  "JUS ORANGE": [
    { name: "Orange", qty: 400 },
    { name: "Sucre", qty: 100 }
  ]
}


exports.upload = async (req, res) => {

  const data = req.body.filter(e => !e.Article.includes('-->'))
  const result = await Promise.all(
    await data.map(async command => {
      const targetProduct = PRODUCT[command.Article]
      targetProduct ? targetProduct.forEach(async (product) => {
        await productModel.findOneAndUpdate({
          Nom_Article: product.name
        }, {
          Curr_qty: +Curr_qty - product.qty
        })
      }) : null
      return await DataCaisse.create(command)
    }))
  res.json(result)
  console.log("result");

};








