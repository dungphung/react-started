import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { LoginPage } from "./pages";
import Container from "./container";
import "./App.scss";

function App(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Container {...props} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
