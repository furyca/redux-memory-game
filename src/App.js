import ScoreTable from "./components/ScoreTable";
import Game from "./components/Game";
import ReactConfetti from "react-confetti";
import { useSelector } from "react-redux";

function App() {
  const { completedFrameworks } = useSelector(state => state.frameworksSlice)

  return (
    <div className="app">
      <ScoreTable />
      <Game />
      {completedFrameworks.length === 30 && <ReactConfetti />}
    </div>
  )
}

export default App;
