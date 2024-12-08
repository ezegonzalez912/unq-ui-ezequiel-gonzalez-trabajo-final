import PropTypes from "prop-types";

export const Dashboard = ({ players }) => {
  return (
    <div className="dashboard">
      {players.map((player) => (
        <div key={player.name} className={"dashboard__player"}>
          <p
            className={`dashboard__player__name ${
              player.turn ? "dashboard__player__name--active" : ""
            }`}
          >
            {player.turn && "➤"} {player.name}
          </p>
          <p>Puntos: {player.points}</p>
        </div>
      ))}
    </div>
  );
};

Dashboard.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
