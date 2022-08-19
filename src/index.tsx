import React from "react";
import ReactDOM from "react-dom/client";
import { Routesa } from "./routes";
import "simpledotcss/simple.min.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <Routesa />
  </React.StrictMode>
);
