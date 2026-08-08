const Header = ({ heading }) => (
  <h2>
    <strong>{heading.name}</strong>
  </h2>
);

const Content = ({ content, sum, heading }) => {
  const sumOfExercises1 = sum[0].reduce(
    (sum, currentExercise) => sum + currentExercise.exercises,
    0,
  );

  const sumOfExercises2 = sum[1].reduce(
    (sum, currentExercise) => sum + currentExercise.exercises,
    0,
  );

  const part1Content = content[0].map((eachPart) => (
    <p key={eachPart.id}>
      {eachPart.name} {eachPart.exercises}
    </p>
  ));

  const part2Content = content[1].map((eachPart) => (
    <p key={eachPart.id}>
      {eachPart.name} {eachPart.exercises}
    </p>
  ));

  return (
    <div>
      <Header heading={heading[0]} />
      {part1Content}
      <p>
        <strong> total of {sumOfExercises1} exercises </strong>
      </p>

      <Header heading={heading[1]} />
      {part2Content}
      <p>
        <strong> total of {sumOfExercises2} exercises </strong>
      </p>
    </div>
  );
};

export { Content };
