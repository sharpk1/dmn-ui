// RoutesWithTransitions.js

import { Routes, Route, Outlet, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import LoginScreen from "./pages/LoginScreen";
import SignUp from "./pages/SignUp";
import "./index.css";
import ArtistHomepage from "./pages/ArtistHomepage";
import CreateNewPiece from "./pages/CreateNewPiece";
import PieceInformation from "./pages/PieceInformation";
import Comments from "./pages/CommentsPage";
import Purchase from "./pages/PurchasePage";
import ApplePay from "./components/ApplePay";
import Registration from "./pages/Registration";

const RoutesWithTransitions = () => {
  const location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="slide" timeout={450}>
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<ArtistHomepage />} />
          <Route path="/newPiece" element={<CreateNewPiece />} />
          <Route path="/piece" element={<PieceInformation />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/purchase" element={<Purchase />} />
          <Route path="/apple-pay" element={<ApplePay />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default RoutesWithTransitions;
