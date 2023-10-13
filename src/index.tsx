// Index.js (or whichever file you are setting up the rendering)

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, RouterProvider, Routes } from "react-router-dom";
import RoutesWithTransitions from "./RoutesWithTransitions";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const options = {
  clientSecret:
    "sk_test_51O0YYZJGlKuNf6Ml3dzhL56eQTNGleA6lY4XVjY8fLp44gs0MuLyT7qnOkDsU2iLfGp6zAtRKBYiOAd0XgjboOeG00ONN5inAj",
};

const stripePromise = loadStripe(
  "pk_test_51O0YYZJGlKuNf6MliAaltfJjC0rPx15SAooQMSyRm4NFizXs0f9lwcsS0701Bl0b2VTVQawHddKixNTlgcN2hdKk00XewZidXz"
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Elements stripe={stripePromise}>
      <BrowserRouter>
        <RoutesWithTransitions />
      </BrowserRouter>
    </Elements>
  </React.StrictMode>
);

reportWebVitals();
