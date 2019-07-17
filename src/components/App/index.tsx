import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import Home from "routes/Home";
import Pay from "routes/Pay";
import SignIn from "routes/SignIn";
import SignUp from "routes/SignUp";
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
