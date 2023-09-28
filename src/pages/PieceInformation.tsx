import React, { useState } from "react";
import {
  BsFillEyeFill,
  BsFillPencilFill,
  BsCheck2Circle,
} from "react-icons/bs";
import art from "../assets/art.webp";
import { jsPDF } from "jspdf";
import { useNavigate } from "react-router-dom";
import newDmnLogo from "../assets/RECTANGESBLACK.png";
import font64 from "../components/FontExport";
import QRCode from "qrcode";
import exportedFont from "../components/AnotherFontExport";

const PieceInformation: React.FC = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState("view");
  const toggleMode = () => {
    setMode(mode === "view" ? "edit" : "view");
  };
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

  const createTag = async () => {
    // TODO: Need to update the font for this PDF generation
    const doc = new jsPDF({
      orientation: "landscape",
      unit: "mm",
      format: [127, 203.2],
    });

    // doc.addFileToVFS("Helvetica-Neue-Condensed-Bold.ttf", font64);
    // doc.addFont("Helvetica-Neue-Condensed-Bold.ttf", "HelveticaNeue", "normal");
    // doc.setFont("HelveticaNeue", "normal");
    doc.addFileToVFS("roadgeek-2005-engschrift.ttf", exportedFont);
    doc.addFont("roadgeek-2005-engschrift.ttf", "roadgeek", "normal");
    doc.setFont("roadgeek", "normal");

    doc.setTextColor(120, 0, 255);

    doc.addImage(newDmnLogo, "PNG", -10, 0, 65, 35); // Adds image at (10, 10) with dimensions 40x40

    try {
      const qrCodeDataURL = await QRCode.toDataURL("https://www.example.com", {
        width: 64, // or any size you want
      });
      // Add the QR code to the PDF at the bottom left
      doc.addImage(qrCodeDataURL, "PNG", 3, 80, 45, 45);
    } catch (err) {
      console.error("Could not generate QR code", err);
    }

    const title = document.getElementById("title")?.innerText || "";
    const artist = document.getElementById("artist")?.innerText || "";
    const size = document.getElementById("size")?.innerText || "";
    const medium = document.getElementById("medium")?.innerText || "";
    // Add other fields such as price based on their ids
    doc.setFontSize(36);
    // Position text to the right of the logo, adjust the x-coordinate
    doc.text(`Title: ${title}`, 70, 25);
    doc.text(`Artist: ${artist}`, 70, 45);
    doc.text(`Medium: ${medium}`, 70, 65);
    doc.text(`Size: ${size}`, 70, 85);
    doc.text(`Price: $300`, 70, 105);
    // Add other fields such as price
    doc.setFontSize(24);
    // Add "Dark Matter Network" text below the logo
    doc.setCharSpace(-0.25);
    doc.text("Dark Matter", 8, 45);
    doc.text("Network", 8, 52);
    doc.text("Connect, engage,", 8, 65);
    doc.text("converse, support,", 8, 73);
    doc.text("purchase:", 8, 81);

    // Open PDF in a new window
    window.open(URL.createObjectURL(doc.output("blob")));
  };

  const onSubmitClick = () => {
    return navigate("/comments");
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
          justifyContent: "space-between", // Added this
          width: "350px", // Matching the image's width
        }}
      >
        <div style={{ display: "flex", alignItems: "center", margin: 0 }}>
          <h2 id="title" style={{ margin: 0 }}>
            No, Thank You!
          </h2>
          <BsFillEyeFill
            color="white"
            size={24}
            style={{ marginLeft: "10px" }}
          />
          <h3 style={{ marginLeft: "10px" }}>23</h3>
        </div>
        {mode === "view" ? (
          <BsFillPencilFill onClick={toggleMode} color="white" size={14} />
        ) : (
          <BsCheck2Circle onClick={toggleMode} color="white" size={14} />
        )}
      </div>
      <h4 id="artist" style={{ margin: 0, paddingLeft: 10 }}>
        Brian Carano
      </h4>
      {mode === "view" ? (
        <h2 id="medium">Photograph</h2>
      ) : (
        <input
          type="text"
          placeholder="Type"
          value="Photograph"
          style={inputStyle}
        />
      )}
      <h4 id="size" style={{ margin: 0, paddingLeft: 10 }}>
        20" x 30"
      </h4>
      <br />
      <h4 style={{ margin: 0, paddingLeft: 10 }}>Description:</h4>
      <h4 id="description" style={{ margin: 0, paddingLeft: 10 }}>
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
          onClick={createTag}
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
          onClick={onSubmitClick}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default PieceInformation;
