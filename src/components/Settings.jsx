export const Settings = ({ tableSize, changeTableSize }) => {
  return (
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
  );
};
