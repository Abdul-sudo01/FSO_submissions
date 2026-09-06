require("dotenv").config();
const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URI, { family: 4 })
  .then(() => console.log("connected to MongoDB"))
  .catch(error => console.log("connection error!", error));

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
});
const Persons = mongoose.model("Person", personSchema);

module.exports = mongoose.model("Person", personSchema);
