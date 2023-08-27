import React from "react";
import PhoneNumberInput from "../components/PhoneNumberInput";
import PhoneInput from "../components/PhoneInput";
import { useNavigate } from "react-router-dom";
import DMNLogo from "../components/DMNLogo";

const LoginScreen = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/signup"); // Navigate to the /signup route
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

      {/* Phone Number Input */}
      <PhoneNumberInput />

      {/* Log In Button */}
      <button
        onClick={handleButtonClick}
        style={{
          cursor: "pointer",
          marginTop: "20px",
          backgroundColor: "#7800ff",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Log In
      </button>
    </div>
  );
};

export default LoginScreen;
