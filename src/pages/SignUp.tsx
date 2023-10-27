import React from "react";
import DMNLogo from "../components/DMNLogo";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/home"); // Navigate to the /signup route
  };
  const inputStyle = {
    fontSize: "16px",
    padding: "10px",
    margin: "10px 0",
    backgroundColor: "#1f2129",
    color: "white",
    border: "1px solid #444",
    borderRadius: "500px",
  };

  return (
    <div
      style={{
        backgroundColor: "#1f2129",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <DMNLogo />

      {/* Email Input */}
      <input type="email" placeholder="Email" style={inputStyle} />

      {/* Name Input */}
      <input type="text" placeholder="Name" style={inputStyle} />

      {/* Password Input */}
      <input type="password" placeholder="Password" style={inputStyle} />

      {/* Save Button */}
      <button
        onClick={handleButtonClick}
        style={{
          fontSize: "16px",
          marginTop: "20px",
          backgroundColor: "#7800ff",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Save
      </button>
    </div>
  );
};

export default SignUp;
