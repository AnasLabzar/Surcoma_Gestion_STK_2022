module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        Anas: String,
        Username: String,
        Supplier_Type: String,
        Adresse: Array,
        Mail: String,
        Tel: Number,
        Fax: Number,
      },
      { timestamps: true }
    );
    schema.method("toJSON", function () {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
    const Fournisseur = mongoose.model("fournisseur", schema);
    return Fournisseur;
  };