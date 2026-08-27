import { useEffect, useState } from "react";
import { PersonCalculations } from "./components/PersonCalculations";
import { DisplayList } from "./components/DisplayList";
import { Filter } from "./components/DisplayList";

import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
      console.log(response.data);
    });
  }, []);

  const addName = ({name , number}) => {
    const cleanName = name.trim();
    if (cleanName === "") return alert(`enter a name `);

    const verifyPhone = /^(?:\s*\d\s*){11}$/.test(number);
    if (!verifyPhone) return alert('enter complete 11 digit phone Number');

    const formattedPhone = number
      .replace(/\s+/g, "")
      .replace(/^(\d{4})(\d{7})$/, "$1 $2");
      
    const checkPerson = persons.some((person) => person.name === cleanName);
      if (checkPerson) return alert(`${cleanName} already exists`);
  
    const checkPhone = persons.some((checkNumber) => checkNumber.number === formattedPhone,);
      if (checkPhone) return alert(`${formattedPhone} already exists`);
    
      const personObject = {
      name: cleanName,
      number: formattedPhone,
    };


    axios
      .post("http://localhost:3001/persons", personObject)
      .then((response) => {
        setPersons(persons.concat(response.data));
      });
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter ={filter}  setFilter ={setFilter} />
      <h2>add a new </h2>
      <PersonCalculations addName={addName} />
      <h2>Numbers</h2>
      <DisplayList persons={persons} filter={filter}  />
    </div>
  );
};

export default App;
