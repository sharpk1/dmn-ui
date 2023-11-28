import React, { useEffect, useRef } from "react";
import DMNLogoAligned from "../components/DMNLogoAligned";
import EyeIcons from "../components/EyeIcon";
import WhiteCheckbox from "../components/WhiteCheckbox";
import { useNavigate } from "react-router-dom";

const ArtistHomepage: React.FC = () => {
  const topBarRef = useRef(null);

  useEffect(() => {
    console.log(window.history.scrollRestoration);
    if (window.history.scrollRestoration) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
    if (topBarRef.current) {
      // @ts-ignore
      topBarRef.current.tabIndex = -1;
      // @ts-ignore
      topBarRef.current.focus();
    }
  }, []);

  const navigate = useNavigate();
  const handleNewButton = () => {
    navigate("/home/newPiece");
  };

  const handlePiece = () => {
    navigate("/home/piece");
  };
  return (
    <div
      style={{
        backgroundColor: "#1f2129",
        color: "white",
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        paddingTop: "15px",
      }}
    >
      {/* Top Bar */}
      <div
        ref={topBarRef}
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
        }}
      >
        {/* Logo */}
        <div>
          <DMNLogoAligned />
        </div>

        {/* TODO: need to have the right gear icon  */}
        <div style={{ fontSize: "30px" }}>⚙️</div>
      </div>

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          flexDirection: "column",
          margin: "20px",
        }}
      >
        <h1>
          Hi, Brian Carano <br /> Welcome to Dark Matter Network!
        </h1>

        <div style={{ textAlign: "left" }}>
          <h1 style={{ marginTop: "50px" }}>Your pieces</h1>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <h3
              onClick={handlePiece}
              style={{ cursor: "pointer", textDecoration: "underline" }}
            >
              No, Thank You!
            </h3>
            <EyeIcons />
            <h4 style={{ marginLeft: "5px" }}>23</h4>
            <h4 style={{ marginLeft: "10px" }}>10 comments</h4>
            <WhiteCheckbox />
          </div>
        </div>
      </div>

      {/* Bottom Buttons */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "10px",
          marginBottom: "100px",
        }}
      >
        {/* New Button */}
        <button
          onClick={handleNewButton}
          style={{
            width: "125px",
            backgroundColor: "#7800ff",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            fontWeight: "bold",
          }}
        >
          New
        </button>

        {/* Edit Button */}
        <button
          style={{
            fontWeight: "bold",
            width: "125px",
            backgroundColor: "#7800ff",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Edits
        </button>
      </div>
    </div>
  );
};

export default ArtistHomepage;
