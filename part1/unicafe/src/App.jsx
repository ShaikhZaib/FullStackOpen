import { useState } from "react";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const incGood = () => setGood(good + 1);
  const incNeutral = () => setNeutral(neutral + 1);
  const incBad = () => setBad(bad + 1);

  const all = good + neutral + bad;
  const avg = (good * 1 + neutral * 0 + bad * -1) / all;
  const pos = (good / all) * 100;

  return (
    <div>
      <div>
        <h1>Give Feedback</h1>
        <button onClick={incGood}>good</button>
        <button onClick={incNeutral}>neutral</button>
        <button onClick={incBad}>bad</button>
      </div>
      <h1>Statistics</h1>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {all}</p>
      <p>Average: {avg}</p>
      <p>Positive: {pos} %</p>
    </div>
  );
}

export default App;
