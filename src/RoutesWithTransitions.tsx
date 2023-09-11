// RoutesWithTransitions.js

import { Routes, Route, Outlet, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import LoginScreen from "./pages/LoginScreen";
import SignUp from "./pages/SignUp";
import "./index.css";
import ArtistHomepage from "./pages/ArtistHomepage";
import CreateNewPiece from "./pages/CreateNewPiece";
import PieceInformation from "./pages/PieceInformation";

const RoutesWithTransitions = () => {
  const location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="slide" timeout={450}>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<ArtistHomepage />} />
          <Route path="/newPiece" element={<CreateNewPiece />} />
          <Route path="/piece" element={<PieceInformation />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default RoutesWithTransitions;