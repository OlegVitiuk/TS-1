import Navigation from "components/Navigation";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "routes/Home";
import ProtectedRoute from "routes/ProtectedRoute";
import SignIn from "routes/SignIn";
import SignUp from "routes/SignUp";
import styles from "./app.module.scss";

const App: React.SFC = () => {
  return (
    <div className={styles.appContainer}>
      <Router>
        <Navigation />
        <ProtectedRoute path="/" component={Home} exact={true} />
        <Route exact={true} path="/sign-in" component={SignIn} />
        <Route exact={true} path="/sign-up" component={SignUp} />
      </Router>
    </div>
  );
};

export default App;
