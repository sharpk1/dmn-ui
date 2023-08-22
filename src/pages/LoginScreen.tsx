import React from "react";
import PhoneNumberInput from "../components/PhoneNumberInput";

const LoginScreen = () => {
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
      {/* Logo */}
      <div
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: "white",
          marginBottom: "20px",
        }}
      >
        {/* You can replace the below div with an <img> tag for your logo */}
        <div style={{ fontSize: "30px", textAlign: "center" }}>📱</div>{" "}
        {/* This is a placeholder phone emoji for the logo */}
      </div>

      {/* Phone Number Input */}
      <PhoneNumberInput />

      {/* Log In Button */}
      <button
        style={{
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
