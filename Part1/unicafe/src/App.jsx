import { useState } from "react";

{
  /* <Button Good = {props}  />  */
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

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

      <p>
        good : {good} <br />
        neutral: {neutral}<br />
        bad: {bad}
      </p>
    </div>
  );
};

export default App;
