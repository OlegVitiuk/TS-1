import Home from "components/Home";
import Pay from "components/Pay";
import SignIn from "components/SignIn";
import SignUp from "components/SignUp";
import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import styles from "./app.module.scss";

const App: React.SFC = () => {
  return (
    <div>
      <Router>
        <Route exact={true} path="/" component={SignIn} />
        <Route exact={true} path="/sign-up" component={SignUp} />
        <Route exact={true} path="/home" component={Home} />
        <Route exact={true} path="/pay" component={Pay} />
      </Router>
    </div>
  );
};

export default App;
