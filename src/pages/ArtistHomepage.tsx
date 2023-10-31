import React, { useEffect } from "react";
import DMNLogoAligned from "../components/DMNLogoAligned";
import EyeIcons from "../components/EyeIcon";
import WhiteCheckbox from "../components/WhiteCheckbox";
import { useNavigate } from "react-router-dom";

const ArtistHomepage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const handleNewButton = () => {
    navigate("/newPiece");
  };
  return (
    <div
      style={{
        backgroundColor: "#1f2129",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Top Bar */}
      <div
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
              // justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h3>No, Thank You!</h3>
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
          marginBottom: "200px",
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
          Edit
        </button>
      </div>
    </div>
  );
};

export default ArtistHomepage;
