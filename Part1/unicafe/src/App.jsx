import { useState } from "react";
const Statistics = (props) => {
  {
    console.log("props :", props);
  }
  return (
    <div>
      <p>
        good : {props.good} <br />
        neutral : {props.neutral}
        <br />
        bad : {props.bad} <br />
        all : {props.all} <br />
        average : {props.average}
        <br />
        positive : {props.positive}{" "}
      </p>
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  // const [all , setall] = useState(0)

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
      <button onClick={handleGoodClick}>Good</button>
      <button onClick={handleNeutral}>Neutral </button>
      <button onClick={handleBad}>Bad</button>
      <h1>Statistics</h1>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />
    </div>
  );
};

export default App;
