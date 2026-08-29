const DisplayList = ({ persons, filter }) => {
  const personToShow = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <div>
      <ul>
        {personToShow.map(({id , name , number}) => 
          <li key={id}>
            {name} {number}
          </li>
        )}
      </ul>
    </div>
  );
};

export default DisplayList
