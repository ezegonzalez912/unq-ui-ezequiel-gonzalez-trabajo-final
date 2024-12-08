import PropTypes from "prop-types";
import { getWinner } from "../utils/players";

export const Final = ({ players, resetGame }) => {
  const winner = getWinner(players);
  return (
    <div className="final-overlay">
      <div className="final">
        <p>¡El juego a finalizado!</p>
        <b>{winner}</b>
        <button className="final__button" onClick={resetGame}>
          Volver a jugar
        </button>
      </div>
    </div>
  );
};

Final.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  resetGame: PropTypes.func.isRequired,
};
