import React, { useState } from "react";
import {
  BsFillEyeFill,
  BsFillPencilFill,
  BsCheck2Circle,
} from "react-icons/bs";
import art from "../assets/art.webp";
import { PaymentForm } from "react-square-web-payments-sdk";
import ApplePay from "../components/ApplePay";

const Purchase: React.FC = () => {
  // const [purchaseState, setPurchaseState] = useState<"pending" | "completed">(
  //   "pending"
  // );
  // const [mode, setMode] = useState("view");
  // const toggleMode = () => {
  //   setMode(mode === "view" ? "edit" : "view");
  // };
  // TODO: make this accessible by other components. Its being DRY'd
  const inputStyle = {
    padding: "10px",
    margin: "10px 0",
    backgroundColor: "#1f2129",
    color: "white",
    border: "1px solid #444",
    borderRadius: "500px",
    width: "-webkit-fill-available",
    fontFamily: "Arial, sans-serif",
  };

  return (
    <div
      style={{
        // backgroundColor: "black",
        color: "white",
        padding: "20px",
        margin: "10px", // Added margin around the entire component
      }}
    >
      {/* Container to center the image */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={art}
          alt="example"
          style={{
            borderRadius: "16px",
            height: "350px",
            width: "350px",
            margin: "auto", // Centers the image
          }}
        />
      </div>

      {/* Text and Icon (left-aligned) */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "10px",
          justifyContent: "space-between",
          width: "350px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "10px",
            justifyContent: "center",
            width: "350px",
          }}
        >
          <div style={{ textAlign: "center" }}>
            {" "}
            <h2 id="title" style={{ margin: 0 }}>
              No, Thank You!
            </h2>
            <h4
              id="artist"
              style={{ margin: 0, paddingLeft: 10, marginBottom: "10px" }}
            >
              Brian Carano
            </h4>
            <h2 id="title" style={{ margin: 0 }}>
              Photograph
            </h2>
            <h4 id="artist" style={{ margin: 0, paddingLeft: 10 }}>
              20" x 30"
            </h4>
            <h2 id="title" style={{ margin: 0 }}>
              Price: $300
            </h2>
            <div style={{ marginTop: "25px" }}>
              <ApplePay />
            </div>
          </div>
        </div>
      </div>

      <br />

      <div
        style={{
          flexDirection: "column",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "30px",
        }}
      ></div>
    </div>
  );
};

export default Purchase;
