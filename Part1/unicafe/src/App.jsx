import { useState } from "react";

const Button = (props) => {
  return <button onClick={props.handleClick}> {props.text} </button>;
};

const StatisticLine = (props) => {
  return (
  
      <tr>
        <td> {props.text} </td>
        <td> {props.value} </td>
      </tr>

  );
};

const Statistics = (props) => {
  if (props.all === 0) {
    return <p>no feedback provided</p>;
  }
  return (
  
      <table>
        <tbody>
          <StatisticLine text="good" value={props.good} />
          <StatisticLine text="neutral" value={props.neutral} />
          <StatisticLine text="bad" value={props.bad} />
          <StatisticLine text="all" value={props.all} />
          <StatisticLine text="average" value={props.average} />
          <StatisticLine text="positive" value={props.positive} />
        </tbody>
      </table>
  
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const all = good + bad + neutral;
  const average = all === 0 ? 0 : (good - bad) / all;
  const positive = all === 0 ? 0 : (good / all) * 100;

  const handleGoodClick = () => {
    setGood(good + 1);
    console.log(good + 1);
  };
  const handleNeutral = () => {
    setNeutral(neutral + 1);
    console.log(neutral + 1);
  };
  const handleBad = () => {
    setBad(bad + 1);
    console.log(bad + 1);
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={handleGoodClick} text="Good" />
      <Button handleClick={handleNeutral} text="Neutral" />
      <Button handleClick={handleBad} text="Bad" />

      <h1>Statistics</h1>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive + "%"}
      />
    </div>
  );
};

export default App;
