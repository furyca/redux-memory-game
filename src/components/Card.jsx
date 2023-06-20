import { useDispatch, useSelector } from "react-redux";
import { pickCard, checkCards } from "../redux/frameworksSlice";
import { useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";

const Card = ({ name, id, src }) => {
  const { activeFrameworks, completedFrameworks } = useSelector(state => state.frameworksSlice)
  const [flip, setFlip] = useState(false);
  const [correct, setCorrect] = useState(false);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (
      activeFrameworks[0]?.id === id ||
      completedFrameworks.find((framework) => framework.id === id)
    ) {
      return;
    }
    setFlip(true);
    dispatch(pickCard({ name, id, src }));

    if (activeFrameworks.length === 1) {
      setTimeout(() => {
        dispatch(checkCards()); //{ name, id, src } not used
      }, 750);
    }
  };

  useEffect(() => {
    setFlip(
      !completedFrameworks.find((framework) => framework.id === id) &&
        !activeFrameworks.find((framework) => framework.id === id)
    );
    setCorrect(completedFrameworks.find((framework) => framework.id === id))
  }, [completedFrameworks, activeFrameworks, id]);

  return (
    <ReactCardFlip
      isFlipped={flip}
      flipSpeedBackToFront={1}
      flipSpeedFrontToBack={1}
    >
      <div className="card">
        <img src={src} alt={name} className={`${correct && 'correct'}`} />
      </div>
      <div
        className="card"
        disabled={activeFrameworks.length === 2}
        onClick={handleClick}
      >
        <div>?</div>
      </div>
    </ReactCardFlip>
  );
};

export default Card;
