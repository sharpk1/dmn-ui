import React, { CSSProperties } from "react";
import { AiOutlinePicture } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const CreateNewPiece = () => {
  const navigate = useNavigate();
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
  const descriptionStyle = {
    ...inputStyle,
    borderRadius: "10px",
    height: "100px",
  };

  const checkboxContainerStyle = {
    display: "flex",
    // flexDirection: "row",
    alignItems: "center",
    marginTop: "10px",
  };

  const checkboxStyle = {
    marginRight: "5px",
  };

  const uploadContainerStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginTop: "10px",
  };

  const uploadLabelStyle = {
    marginBottom: "5px",
    fontFamily: "Arial, sans-serif",
  };

  const uploadInputStyle = {
    ...inputStyle,
    border: "none",
    borderRadius: "10px",
  };

  const uploadRectangleStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #444",
    borderRadius: "10px",
    // width: "200px",
    height: "200px",
    cursor: "pointer",
    color: "white",
    fontFamily: "Arial, sans-serif",
    fontSize: "16px",
  };

  const iconStyle = {
    fontSize: "48px",
    marginBottom: "10px",
  };

  const handleSaveButton = () => {
    navigate("/piece");
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
      <div
        style={{
          flex: 1,
          flexDirection: "column",
          margin: "20px",
        }}
      >
        <h1>Create New Piece</h1>
        <input type="text" placeholder="Name" style={inputStyle} />
        <input type="text" placeholder="Type" style={inputStyle} />
        <input type="text" placeholder="Size" style={inputStyle} />
        <input type="text" placeholder="Price" style={inputStyle} />
        <textarea placeholder="Description" style={descriptionStyle} />
        <div style={checkboxContainerStyle}>
          <label htmlFor="gallery" style={{ marginRight: "30px" }}>
            <h3>Gallery</h3>
          </label>
          <input type="checkbox" id="gallery" style={checkboxStyle} />
          <label
            htmlFor="online"
            style={{ marginRight: "20px", marginLeft: "30px" }}
          >
            <h3>Online</h3>
          </label>
          <input type="checkbox" id="online" style={checkboxStyle} />
        </div>
        <div
          style={uploadRectangleStyle}
          //   @ts-ignore
          onClick={() => document.getElementById("hiddenFileInput").click()}
        >
          <div style={iconStyle}>
            <AiOutlinePicture color="gray" />
          </div>
          Upload Photo
          <input
            type="file"
            id="hiddenFileInput"
            accept="image/*"
            style={{ display: "none" }}
            // onChange={/* Your File Handling Function Here */}
          />
        </div>
        <button
          onClick={handleSaveButton}
          style={{
            display: "flex",
            justifyContent: "center",
            // marginBottom: "10px",
            width: "125px",
            backgroundColor: "#7800ff",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            fontWeight: "bold",
            marginTop: "30px",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "0px",
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateNewPiece;
