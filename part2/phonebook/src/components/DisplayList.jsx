  const Filter = ({ filter, setFilter }) => {
    const handleFilter = (event) => setFilter(event.target.value);
    return (
      <div>
        Search Contact <input value={filter} onChange={handleFilter} />
      </div>
    );
  };

const DisplayList = ({ persons, filter }) => {

  const personToShow = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <div>
      <ul>
        {personToShow.map((each) => (
          <li key={each.name}>
            {each.name} {each.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export { DisplayList };
export { Filter };
