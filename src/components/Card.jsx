import PropTypes from "prop-types";

export const Card = ({ element, selectOption, tableSize }) => {
  const { flipped, value } = element;

  return (
    <div className="card-container" onClick={() => selectOption(element)}>
      <div
        className={`card-container__content ${
          !flipped ? "card-container__content--flipped" : ""
        }`}
        style={{ fontSize: tableSize > 5 ? "2rem" : "5rem" }}
      >
        <div className="card-container__content__front">
          <p>{value}</p>
        </div>
        <div className="card-container__content__back">
          <p>?</p>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  element: PropTypes.shape({
    flipped: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  selectOption: PropTypes.func.isRequired,
  tableSize: PropTypes.number.isRequired,
};
