import PropTypes from "prop-types";

export const Dashboard = ({ players }) => {
  return (
    <div className="dashboard">
      {players.map((player) => (
        <div key={player.name}>
            <p>{player.name}</p>
            <p>{player.points}</p>
            <p>{JSON.stringify(player.turn)}</p>
        </div>
      ))}
    </div>
  );
};

Dashboard.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
