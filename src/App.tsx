import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PhoneNumberInput from "./components/PhoneNumberInput";
import LoginScreen from "./pages/LoginScreen";
import SignUp from "./pages/SignUp";

function App() {
  console.log("App running");
  return <LoginScreen />;
}

export default App;
