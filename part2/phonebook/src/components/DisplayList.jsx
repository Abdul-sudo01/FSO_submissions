const DisplayList = ({ persons, filter }) => {
  const personToShow = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase()),
);
return (
  <div>
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

export {DisplayList}