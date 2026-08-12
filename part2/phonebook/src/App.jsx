import { useEffect, useState } from "react";
import { Filter } from "./components/Filter";
import { PersonForm } from "./components/PersonForm";
import { DisplayList } from "./components/DisplayList";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");
  const [phone, setPhone] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log(response.data);
      setPersons(response.data);
    });
  }, []);

  const handleFilter = (event) => setFilter(event.target.value);

  const addName = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      phone: phone,
      id: persons.length + 1,
    };
    const checkPerson = persons.some((person) => person.name === newName);
    if (checkPerson) {
      return alert(`${newName} already exists`);
    } else {
      setPersons(persons.concat(personObject));
    }
    setNewName("");
    setPhone("");
    setFilter("");
  };
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };
  const handlePhone = (event) => {
    console.log(Number(event.target.value));
    setPhone(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilter={handleFilter} />
      <h2>add a new </h2>
      <PersonForm
        persons={persons}
        phone={phone}
        addName={addName}
        newName={newName}
        handleNameChange={handleNameChange}
        handlePhone={handlePhone}
      />
      <h2>Numbers</h2>
      <DisplayList persons={persons} filter={filter} />
    </div>
  );
};

export default App;
