import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

// dit is nodig voor een aparte URL te maken:
//uitleg: https://blog.pusher.com/getting-started-with-react-router-v4/

import App from "./App";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
