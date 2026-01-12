import StatisticLine from "./StaticticsLine";

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
      <table>
        <tbody>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />
          <StatisticLine text="All" value={all} />
          <StatisticLine text="Average" value={avg} />
          <StatisticLine text="Positive" value={`${pos}%`} />
        </tbody>
      </table>
    );
  }
};

export default Statistics;
