// RoutesWithTransitions.js

import { Routes, Route, Outlet, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import LoginScreen from "./pages/LoginScreen";
import SignUp from "./pages/SignUp";
import "./index.css";

const RoutesWithTransitions = () => {
  const location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="slide" timeout={450}>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default RoutesWithTransitions;
