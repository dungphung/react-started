import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ModalContext } from "./context";
import { Provider } from "react-redux";
import { createRedux } from "./redux/stores";

import { LoginPage } from "./pages";
import Container from "./container";
import "./App.scss";

const store = createRedux();

function App(props) {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ModalContext>
          <Switch>
            <Route exact path="/login" component={LoginPage} />
            <Container {...props} />
          </Switch>
        </ModalContext>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
