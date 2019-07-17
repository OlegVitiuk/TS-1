import * as React from "react";
import * as ReactDOM from "react-dom";

/* Make the store available to all container 
components in the application without passing it explicitly */
import { Provider } from "react-redux";

// Store type from Redux
import { Store } from "redux";

import configureStore, { AppState } from "store";

import "antd/dist/antd.css";
import App from "components/App";
import "./index.css";

interface IProps {
  store: Store<AppState>;
}

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

// Generate the store
const store = configureStore();

// Render the App
ReactDOM.render(<Root store={store} />, document.getElementById(
  "root"
) as HTMLElement);
