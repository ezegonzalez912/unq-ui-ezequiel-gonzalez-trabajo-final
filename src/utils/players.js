const addPoint = (players) => {
  return players.map((player) =>
    player.turn
      ? { ...player, points: player.points + 1, turn: false }
      : { ...player, turn: true }
  );
};

const nextTurn = (players) => {
  if (players.length === 1) {
    return;
  }

  return players.map((player) => ({ ...player, turn: !player.turn }));
};

export { addPoint, nextTurn };
