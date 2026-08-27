import { useState } from "react";
const PersonCalculations = ({addName}) => {
  const [newName, setNewName] = useState("");
  const [phone, setPhone] = useState("")
  
  const handleNameChange = (event) =>  setNewName(event.target.value);
  const handlePhone = (event) =>  setPhone(event.target.value)
  
  const handleSubmit = (event) => {
    event.preventDefault()
    addName({name : newName , number : phone})
   
  } 

return (
  <form onSubmit={handleSubmit}>
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
);
 }
export { PersonCalculations };
