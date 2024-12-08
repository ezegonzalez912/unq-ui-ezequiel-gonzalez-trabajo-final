import PropTypes from "prop-types";

export const Settings = ({ tableSize, changeTableSize, resetGame }) => {

  const handleChangeSize = (e) => {
    resetGame();
    changeTableSize(e);
  };

  return (
    <section className="settings">
      <div className="settings__content">
        <p className="settings__title">Tamaño de tablero</p>
        <input
          className="settings__input"
          type="range"
          step="2"
          min="2"
          max="8"
          value={tableSize}
          onChange={handleChangeSize}
        />
      </div>
      <button className="settings__btn" onClick={resetGame}>
        Volver a comenzar
      </button>
    </section>
  );
};

Settings.propTypes = {
  resetGame: PropTypes.func.isRequired,
  changeTableSize: PropTypes.func.isRequired,
  tableSize: PropTypes.number.isRequired,
};
