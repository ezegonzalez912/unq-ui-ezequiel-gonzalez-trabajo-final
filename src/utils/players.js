const addPoint = (players) => {
  if (players.length === 1) {
    return [{ ...players[0], points: players[0].points + 1 }];
  }

  return players.map((player) =>
    player.turn
      ? { ...player, points: player.points + 1, turn: false }
      : { ...player, turn: true }
  );
};

const nextTurn = (players) => {
  if (players.length === 1) {
    return players;
  }

  return players.map((player) => ({ ...player, turn: !player.turn }));
};

const getWinner = (players) => {
  if (players.length === 1) return "Has ganado!";

  const [player1, player2] = players;

  if (player1.points === player2.points) {
    return "El resultado es un empate.";
  }

  return player1.points > player2.points
    ? `El ${player1.name} es el ganador!`
    : `El ${player2.name} es el ganador!`;
};

export { addPoint, nextTurn, getWinner };
