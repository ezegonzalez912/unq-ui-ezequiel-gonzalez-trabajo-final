const unFlippedElements = (elements) => {
  return elements.map((e) =>
    e.flipped && !e.matched ? { ...e, flipped: false } : e
  );
};

const flippedElement = (element, elements) => {
  return elements.map((e) =>
    e.id === element.id ? { ...e, flipped: !e.flipped } : e
  );
};

const flippedElementAndMatch = (element, elements) => {
  return elements.map((e) =>
    e.value === element.value ? { ...e, flipped: true, matched: true } : e
  );
};

const hasFlippedElement = (elements) => {
  return elements.find((e) => e.flipped && !e.matched);
};

export {
  unFlippedElements,
  flippedElement,
  hasFlippedElement,
  flippedElementAndMatch,
};
