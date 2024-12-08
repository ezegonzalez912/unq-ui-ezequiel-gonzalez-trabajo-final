export const Settings = ({ tableSize, changeTableSize }) => {
  return (
    <section className="settings">
      <p className="settings__title">Tamaño de tablero</p>
      <input
        className="settings__input"
        type="range"
        step="2"
        min="2"
        max="8"
        value={tableSize}
        onChange={changeTableSize}
      />
    </section>
  );
};
