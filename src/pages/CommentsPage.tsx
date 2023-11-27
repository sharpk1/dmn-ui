import React, { useState } from "react";
import {
  BsFillEyeFill,
  BsFillPencilFill,
  BsCheck2Circle,
} from "react-icons/bs";
import art from "../assets/art.webp";

const Comments: React.FC = () => {
  const [mode, setMode] = useState("view");
  const [comment, setComment] = useState("");
  const [commentStack, setCommentStack] = useState<string[]>([]);
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

  return (
    <div
      style={{
        // backgroundColor: "black",
        color: "white",
        padding: "20px",
        margin: "10px", // Added margin around the entire component
        paddingTop: "40px",
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
          </div>
        </div>
      </div>

      <br />
      <h4 style={{ margin: 0, paddingLeft: 10, marginBottom: 20 }}>
        Comments:
      </h4>
      <h4 style={{ margin: 0, paddingLeft: 10 }}>Day of the Dead:</h4>

      <h4
        id="description"
        style={{ margin: 0, paddingLeft: 10, marginBottom: 20 }}
      >
        User 1: I love the black and white!
      </h4>

      <h4 style={{ margin: 0, paddingLeft: 10 }}>First Friday 3/26/23:</h4>

      <h4
        id="description"
        style={{ margin: 0, paddingLeft: 10, marginBottom: 20 }}
      >
        User 1: This reminds me of a stock photo!
      </h4>
      <h4 style={{ margin: 0, paddingLeft: 10 }}>
        Night at the Museum: 7 comments
      </h4>
      <h4
        id="description"
        style={{ margin: 0, paddingLeft: 10, marginBottom: 20 }}
      >
        User 1: Great composition!
      </h4>
      {/* TODO: Add event corresponding to person */}
      {commentStack.map((comment) => {
        return (
          <>
            <h4 style={{ margin: 0, paddingLeft: 10 }}>Spring Gala 3/26/23:</h4>
            <h4 style={{ margin: 0, paddingLeft: 10 }}>Brian C: {comment}</h4>
          </>
        );
      })}
      <div
        style={{
          flexDirection: "column",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "30px",
        }}
      >
        <input
          value={comment}
          type="text"
          placeholder="Comment"
          style={inputStyle}
          onChange={(e) => setComment(e.target.value)}
        />
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
          onClick={() => {
            console.log("hit");
            setCommentStack([...commentStack, comment]);
            setComment("");
          }}
        >
          Comment
        </button>
      </div>
    </div>
  );
};

export default Comments;
