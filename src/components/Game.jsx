import Card from "./Card";
import { useSelector } from "react-redux";

const Game = () => {
  const { randomizedFrameworks } = useSelector(state => state.frameworksSlice)

  const cards = randomizedFrameworks.map(card => {
    return <Card key={card.id} name={card.name} id={card.id} src={card.src} />;
  });

  return <div className="container">{cards}</div>;
};

export default Game;
