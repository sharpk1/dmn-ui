import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute", // Adjust based on your layout
        top: "10px", // Adjust the positioning as needed
        left: "10px",
        backgroundColor: "#7800ff",
        color: "white",
        padding: "5px 10px", // Adjust size to make it compact
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px", // Adjust icon size as needed
      }}
    >
      <BsArrowLeft /> {/* This is the react-icon for a left arrow */}
    </button>
  );
};

export default BackButton;
