import { useState } from "react";
import Statistics from "./Statictics";
import Button from "./Button";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const incGood = () => setGood(good + 1);
  const incNeutral = () => setNeutral(neutral + 1);
  const incBad = () => setBad(bad + 1);

  const all = good + neutral + bad;
  const avg = (good * 1 + neutral * 0 + bad * -1) / all || 0;
  const pos = (good / all) * 100 || 0;

  return (
    <div>
      <div>
        <h1>Give Feedback</h1>
        <Button handleClick={incGood} text="good" />
        <Button handleClick={incNeutral} text="neutral" />
        <Button handleClick={incBad} text="bad" />
        <h1>Statistics</h1>
      </div>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        avg={avg}
        pos={pos}
      />
    </div>
  );
};

export default App;
