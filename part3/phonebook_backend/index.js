require("dotenv").config();
const Persons = require("./models/persons");
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const app = express();
const cors = require('cors')
app.use(express.json());
app.use(cors())

morgan.token("PORT", (req, res) => `Server running on port: ${PORT}`);
app.use(morgan(":PORT"));

morgan.token("postReq", (req, res) => JSON.stringify(req.body));
app.use(
  morgan(
    ":method :url :status :res[response-length] :response-time ms  :postReq",
  ),
);

mongoose.set("toJSON", {
  transform: (document, receivedObject) => {
    receivedObject.id = receivedObject._id.toString();
    delete receivedObject._id;
    delete receivedObject.__v;
  },
});

app.get("/persons", (req, res) => {
  Persons.find({}).then((p) => {
    console.log(p);
    res.json(p);
  });
});

// app.get("/info", (req, res) => {
//   res.send(
//     ` <div> Phonebook has info for  ${persons.length}  people </div> <br /> 
//     <div> ${new Date()} </div>`,
//   );
// });

app.get("/persons/:id", (req, res) => {
  const id = req.params.id;
  const person = persons.find((p) => p.id === id);
  if (person) {
    res.json(person);
  } else {
    res.status(404).end();
  }
});
app.delete("/persons/:id", (req, res) => {
  const id = req.params.id;
  persons = persons.filter((p) => p.id !== id);
  res.status(204).end();
});
app.post("/persons", async (req, res) => {
  const body = req.body;
  
  if (!body.name) return res.status(400).json({ error: "provide name to proceed!" });
  if (!body.number) return res.status(400).json({ error: "provide Number to proceed!" });
  
  const name = body.name;
  const number = body.number;
  const person = new Persons({ name , number })

  const nameCheck = await Persons.findOne({ name })
  console.log("found person :", nameCheck);
  if (nameCheck) return res.status(400).json({error : 'name must be unique'})  
  
res.status(201).json( await person.save());
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server running on port : ${PORT}`);
});
