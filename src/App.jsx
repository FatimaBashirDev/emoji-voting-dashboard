import React, { useState } from "react";
import './App.css'
import Buttons from "./Buttons";
const App = () => {
  const [Filter,setFilter]=useState('ALL');
  const [emojis, setEmojis] = useState([
    { id: 1, symbol: "😂", name: "Laughing", votes: 0 },
    { id: 2, symbol: "👍", name: "Thumbs Up", votes: 0 },
    { id: 3, symbol: "😍", name: "Heart Eyes", votes: 0 },
    { id: 4, symbol: "😭", name: "Crying", votes: 0 },
    { id: 5, symbol: "😎", name: "Cool", votes: 0 },
    { id: 6, symbol: "🤯", name: "Mind Blown", votes: 0 },
    { id: 7, symbol: "🤔", name: "Thinking", votes: 0 },
    { id: 8, symbol: "🥳", name: "Party", votes: 0 },
    { id: 9, symbol: "😴", name: "Sleeping", votes: 0 },
    { id: 10, symbol: "🙌", name: "Celebration", votes: 0 },
    { id: 11, symbol: "💪", name: "Strong", votes: 0 },
    { id: 12, symbol: "🎉", name: "Confetti", votes: 0 },
    { id: 13, symbol: "🌟", name: "Star", votes: 0 },
    { id: 14, symbol: "💖", name: "Sparkling Heart", votes: 0 },

  ]);

  const handleClick = (id) => {
    setEmojis(
      emojis.map((emoji) =>
        emoji.id === id
          ? { ...emoji, votes: emoji.votes + 1 }
          : emoji
      )
    );
  };

  const winner = emojis.reduce((max, e) =>
    e.votes > max.votes ? e : max
  );

const FilteredEmojis=emojis.filter((em)=>{
 if (Filter === "TRENDING") return em.votes >= 5;
  if (Filter === "POPULAR") return em.votes >= 3;
  if (Filter === "NEW") return em.votes === 0;
  return true; // ALL
  
})
  return (
    <div>
      <h1>Emoji Voting dashboard</h1>
 <Buttons setFilter={setFilter}/>
      <h2>
        {winner.name} is the winner
      <br />  Winner: {winner.symbol} ({winner.votes} votes)
      </h2>

      {FilteredEmojis.map((em) => (
        <ul key={em.id}>
          <li>{em.name}</li>
          <li>{em.symbol}</li>
          <li>Votes: {em.votes}</li>
          <button onClick={() => handleClick(em.id)}>Vote</button>
        </ul>
      ))}
      
    </div>
  );
};

export default App;
