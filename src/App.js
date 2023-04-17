import { useSelector } from "react-redux";
import Card from "./components/Card";
import { nanoid } from "@reduxjs/toolkit";
import ScoreTable from "./components/ScoreTable";

function App() {
  const shuffledCards = useSelector(state => state.frameworksSlice.randomizedFrameworks)
  
  return (
    <div className="app">
      <ScoreTable />
      <div className="container">
        {shuffledCards.map(card => {
          const id = nanoid()
          return <Card key={id} name={card} id={id} src={`/assets/${card}.png`} />
        })}
      </div>
    </div>
  )
}

export default App;
