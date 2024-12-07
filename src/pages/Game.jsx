import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import data from "../assets/elements.json";
import { Card } from "../components/Card";
import { shuffleElements } from "../utils/shuffleElements";
import {
  flippedElement,
  flippedElementAndMatch,
  hasFlippedElement,
  unFlippedElements,
} from "../utils/flipped";
import { playerState } from "../utils/playersState";
import { Dashboard } from "../components/Dashboard";
import { addPoint, nextTurn } from "../utils/players";

export const Game = () => {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode");

  const [players, setPlayers] = useState(playerState(mode));
  const [tableSize, setTableSize] = useState(2);
  const [elements, setElements] = useState(
    shuffleElements(data.elements.slice(0, tableSize * tableSize))
  );  

  const changeTableSize = (e) => {
    const { value } = e.target;
    setTableSize(value);
    const elements = value * value;
    setElements(shuffleElements(data.elements.slice(0, elements)));
  };

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
      setPlayers(prev => nextTurn(prev));
    }, 2000);
  };

  return (
    <div>
      <h1>{mode}</h1>
      <Dashboard players={players} />
      {elements.map((e) => (
        <Card key={e.id} element={e} selectOption={selectOption} />
      ))}
      <section>
        <p>Tamaño de tablero</p>
        <input
          type="range"
          step="2"
          min="2"
          max="8"
          value={tableSize}
          onChange={changeTableSize}
        />
      </section>
    </div>
  );
};
