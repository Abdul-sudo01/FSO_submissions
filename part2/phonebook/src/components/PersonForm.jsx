  const PersonForm = ({
    persons,
    newName,
    phone,
    handleNameChange,
    handlePhone,
    addName
  }) => {
    const personObject = {
      name: newName,
      phone: phone,
      id: persons.length + 1,
    };
    
    return (
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
    );
  };
  
  export {PersonForm}