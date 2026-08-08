const Header = ({ heading }) => <h1>{heading}</h1>;
const Content = ({ content, sum }) =>
{
const sumOfExercises = sum.reduce((sum, currentExercise) => 
     sum + currentExercise.exercises  , 0 )
 
  return (
  <div>
    {content.map((eachPart) => (
      <p key={eachPart.id}>
        {eachPart.name} {eachPart.exercises}
      </p>
    ))}
    <p><strong> total of {sumOfExercises} exercises </strong></p>
  </div>
 )}; 

const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
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
        name: "redux",
        exercises: 11,
        id: 4,
      },
    ],
  };
  return (
    <div>
      <Header heading={course.name} />
      <Content content={course.parts} sum={course.parts} />
    </div>
  );
};
export default App;
