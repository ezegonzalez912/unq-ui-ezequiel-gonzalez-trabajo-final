import PropTypes from "prop-types";
import { Card } from "./Card";

export const Table = ({ elements, selectOption, tableSize }) => {
  const gridStyle = {
    gridTemplateColumns: `repeat(${tableSize}, 1fr)`,
    gridTemplateRows: `repeat(${tableSize}, 1fr)`,
  };

  return (
    <div className="table" style={gridStyle}>
      {elements.map((e) => (
        <Card
          key={e.id}
          element={e}
          selectOption={selectOption}
          tableSize={tableSize}
        />
      ))}
    </div>
  );
};

Table.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  selectOption: PropTypes.func.isRequired,
  tableSize: PropTypes.number.isRequired,
};
