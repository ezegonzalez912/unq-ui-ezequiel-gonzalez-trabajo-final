export const Dashboard = ({ players }) => {
  return (
    <div>
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
