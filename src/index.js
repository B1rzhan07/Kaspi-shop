import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "macro-css";
import { BrowserRouter } from "react-router-dom";
import Kbtu from "./Kbtu";
import { Provider } from "react-redux";

import { store } from "./Redux/store";
const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Kbtu />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
