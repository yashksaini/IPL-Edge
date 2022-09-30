import Home from "./Home";
import Game from "./Game";
import PlayerContextProvider from "./PlayerContex";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [game, setGame] = useState(0);
  const changePage = () => {
    setGame(1);
  };
  const changeType = (a) => {
    if (a) {
      setGame(0);
    } else {
      setGame(1);
    }
  };

  return (
    <div className="App">
      <PlayerContextProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Home game={game} changePage={changePage} />}
            ></Route>
            <Route
              path="/game"
              element={<Game game={game} changeType={changeType} />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </PlayerContextProvider>
    </div>
  );
}

export default App;
