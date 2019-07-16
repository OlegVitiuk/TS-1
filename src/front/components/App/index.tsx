import SignIn from "front/components/SignIn";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import styles from "./app.module.scss";

const App: React.SFC = () => {
  return (
    <div className={styles.App}>
      <SignIn />
    </div>
  );
};

export default App;
