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
const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,

      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return (
    <div>
      <h1>Web development curriculum </h1>
       <Content
        content={[courses[0].parts, courses[1].parts]}
        sum={[courses[0].parts, courses[1].parts]}
        heading={courses} 
      />
    </div>
  );
};
export default App;
