import { Dashboard } from "../components/Dashboard";
import { Table } from "../components/Table";
import { Settings } from "../components/Settings";
import { useTable } from "../hooks/useTable";
import { useGame } from "../hooks/useGame";
import { Final } from "../components/Final";

export const Game = ({ mode }) => {
  const { tableSize, changeTableSize, elements, setElements, resetTable } = useTable();
  const { foundElements, players, selectOption, resetGame } = useGame({ mode, setElements, elements, resetTable });

  const finalized = foundElements === (tableSize * tableSize) / 2;

  return (
    <div className="memotest__game">
      {finalized && <Final players={players} resetGame={resetGame} />}
      <h1>EmojiTest</h1>
      <Dashboard players={players} />
      <Table elements={elements} tableSize={tableSize} selectOption={selectOption} />
      <Settings tableSize={tableSize} changeTableSize={changeTableSize} resetGame={resetGame} />
    </div>
  );
};
