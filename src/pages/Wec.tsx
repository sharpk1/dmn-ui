import React, { useState } from "react";
import Webcam from "react-webcam";
import jsQR from "jsqr";

const Wec = () => {
  const [imageSrc, setImageSrc] = useState(null);
  const [isWebcamActive, setIsWebcamActive] = useState(false); // State to control webcam activation

  const capture = (webcam: any) => {
    const imageSrc = webcam.getScreenshot();
    console.log(imageSrc);
    setImageSrc(imageSrc);
  };

  const toggleWebcam = () => {
    setIsWebcamActive(!isWebcamActive); // Toggle the state of the webcam
  };

  const decodeQRCode = async (imageSrc: any) => {
    // ... existing decodeQRCode implementation
  };

  return (
    <div className="container">
      {isWebcamActive && <Webcam height={600} width={600} />}{" "}
      {/* Render Webcam based on state */}
      <button onClick={toggleWebcam}>Toggle Webcam</button>{" "}
      <button onClick={capture}>Capture</button>
      {/* Button to activate/deactivate webcam */}
    </div>
  );
};

export default Wec;
