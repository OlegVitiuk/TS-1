import firebase from "config/fbConfig";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Store } from "redux";
import { createFirestoreInstance } from "redux-firestore";

import configureStore, { AppState } from "store";

import "antd/dist/antd.css";
import App from "components/App";
import "./index.css";

interface IProps {
  store: Store<AppState>;
}

// Generate the store
const store = configureStore();

/* 
Create a root component that receives the store via props
and wraps the App component with Provider, giving props to containers
*/
const Root: React.SFC<IProps> = props => {
  return (
    <Provider store={props.store}>
      <App />
    </Provider>
  );
};

// Render the App
ReactDOM.render(<Root store={store} />, document.getElementById(
  "root"
) as HTMLElement);
