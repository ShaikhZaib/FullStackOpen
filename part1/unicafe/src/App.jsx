import { useState } from "react";

const Button = (props) => {
  const { handleClick, text } = props;
  return <button onClick={handleClick}>{text}</button>;
};

const StatisticLine = (props) => {
  const { text, value } = props;
  return (
    <p>
      {text}: {value}
    </p>
  );
};

const Statistics = (props) => {
  const { good, neutral, bad, all, avg, pos } = props;
  if (all === 0) {
    return (
      <div>
        {" "}
        <h4>No feedback Given</h4>
      </div>
    );
  } else {
    return (
      <div>
        <StatisticLine text="Good" value={good} />
        <StatisticLine text="Neutral" value={neutral} />
        <StatisticLine text="Bad" value={bad} />
        <StatisticLine text="All" value={all} />
        <StatisticLine text="Average" value={avg} />
        <StatisticLine text="Positive" value={`${pos}%`} />
      </div>
    );
  }
};

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
