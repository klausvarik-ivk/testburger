const mongoose = require("mongoose");

// Connecting to database
mongoose.connect(
  "mongodb+srv://klaus:NTt6_6fqUwU4kBz@cluster0.mwojn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);
const Schema = mongoose.Schema;

const ServSchema = new Schema({
  title: { type: String },
  category: {type: String},
  price: { type: Number },
  stock: { type: Number },
  img: { type: String },
});

const Serv = mongoose.model("Kaburger-BE", ServSchema);
 
module.exports = {
  Serv,
};