const mongoose = require("mongoose");

if (process.argv.length < 3) {
  return console.log(`give a valid password`);
  process.exit(1);
}
const password = process.argv[2];
const url = `mongodb+srv://full_stack:${password}@cluster0.74tchjx.mongodb.net/Phonebook?appName=Cluster0`;

mongoose.set("strictQuery", false);
mongoose.connect(url, { family: 4 });

const name = process.argv[3];
const number = process.argv[4];

const noteSchema = new mongoose.Schema({
  name: String,
  number: String,
});
const Person = mongoose.model("Person", noteSchema);

const person = new Person({ name, number });

if (process.argv.length === 5) {
  person.save().then((p) => {
    console.log(`added ${p.name} number: ${p.number} to phonebook`);
    mongoose.connection.close();
  });
}
if (process.argv.length === 3)
  Person.find({}).then((result) => {
    result.forEach((p) => {
      console.log(`${p.name} ${p.number} `);
    });
    mongoose.connection.close();
  });
