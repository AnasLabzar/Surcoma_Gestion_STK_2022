module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        ID: Number,
        ID_TICKET: Number,
        Ticket: Number,
        Dates: String,
        Heure: String,
        Code: Number,
        Article: String,
        Famille: String,
        PRIX_A: Number,
        PRIX_MP: Number,
        PRIX_V: Number,
        FALSE: Number,
        Remise: Number,
        TAUX_TVA: Number,
        Caissier: String,
        Vendeur: String,
        CODE_CLIENT: String,
        CLIENT: String,
        POSTE: Number,
        OPERATION: String,
        CLOTURE_CAISSIER: String,
        CLOTURE_GLOBALE: String,
        NOTES: String
      },
      { timestamps: true }
    );
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
    const DataCaisse = mongoose.model("DataCaisse", schema);
    return DataCaisse;
  };