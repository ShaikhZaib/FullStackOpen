import { useState } from "react";

function App() {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
    "Programming is thinking, not typing.",
    "The best way to get a project done faster is to start sooner.",
    "First, solve the problem. Then, write the code.",
    "If debugging is the process of removing bugs, then programming must be the process of putting them in.",
    "Weeks of coding can save you hours of planning.",
    "Software and cathedrals are much the same — first we build them, then we pray.",
    "It works on my machine.",
    "Premature optimization is the root of all evil.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const ranNum = () => {
    let ranNum = Math.floor(Math.random() * (anecdotes.length - 1));
    setSelected(ranNum);
  };

  const voteForAnecdote = () => {
    console.log("voting for anecdote ", selected);
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
  };

  const maxvotes = Math.max(...votes);
  const mostVotedIndex = votes.indexOf(maxvotes);

  return (
    <div>
      <div>
        <h1>Anecdote of the day</h1>
        <div> {anecdotes[selected]} </div>
        <div>{`Has ${votes[selected]} Votes`}</div>
        <div>
          <button onClick={voteForAnecdote}>Vote</button>{" "}
          <button onClick={ranNum}>Next Anectdote</button>{" "}
        </div>
      </div>
      <div>
        <h1>Anecdote with most votes</h1>
        <div>{anecdotes[mostVotedIndex]}</div>
        <div>{`Has ${votes[mostVotedIndex]} Votes`}</div>
      </div>
    </div>
  );
}

export default App;
