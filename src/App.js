import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./component/Home";
import Devices from "./component/Devices";
import ProtectedRoute from "./component/ProtectedRoute";
import "./sass/main.scss";

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Home} />
        <ProtectedRoute exact path="/devices" component={Devices} />
      </Switch>
    </div>
  );
};

export default App;
