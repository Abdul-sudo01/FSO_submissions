const DisplayList = ({ persons, filter , deletePerson }) => {
  const personToShow = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase()),
  )
  const handleDelete = (e)=> { 
    console.log(e)
   const confirmDelete =  window.confirm(`delete ${e.name} ?`)
   if(confirmDelete) return deletePerson(e.id)
  }

  return (
    <div>
      <ul>
        {personToShow.map(({id , name , number}) => 
          <li key={id}>
            {name} {number} <button onClick={()=>handleDelete({name , id})}>Delete</button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default DisplayList ;
