import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./services/firebase";

// DOM = Document Object Model
// HTML dentro do JS => JSX
// componente = e uma funcao que retorna HTML

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
