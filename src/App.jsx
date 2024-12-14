import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { Game } from "./pages/Game";
import { modes } from "./utils/constants";

const { SINGLEPLAYER, MULTIPLAYER } = modes;

const App = () => {
  return (
    <main className="memotest">
      <Router basename="/unq-ui-ezequiel-gonzalez-trabajo-final/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={`/play/${SINGLEPLAYER}`} element={<Game mode={SINGLEPLAYER} />} />
          <Route path={`/play/${MULTIPLAYER}`} element={<Game mode={MULTIPLAYER} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
