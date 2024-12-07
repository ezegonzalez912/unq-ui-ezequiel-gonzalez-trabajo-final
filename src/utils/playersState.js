import { modes } from "./constants";

const { SINGLEPLAYER, MULTIPLAYER } = modes;

export const playerState = (mode) => {
  if (mode === SINGLEPLAYER) {
    return [{ name: "Jugador 1", points: 0, turn: true }];
  }

  if (mode === MULTIPLAYER) {
    return [
      { name: "Jugador 1", points: 0, turn: true },
      { name: "Jugador 2", points: 0, turn: false },
    ];
  }
};
