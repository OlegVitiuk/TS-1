import React from "react";
import CharacterList from "../СharacterList";
import styles from "./app.module.scss";

const App: React.SFC = () => {
  return (
    <div className={styles.App}>
      <header className={styles.App_header}>header app</header>
      <CharacterList />
    </div>
  );
};

export default App;
