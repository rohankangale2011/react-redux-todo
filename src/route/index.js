import React from "react";
import { Route, Link } from "react-router-dom";
import Header from '../common/header';
import ToDo from "../pages/todo";

const RouterConfig = () => {
  return (
    <div className="body-container">
      <Header />
      <Route exact path="/" component={ToDo} />
    </div>
  );
};

export default RouterConfig;
