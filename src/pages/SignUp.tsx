import React from "react";

const SignUp = () => {
  const inputStyle = {
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
      {/* Logo */}
      <div
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: "white",
          marginBottom: "20px",
        }}
      >
        <div style={{ fontSize: "30px", textAlign: "center" }}>📱</div>
      </div>

      {/* Email Input */}
      <input type="email" placeholder="Email" style={inputStyle} />

      {/* Name Input */}
      <input type="text" placeholder="Name" style={inputStyle} />

      {/* Password Input */}
      <input type="password" placeholder="Password" style={inputStyle} />

      {/* Save Button */}
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
        Save
      </button>
    </div>
  );
};

export default SignUp;
