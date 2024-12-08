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
  const [load, setLoad] = useState(false);

  const selectOption = (element) => {
    if (load) return;
    setLoad(true);

    const foundFlippedElement = hasFlippedElement(elements);

    if (foundFlippedElement?.id === element.id) return;

    if (!foundFlippedElement) {
      setElements((prev) => flippedElement(element, prev));
      setLoad(false);
      return;
    }

    if (foundFlippedElement.value === element.value) {
      setElements((prev) => flippedElementAndMatch(element, prev));
      setPlayers((prev) => addPoint(prev));
      setLoad(false);
      return;
    }

    setElements((prev) => flippedElement(element, prev));
    setTimeout(() => {
      setElements((prev) => unFlippedElements(prev));
      setPlayers((prev) => nextTurn(prev));
      setLoad(false);
    }, 2000);
  };

  return { selectOption, players };
};
