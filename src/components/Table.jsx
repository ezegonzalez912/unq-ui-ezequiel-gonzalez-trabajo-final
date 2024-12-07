import { Card } from "./Card";

export const Table = ({ elements, selectOption }) => {
  return (
    <div>
      {elements.map((e) => (
        <Card key={e.id} element={e} selectOption={selectOption} />
      ))}
    </div>
  );
};
