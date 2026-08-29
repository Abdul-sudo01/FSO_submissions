import { useState } from "react";
const PersonForm = ({ persons , savePerson }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

      const verifyPhone = /^(?:\s*\d\s*){11}$/.test(number);
      if (!verifyPhone) return alert("enter complete 11 digit phone Number");
      
      const formattedPhone = number
      .replace(/\s+/g, "")
      .replace(/^(\d{4})(\d{7})$/, "$1 $2");
      // checks below 
      const checkPhone = persons.some((p) => p.number === formattedPhone);
      if (checkPhone) return alert(`${formattedPhone} already exists`);
      
      const cleanName = name.trim();
      if (cleanName === "") return alert(`enter a name `);

      const checkPerson = persons.some((p) => p.name.toLowerCase() === cleanName.toLowerCase());
      if (checkPerson) return alert(`${cleanName} already exists`);
    // callbacks 
    savePerson({ name: cleanName , number: formattedPhone })
    setName('');
    setNumber('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        name: <input value={name} onChange = {(e)=>setName(e.target.value)} /> 
      </div>
      <div>
        phone: <input value={number} onChange = {(e)=>setNumber(e.target.value)} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};
export default PersonForm ;
