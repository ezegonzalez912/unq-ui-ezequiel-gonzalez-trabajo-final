import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Game } from "./pages/Game";

const App = () => {
  return (
    <main className="memotest">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/play" element={<Game />} />
          <Route path="*" element={<p>Aun nada...</p>} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
