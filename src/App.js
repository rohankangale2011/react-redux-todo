import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";
import RouterConfig from "./route";
import { Provider } from "react-redux";
import { configStore, history } from "./store/store-config";
import Header from "./common/header";
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
          <RouterConfig />
        </ConnectedRouter>
      </div>
    </Provider>
  );
};

export default App;
