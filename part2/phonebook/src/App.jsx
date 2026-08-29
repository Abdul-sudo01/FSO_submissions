import { useEffect, useState } from "react";
import PersonForm  from "./components/PersonForm";
import DisplayList  from "./components/DisplayList";
import Filter  from "./components/Filter";
import personService  from "./services/persons";
const App = () => {
  const [persons, setPersons] = useState([]);
  const [filter, setFilter] = useState("");
 
  useEffect(() => {
    personService.getAll().then((initialPersons) => setPersons(initialPersons));
  }, []);

  const savePerson = ( personObject ) =>
    personService.create(personObject).then((returnedPerson) =>
      setPersons(persons.concat(returnedPerson))
    );
const deletePerson =(id)=> personService.deletePerson(id).then(() => setPersons(persons.filter(p => p.id !== id)))


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <h2>add a new </h2>
      <PersonForm persons={persons} savePerson={savePerson}   />
      <h2>Numbers</h2>
      <DisplayList persons={persons} filter={filter} deletePerson = {deletePerson} />
    </div>
  );
};

export default App;
