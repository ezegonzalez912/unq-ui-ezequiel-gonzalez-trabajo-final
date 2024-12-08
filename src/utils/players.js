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

export { addPoint, nextTurn };
