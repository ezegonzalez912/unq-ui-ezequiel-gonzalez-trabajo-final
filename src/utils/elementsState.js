import { shuffleElements } from "./shuffleElements"

export const elementsState = (elements, tableSize) => {
    return shuffleElements(elements.slice(0, tableSize * tableSize))
}