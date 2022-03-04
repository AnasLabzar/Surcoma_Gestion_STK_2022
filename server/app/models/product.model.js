module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      title: String,
      Nom_Article: String,
      Désignation: String,
      Nom_fournisseur: String,
      N_Catégorie: Array,
      TVA: Number,
      Prix_unitaire_HT: Number,
      Prix_TTC: Number,
      Init_qty: Number,
      Curr_qty: Number,
      STK_actuel: String
    },
    { timestamps: true }
  );
  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });
  const Product = mongoose.model("product", schema);
  return Product;
};