import React from "react";
import { BsFillEyeFill, BsFillPencilFill } from "react-icons/bs";
import art from "../assets/art.webp";

const PieceInformation: React.FC = () => {
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
          justifyContent: "space-between", // Added this
          width: "350px", // Matching the image's width
        }}
      >
        <div style={{ display: "flex", alignItems: "center", margin: 0 }}>
          <h2 style={{ margin: 0 }}>No, Thank You!</h2>
          <BsFillEyeFill
            color="white"
            size={24}
            style={{ marginLeft: "10px" }}
          />
          <h3 style={{ marginLeft: "10px" }}>23</h3>
        </div>
        <BsFillPencilFill color="white" size={14} />
      </div>
      <h4 style={{ margin: 0, paddingLeft: 10 }}>Brian Carano</h4>
      <h2>Photograph</h2>
      <h4 style={{ margin: 0, paddingLeft: 10 }}>20" x 30"</h4>
      <br />
      <h4 style={{ margin: 0, paddingLeft: 10 }}>Description:</h4>
      <h4 style={{ margin: 0, paddingLeft: 10 }}>
        You just won big! Vegas thinks you are a chump, but this time you robbed
        the casino and walked away a big winner!
      </h4>
      <br />
      <h4 style={{ margin: 0, paddingLeft: 10 }}>Curations/Events:</h4>
      <h4 style={{ margin: 0, paddingLeft: 10 }}>
        Night at the Museum: 7 comments
      </h4>
      <h4 style={{ margin: 0, paddingLeft: 10 }}>
        Day of the Dead: 7 comments
      </h4>
      <h4 style={{ margin: 0, paddingLeft: 10 }}>
        First Friday 3/26/23: 6 comments
      </h4>
      {/* Button container */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "30px", // Pushes the buttons towards the bottom
        }}
      >
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
          Tag
        </button>
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
          Submit
        </button>
      </div>
    </div>
  );
};

export default PieceInformation;
