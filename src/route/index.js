import React from "react";
import { Route } from "react-router-dom";
import Header from '../common/header';
import ToDo from "../pages/todo";
import Other from '../pages/other';

const AppMain = () => {
  return (
    <div className="body-container">
      <Header />
      <Route exact path="/" component={ToDo} />
      <Route exact path="/other" component={Other} />
    </div>
  );
};

export default AppMain;
