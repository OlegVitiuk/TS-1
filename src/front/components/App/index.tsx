import React from "react";
import CharacterList from "../СharacterList";
import "./App.css";

const App: React.SFC = () => {
  return (
    <div className="App">
      <header className="App-header">header app</header>
      <CharacterList />
    </div>
  );
};

export default App;
