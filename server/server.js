const express = require("express");
const cors = require("cors");
const app = express();
const users = require("./app/routes/users.routes");
const passport = require("passport");
const db = require("./app/models");
var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors());
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});
require("./app/routes/product.routes")(app);
require("./app/routes/fournisseur.routes")(app);
require("./app/routes/exel.routes")(app);
require("./app/routes/users.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
// // DB Config
// const db = require("./app/config/db.config").mongoURI;

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./app/config/passport")(passport);
// Routes
app.use("/", users);

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });