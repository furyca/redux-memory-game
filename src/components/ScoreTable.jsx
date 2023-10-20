import { useDispatch, useSelector } from "react-redux";
import { startGame } from "../redux/frameworksSlice";
import { useEffect } from "react";

const ScoreTable = () => {
  const { score, activeFrameworks } = useSelector(
    (state) => state.frameworksSlice
  );

  const dispatch = useDispatch();
  const startNewGame = () => {
    dispatch(startGame());
  };

  useEffect(() => {
    startNewGame();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="scoretable">
      <h2>Score: <u>{score}</u> </h2>
      <button onClick={startNewGame} disabled={activeFrameworks.length === 2}>
        New Game
      </button>
    </div>
  );
};

export default ScoreTable;
