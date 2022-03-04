module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        Username: String,
        email: String,
        password: String,
        Rôle: String
      },
      { timestamps: true }
    );
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
    const User = mongoose.model("users", schema);
    return User;
  };