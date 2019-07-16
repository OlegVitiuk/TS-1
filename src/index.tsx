import * as serviceWorker from "front/serviceWorker";
import * as React from "react";
import * as ReactDOM from "react-dom";

/* Make the store available to all container 
components in the application without passing it explicitly */
import { Provider } from "react-redux";

// Store type from Redux
import { Store } from "redux";

// Import the store function and state
import { getAllCharacters } from "front/actions/CharacterActions";
import configureStore, { IAppState } from "front/store";

import "antd/dist/antd.css";
import App from "front/components/App";
import "./index.css";

interface IProps {
  store: Store<IAppState>;
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
store.dispatch(getAllCharacters());

// Render the App
ReactDOM.render(<Root store={store} />, document.getElementById(
  "root"
) as HTMLElement);

serviceWorker.unregister();
