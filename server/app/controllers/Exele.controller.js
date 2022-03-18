const { DataCaisse } = require("../models");
const db = require("../models");
const Product = db.products;
// Create and Save a new Tutorial

const PRODUCT = {
  "THE MAROCAIN PETIT": [
    { name: "The", qty: 10 },
    { name: "Sucre", qty: 2 }
  ],
  "THE MAROCAIN GRAND": [
    { name: "The", qty: 20 },
    { name: "Sucre Grand", qty: 4 }
  ],

  "CAFE ESPRESSO": [
    { name: "Cafe", qty: 20 },
    { name: "Sucre", qty: 3 },
    { name: "SIDI ALI 33CL", qty: 1 },
  ],
  "CAFE CREME": [
    { name: "Cafe", qty: 20 },
    { name: "Sucre", qty: 3 },
    { name: "SIDI ALI 33CL", qty: 1 },
    { name: "Lait de marrakech", qty: 2 },
  ],
  "Lait CHOCOLAT": [
    { name: "Cacao", qty: 15 },
    { name: "Sucre", qty: 3 },
    { name: "SIDI ALI 33CL", qty: 1 },
    { name: "Lait de marrakech", qty: 2 },
    { name: "Topping Chocolat", qty: 3 },
  ],
  "THE NOIR": [
    { name: "Lipton", qty: 1 },
    { name: "Sucre", qty: 4 },
    { name: "Lait de marrakech", qty: 3 },
  ],
  "THE AROMATISE": [
    { name: "Camomille", qty: 1 },
    { name: "Sucre", qty: 4 },
    { name: "Lait de marrakech", qty: 3 },
  ],
  "THE VERVEINE": [
    { name: "Verveine", qty: 1 },
    { name: "Sucre", qty: 4 },
  ],
  "LAIT VERVEINE": [
    { name: "Verveine", qty: 1 },
    { name: "Sucre", qty: 4 },
    { name: "Lait de marrakech", qty: 3 },
  ],
  "Lait de marrakech CHAUD": [
    { name: "Sucre", qty: 3 },
    { name: "Lait de marrakech", qty: 2 },
  ],
  "CAPPUCCINO": [
    { name: "Sucre", qty: 3 },
    { name: "Lait de marrakech", qty: 2 },
    { name: "Cacao", qty: 10 },
    { name: "Cafe", qty: 20 },
    { name: "SIDI ALI 33CL", qty: 1 },
    { name: "Topping Chocolat", qty: 3 },
  ],
  "CAFE AMERICAN": [
    { name: "Sucre", qty: 3 },
    { name: "Cafe", qty: 25 },
    { name: "SIDI ALI 33CL", qty: 1 },
  ],
  "CAFE SURCOMA": [
    { name: "Sucre", qty: 3 },
    { name: "Lait de marrakech", qty: 2 },
    { name: "Cafe", qty: 20 },
    { name: "SIDI ALI 33CL", qty: 1 },
    { name: "Topping Chocolat", qty: 10 },
  ],
  "CAFE CASSE": [
    { name: "Sucre", qty: 3 },
    { name: "Lait de marrakech", qty: 1 },
    { name: "Cafe", qty: 20 },
    { name: "SIDI ALI 33CL", qty: 1 },
  ],
  "NESPRESSO": [
    { name: "Sucre", qty: 2 },
    { name: "SIDI ALI 33CL", qty: 1 },
    { name: "Capsule Nespresso", qty: 1 },
  ],
  // "THE CHAI LATTE": [
  //   { name: "Sucre", qty: 2 },
  //   { name: "SIDI ALI 33CL", qty: 1 },
  //   { name: "Capsule Nespresso", qty: 1 },
  // ],
  "Lait de marrakech NESCAFE": [
    { name: "Sucre", qty: 3 },
    { name: "SIDI ALI 33CL", qty: 1 },
    { name: "Lait de marrakech", qty: 2 },
    { name: "Nescafe", qty: 1 },
  ],
  "SUPPLEMENT NESCAFE": [
    { name: "Nescafe", qty: 1 },
  ],

  //JUS
  "JUS ORANGE": [
    { name: "Orange", qty: 1000 },
    { name: "Sucre", qty: 2 }
  ],
  "JUS CITRON": [
    { name: "Citron", qty: 500 },
    { name: "Sucre_Grand", qty: 2 }
  ],
  "JUS POMME": [
    { name: "Pomme", qty: 230 },
    { name: "Lait de marrakech", qty: 4 },
    { name: "Sucre", qty: 2 }
  ],
  "JUS BANANE": [
    { name: "Banane", qty: 200 },
    { name: "Lait de marrakech", qty: 4 },
    { name: "Sucre", qty: 2 }
  ],
  "JUS AVOCAT": [
    { name: "Avocat", qty: 220 },
    { name: "Lait de marrakech", qty: 4 },
    { name: "Sucre", qty: 2 }
  ],
  "JUS POIRE": [
    { name: "Orange", qty: 500 },
    { name: "Poire", qty: 250 },
    { name: "Sucre", qty: 2 }
  ],
  "JUS PANACHE": [
    { name: "Fraise", qty: 70 },
    { name: "Orange", qty: 600 },
    { name: "Banane", qty: 50 },
    { name: "Poire", qty: 50 },
    { name: "Ananas", qty: 50 },
    { name: "Kiwi", qty: 50 },
    { name: "Mongue", qty: 50 },
    { name: "Sucre", qty: 2 }
  ],
  "JUS Fraise": [
    { name: "Fraise", qty: 180 },
    { name: "Orange", qty: 600 },
    { name: "Sucre", qty: 2 }
  ],
  "JUS ANANAS": [
    { name: "Orange", qty: 600 },
    { name: "Ananas", qty: 180 },
    { name: "Sucre", qty: 2 }
  ],
  "JUS AVOCAT OREO": [
    { name: "Sucre", qty: 2 },
    { name: "Avocat", qty: 200 },
    { name: "Oreo", qty: 3 },
  ],
  "JUS AVOCAT FRUITS SECS": [
    { name: "Avocat", qty: 200 },
    { name: "Fruits secs", qty: 120 },
    { name: "Sucre", qty: 2 },
  ],
  "JUS KIWI": [
    { name: "Orange", qty: 600 },
    { name: "Kiwi", qty: 180 },
    { name: "Sucre", qty: 2 }
  ],
  "JUS CONCOMBRE": [
    { name: "Citron", qty: 400 },
    { name: "Concombre", qty: 50 },
    { name: "Sucre", qty: 4 }
  ],
  "JUS BETTERAVE": [
    { name: "Orange", qty: 600 },
    { name: "Betterave", qty: 180 },
    { name: "Sucre", qty: 2 }
  ],
  "JUS PECHE": [
    { name: "Orange", qty: 600 },
    { name: "Peche", qty: 200 },
    { name: "Sucre", qty: 2 }
  ],
  "JUS CAROTTE": [
    { name: "Orange", qty: 400 },
    { name: "Carotte", qty: 200 },
    { name: "Sucre", qty: 2 }
  ],
  "SODAS": [
    { name: "SODAS", qty: 1 },
  ],
  "SCHWEPPES": [
    { name: "SCHWEPPES", qty: 1 },
  ],
  "OULMES 1L": [
    { name: "OULMES 1L", qty: 1 },
  ],
  "SIDI ALI 33CL": [
    { name: "SIDI ALI 33CL", qty: 1 },
  ],
  "ORANGINA": [
    { name: "ORANGINA", qty: 1 },
  ],
  "RED BULL": [
    { name: "RED BULL", qty: 1 },
  ],
  "SIDI ALI 50 CL": [
    { name: "SIDI ALI 50 CL", qty: 1 },
  ],
  "SIDI ALI 1L": [
    { name: "SIDI ALI 1 L", qty: 1 },
  ],
  "ICE TEA": [
    { name: "ICE TEA", qty: 1 },
  ],
  "OULMES 50 CL": [
    { name: "OULMES 50 CL", qty: 1 },
  ],
  "SIDI ALI 1.5L": [
    { name: "SIDI ALI 1.5L", qty: 1 },
  ],

  //PETITS DEJEUNERS
  "FTOUR BELDI": [
    { name: "Batbout petit", qty: 60 },
    { name: "Harsha", qty: 100 },
    { name: "Olives", qty: 60 },
    { name: "Huile Olives", qty: 25 },
    { name: "Miel", qty: 30 },
    { name: "Amlou", qty: 10 },
  ],
  "FTOUR MEDITERRANEEN": [
    { name: "Batbout Grand", qty: 190 },
    { name: "Huile Olives", qty: 25 },
    { name: "Olives", qty: 60 },
    { name: "Kiri", qty: 1 },//piece
    { name: "Yaourt", qty: 1 },//piece
    { name: "Oeuf", qty: 2 },//piece
  ],
  "FTOUR FASSI": [
    { name: "Batbout Grand", qty: 190 },
    { name: "Khli", qty: 80 },
    { name: "Olives", qty: 60 },
    { name: "Confiture", qty: 40 },
    { name: "Huile Olives", qty: 25 },
    { name: "Oeuf", qty: 2 },//piece
  ],
  "FTOUR FRANCAIS": [
    { name: "Baquette", qty: 1 },
    { name: "Beurre", qty: 50 },
    { name: "Confiture", qty: 40 },
    { name: "Salade de fruits", qty: 200 },
    { name: "Croissant", qty: 50 },
    { name: "Yaourt", qty: 1 },
  ],
  "HARICOTS A LA MAROCAINE": [
    { name: "Haricots", qty: 270 },
    { name: "", qty: 270 },
    { name: "Haricots", qty: 270 },
    { name: "Haricots", qty: 270 },
  ],
  "LENTILLES A LA MAROCAINE": [
    { name: "test", qty: 1 },
  ],
  "MSEMEN": [
    { name: "test", qty: 1 },
  ],
  "OMELETTE NATURE": [
    { name: "test", qty: 1 },
  ],
  "OMELETTE CHAMPIGNONS": [
    { name: "test", qty: 1 },
  ],
  "OMELETTE AUX HERBES": [
    { name: "test", qty: 1 },
  ],
  "OMELETTE FROMAGE": [
    { name: "test", qty: 1 },
  ],
  "OMELETTE KHLI": [
    { name: "test", qty: 1 },
  ],
  "FTOUR CHAMALI": [
    { name: "test", qty: 1 },
  ],
  "FTOUR SURCOMA": [
    { name: "test", qty: 1 },
  ],
  "BISSARA": [
    { name: "test", qty: 1 },
  ],
  "PETIT PAIN CHOC": [
    { name: "test", qty: 1 },
  ],
  "CROISSANT": [
    { name: "test", qty: 1 },
  ],
  "HARSHA": [
    { name: "test", qty: 1 },
  ],
  "BAGHRIR": [
    { name: "test", qty: 1 },
  ],
  "BATBOUT": [
    { name: "test", qty: 1 },
  ],
  "PAIN GRILLE NATURE": [
    { name: "test", qty: 1 },
  ],
  "JUS ORANGE PETIT": [
    { name: "test", qty: 1 },
  ],
  "YAOURT": [
    { name: "test", qty: 1 },
  ],
  "CONFITURE": [
    { name: "test", qty: 1 },
  ],

  //SALADES
  "SALADE CESAR": [
    { name: "test", qty: 1 },
  ],
  "SALADE NICOISE": [
    { name: "test", qty: 1 },
  ],
  "SALADE AVOCAT CREVETTES": [
    { name: "test", qty: 1 },
  ],
  "SALADE MAROCAINE": [
    { name: "test", qty: 1 },
  ],
  "SALADE RICHE": [
    { name: "test", qty: 1 },
  ],
  "SALADE SURCOMA": [
    { name: "test", qty: 1 },
  ],
  "SALADE MEDITERRANEENNE": [
    { name: "test", qty: 1 },
  ],

  //LES PATES
  "PENNE BOLOGNAISE": [
    { name: "test", qty: 1 },
  ],
  "PENNE POULET": [
    { name: "test", qty: 1 },
  ],
  "PENNE FRUITS MER": [
    { name: "test", qty: 1 },
  ],
  "PENNE THON": [
    { name: "test", qty: 1 },
  ],
  "PENNE VEGETARIEN": [
    { name: "test", qty: 1 },
  ],
  "PENNE CREVETTE PIL PIL": [
    { name: "test", qty: 1 },
  ],
  "SPAGHETTI VEGETARIEN": [
    { name: "test", qty: 1 },
  ],
  "TAGLIATELLE VEGETARIEN": [
    { name: "test", qty: 1 },
  ],
  "SPAGHETTI BOLOGNAISE": [
    { name: "test", qty: 1 },
  ],
  "TAGLIATELLE BOLOGNAISE": [
    { name: "test", qty: 1 },
  ],
  "SPAGHETTI POULET": [
    { name: "test", qty: 1 },
  ],
  "TAGLIATELLE POULET": [
    { name: "test", qty: 1 },
  ],
  "SPAGHETTI FRUITS MER": [
    { name: "test", qty: 1 },
  ],
  "SPAGHETTI THON": [
    { name: "test", qty: 1 },
  ],
  "TAGLIATELLE THON": [
    { name: "test", qty: 1 },
  ],
  "TAGLIATELLE CREVETTE PIL PIL": [
    { name: "test", qty: 1 },
  ],
  "TAGLIATELLE FRUITS MER": [
    { name: "test", qty: 1 },
  ],
  "SPAGHETTI CREVETTE PIL PIL": [
    { name: "test", qty: 1 },
  ],

  //PIZZA 
  "PIZZA": [
    { name: "test", qty: 1 },
  ],
  "PIZZA": [
    { name: "test", qty: 1 },
  ],
  "PIZZA": [
    { name: "test", qty: 1 },
  ],
  "PIZZA": [
    { name: "test", qty: 1 },
  ],
  "PIZZA": [
    { name: "test", qty: 1 },
  ],
  "PIZZA": [
    { name: "test", qty: 1 },
  ],
  "PIZZA": [
    { name: "test", qty: 1 },
  ],
  "PIZZA": [
    { name: "test", qty: 1 },
  ],
  "PIZZA": [
    { name: "test", qty: 1 },
  ],
  "PIZZA": [
    { name: "test", qty: 1 },
  ],
  "PIZZA": [
    { name: "test", qty: 1 },
  ],
  "PIZZA": [
    { name: "test", qty: 1 },
  ],
  "PIZZA": [
    { name: "test", qty: 1 },
  ],
  "PIZZA": [
    { name: "test", qty: 1 },
  ],
  "PIZZA": [
    { name: "test", qty: 1 },
  ],
  "PIZZA": [
    { name: "test", qty: 1 },
  ],
  "PIZZA": [
    { name: "test", qty: 1 },
  ],
  "PIZZA": [
    { name: "test", qty: 1 },
  ],
  "PIZZA": [
    { name: "test", qty: 1 },
  ],
  "PIZZA": [
    { name: "test", qty: 1 },
  ],
  "PIZZA": [
    { name: "test", qty: 1 },
  ],
  "PIZZA": [
    { name: "test", qty: 1 },
  ],
  "PIZZA": [
    { name: "test", qty: 1 },
  ],
  "PIZZA": [
    { name: "test", qty: 1 },
  ],
  "PIZZA": [
    { name: "test", qty: 1 },
  ],
  "PIZZA": [
    { name: "test", qty: 1 },
  ],
  "PIZZA": [
    { name: "test", qty: 1 },
  ],
  "PIZZA": [
    { name: "test", qty: 1 },
  ],
  "PIZZA": [
    { name: "test", qty: 1 },
  ],
  "PIZZA": [
    { name: "test", qty: 1 },
  ],

}


exports.upload = async (req, res) => {
  try {
    const data = req.body;
    const result = await Promise.all(
      await data.map(async command => {
        return await DataCaisse.create(command)
      }))
    res.json(result)
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
};

exports.stock = async (req, res) => {
  let orange = 0
  try {
    const { name, qty } = req.body;
    const targetProduct = PRODUCT[name]
    if (targetProduct) {
      targetProduct.forEach(async (prd) => {
        const product = await Product.findOne({ Nom_Article: prd.name })
        if (!product) {
          return
        } else {


          let curr = (product.Curr_qty - (qty * +prd.qty));
          product.Curr_qty = curr
          await product.save();
          if (prd.name == "Orange") {
            console.log({
              "default ": prd.qty,
              "5ssrna : ": qty,
              "next db ": curr,
              "db : ": product.Curr_qty,
            });
          }
        }
      })
      res.json({
        message: "success"
      })
    } else {
      res.status(404).json({
        message: "product not found"
      })
    }
  } catch (error) {
    console.log(error);
  }
};








