import { useState } from "react";
const PersonForm = ({ persons, savePerson, replacePerson }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const number2 = number
      .replace(/\s+/g, "")
      .replace(/^(\d{4})(\d{7})$/, "$1 $2");

    const verifyPhone = /^(?:\s*\d\s*){11}$/.test(number2);
    if (!verifyPhone) {
      alert("enter complete 11 digit phone Number");
      return setNumber(number2);
    }
    
    const replacePhone = persons.find((p) => p.number === number2);
    if (replacePhone) {
      const yes = window.confirm(
        `${number2} is registered under name ${replacePhone.name} , Press continue to replace the number `,
      );
      if (yes) {
        replacePerson({ id: replacePhone.id, number: number2, name })
        return setNumber('') , setName('')
      }
    }
    if (replacePhone) return setNumber(number2);
    
    const cleanName = name.trim();
    if (cleanName === "") return alert(`enter a name `);
    const checkPerson = persons.some(
      (p) => p.name.toLowerCase() === cleanName.toLowerCase(),
    );
    if (checkPerson) {
      alert(`${cleanName} already exists`);
      return setName(name);
    }
    // callbacks
    savePerson({ name: cleanName, number: number2 });
    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        name: <input value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        phone:{" "}
        <input value={number} onChange={(e) => setNumber(e.target.value)} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};
export default PersonForm;
