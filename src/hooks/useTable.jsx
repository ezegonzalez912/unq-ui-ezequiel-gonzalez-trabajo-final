import { useState } from "react";
import { shuffleElements } from "../utils/shuffleElements";
import { elementsState } from "../utils/elementsState";
import data from "../assets/elements.json";
import { table } from "../utils/constants";

const { DEFAULT_SIZE } = table;

export const useTable = () => {
  const [tableSize, setTableSize] = useState(DEFAULT_SIZE);
  const [elements, setElements] = useState(
    elementsState(data.elements, tableSize)
  );

  const changeTableSize = (e) => {
    const { value } = e.target;
    setTableSize(parseInt(value));
    const elements = value * value;
    setElements(shuffleElements(data.elements.slice(0, elements)));
  };

  const resetTable = () => {
    setElements(elementsState(data.elements, tableSize));
  };

  return { tableSize, changeTableSize, elements, setElements, resetTable };
};
