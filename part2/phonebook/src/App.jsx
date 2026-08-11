import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");
  const [phone, setPhone] = useState("");
  const [filter, setFilter] = useState("");

  const personToShow = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );
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
      <div>
        filter shown with <input value={filter} onChange={handleFilter} />
      </div>
      <h2>add a new </h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          phone: <input value={phone} onChange={handlePhone} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {personToShow.map((each) => (
          <li key={each.name}>
            {each.name} {each.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
