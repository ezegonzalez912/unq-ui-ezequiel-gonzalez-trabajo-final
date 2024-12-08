import { Dashboard } from "../components/Dashboard";
import { Table } from "../components/Table";
import { Settings } from "../components/Settings";
import { useTable } from "../hooks/useTable";
import { useGame } from "../hooks/useGame";

export const Game = () => {
  const { tableSize, changeTableSize, elements, setElements } = useTable();
  const { players, selectOption } = useGame({ setElements, elements });

  return (
    <div className="memotest__game">
      <Dashboard players={players} />
      <Table
        elements={elements}
        tableSize={tableSize}
        selectOption={selectOption}
      />
      <Settings tableSize={tableSize} changeTableSize={changeTableSize} />
    </div>
  );
};
