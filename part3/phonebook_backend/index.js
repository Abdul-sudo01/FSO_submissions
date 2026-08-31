const express = require("express");
const app = express();
 app.use(express.json())

let persons = [
  {
    name: "Arto Hellas",
    number: "0407 1234562",
    id: "1",
  },
  {
    name: "Ada Lovelace",
    number: "3944 5323542",
    id: "2",
  },
  {
    name: "Dan Abramov",
    number: "1243 2343451",
    id: "3",
  },
  {
    name: "Mary Poppendieck",
    number: "3923 6423122",
    id: "4",
  },
  {
    name: "asdf",
    number: "1234 5678910",
    id: "5",
  },
];
app.get("/api/persons", (req, res) => {
  res.send(persons);
});
app.get("/info", (req,res) => {
  res.send( 
   ` <div> Phonebook has info for  ${persons.length}  people </div> <br /> 
    <div> ${new Date()} </div>`
   )
})

app.get("/api/persons/:id", (req, res) => {
  const id = req.params.id;
  const person = persons.find((p) => p.id === id);
  if (person) {
    res.json(person);
  } else {
    res.status(404).end();
  }
});
app.delete("/api/persons/:id", (req, res) => {
  const id = req.params.id;
  persons = persons.filter((p) => p.id !== id);
  res.status(204).end();
})
const generateId = () => {
    const maxId = persons.length > 0
    ?  Math.max(...persons.map(p=>Number(p.id)))
    : 0
  return String(maxId +1)    
}
app.post("/api/persons", (req,res) => {
  const body = req.body
  if (!body.name) {
   return res.status(404).json({error: 'name or Number is missing!'})
  }  
  const person = {
      name : body.name,
      number : body.number, 
      id : generateId()
  }
   persons = persons.concat(person)
    res.json(person)
})


const PORT = 3001;
app.listen(PORT, () => {
  console.log(`server running on port : ${PORT}`);
})
