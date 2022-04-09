import React from "react";
import { GameInfoContextProvider } from "./contexts/GameInfoContext";
import Router from "./routes/Router";

const App = () => {
  return (
    <GameInfoContextProvider>
      <Router />
    </GameInfoContextProvider>
  );
}

export default App;
