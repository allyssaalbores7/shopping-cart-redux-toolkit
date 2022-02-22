import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";

import Container from "./components/Container/Container";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Container>
        <App />
      </Container>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
