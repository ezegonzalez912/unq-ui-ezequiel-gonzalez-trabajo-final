import { useState } from "react";
import {
  flippedElement,
  flippedElementAndMatch,
  hasFlippedElement,
  unFlippedElements,
} from "../utils/flipped";
import { playerState } from "../utils/playersState";
import { addPoint, nextTurn } from "../utils/players";

export const useGame = ({ mode, setElements, elements, resetTable }) => {
  const [players, setPlayers] = useState(playerState(mode));
  const [load, setLoad] = useState(false);
  const [foundElements, setFoundElements] = useState(0);

  const resetGame = () => {
    setPlayers(playerState(mode));
    setFoundElements(0);
    resetTable();
  };

  const selectOption = (element) => {
    if (load) return;
    setLoad(true);

    const foundFlippedElement = hasFlippedElement(elements);

    if (foundFlippedElement?.id === element.id) {
      setLoad(false);
      return;
    }

    if (!foundFlippedElement) {
      setElements((prev) => flippedElement(element, prev));
      setLoad(false);
      return;
    }

    if (foundFlippedElement.value === element.value) {
      setElements((prev) => flippedElementAndMatch(element, prev));
      setTimeout(() => {
        setPlayers((prev) => addPoint(prev));
        setFoundElements((prev) => prev + 1);
        setLoad(false);
      }, 1000);
      return;
    }

    setElements((prev) => flippedElement(element, prev));
    setTimeout(() => {
      setElements((prev) => unFlippedElements(prev));
      setPlayers((prev) => nextTurn(prev));
      setLoad(false);
    }, 1000);
  };

  return { foundElements, selectOption, players, resetGame };
};
