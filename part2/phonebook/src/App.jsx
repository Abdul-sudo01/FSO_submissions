import { useEffect, useState } from "react";
import PersonForm from "./components/PersonForm";
import DisplayList from "./components/DisplayList";
import Filter from "./components/Filter";
import personService from "./services/persons";
import Notification from "./components//Notification";
const App = () => {
  const [persons, setPersons] = useState([]);
  const [filter, setFilter] = useState("");
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    personService.getAll().then((initialPersons) => setPersons(initialPersons));
  }, []);

  const savePerson = (personObject) => {
    personService
      .create(personObject)
      .then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setErrorMessage(`${returnedPerson.name} successfully added `);
        setTimeout(() => setErrorMessage(null), 5000);
      })
      .catch((e) => {
        setErrorMessage(`${e.response.data}`);
        setTimeout(() => setErrorMessage(null), 5000);
      });
  };

  const deletePerson = (id) => {
    const deletedPerson = persons.find((p) => p.id === id);
    personService
      .deletePerson(id)
      .then(() => {
        setPersons(persons.filter((p) => p.id !== id));
        setNotification({ type: 'true' , text : `${deletedPerson.name} successfuly deleted`});
        setTimeout(() => setNotification(null), 5000);
      })
      .catch(() => {
        setNotification({ type: 'false' , text : ` ${deletedPerson.name} is already been removed from server `});
        setTimeout(() => setNotification(null), 5000);
      });
  };

  const replacePerson = ({ id, number, name }) => {
    const updatedPerson = { name, number };
    personService
      .update({ id, updatedPerson })
      .then((returnedPerson) => {
        setPersons(
          persons.map((per) => (per.id !== id ? per : returnedPerson)),
        );
        setErrorMessage(`${returnedPerson.name} successfuly replaced`);
        setTimeout(() => setErrorMessage(null), 5000);
      })
      .catch((e) => {
        setErrorMessage(`${e.response.data}`);
        setTimeout(() => setErrorMessage(null), 5000);
      });
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification notification={notification} />
      <Filter filter={filter} setFilter={setFilter} />
      <h2>add a new </h2>
      <PersonForm
        persons={persons}
        savePerson={savePerson}
        replacePerson={replacePerson}
      />
      <h2>Numbers</h2>
      <DisplayList
        persons={persons}
        filter={filter}
        deletePerson={deletePerson}
      />
    </div>
  );
};

export default App;
