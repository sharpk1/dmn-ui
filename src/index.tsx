// Index.js (or whichever file you are setting up the rendering)

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, RouterProvider, Routes } from "react-router-dom";
import RoutesWithTransitions from "./RoutesWithTransitions";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RoutesWithTransitions />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
