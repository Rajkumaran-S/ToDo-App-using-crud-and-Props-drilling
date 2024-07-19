import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const DATA = [
  { id: "todo-0", name: "Gym", completed: true, priority: "High" },
  { id: "todo-1", name: "Cleaning", completed: false, priority: "Medium"},
  { id: "todo-2", name: "Movie", completed: false, priority: "Low" }
];

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>,
  rootElement
);