import React from "react";
import { ConnectedRouter } from "react-router-redux";
import AppMain from "./route";
import { Provider } from "react-redux";
import { configStore, history } from "./store/store-config";
import './App.css';

const store = configStore();

history.listen((location, action) => {
  // listen to route change event and perform operations based on the respective event
});

const App = () => {
  return (
    <Provider store={store}>
      <div className="app-container">
        <ConnectedRouter history={history}>
          <AppMain />
        </ConnectedRouter>
      </div>
    </Provider>
  );
};

export default App;
