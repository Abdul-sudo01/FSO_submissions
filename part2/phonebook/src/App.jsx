import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");
  const [phone, setPhone] = useState("");
2
  const addName = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      phone: phone ,
      id: persons.length + 1,
    };
    const checkPerson = persons.some((person) => person.name === newName);

     if (checkPerson) {
      return alert(`${newName} already exists`);
     } else {
      setPersons(persons.concat(personObject));
     }
     setNewName("");
     setPhone("")
    };

  const handleNameChange = (event) => {
    setNewName(event.target.value)  };

   const handlePhone  = (event) => {
    console.log( (Number(event.target.value)))
       setPhone(event.target.value) }



 return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
          <div>
          phone: <input value={phone} onChange={handlePhone}   />    
          </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((each) => (
          <li key={each.name}> {each.name} {each.phone} </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
