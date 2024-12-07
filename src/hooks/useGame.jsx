import { useState } from "react";
import {
  flippedElement,
  flippedElementAndMatch,
  hasFlippedElement,
  unFlippedElements,
} from "../utils/flipped";
import { playerState } from "../utils/playersState";
import { addPoint, nextTurn } from "../utils/players";
import { useSearchParams } from "react-router";

export const useGame = ({ setElements, elements }) => {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode");

  const [players, setPlayers] = useState(playerState(mode));

  const selectOption = (element) => {
    const foundFlippedElement = hasFlippedElement(elements);

    if (!foundFlippedElement) {
      setElements((prev) => flippedElement(element, prev));
      return;
    }

    if (foundFlippedElement.value === element.value) {
      setElements((prev) => flippedElementAndMatch(element, prev));
      setPlayers((prev) => addPoint(prev));
      return;
    }

    setElements((prev) => flippedElement(element, prev));
    setTimeout(() => {
      setElements((prev) => unFlippedElements(prev));
      setPlayers((prev) => nextTurn(prev));
    }, 2000);
  };

  return { selectOption, players };
};
