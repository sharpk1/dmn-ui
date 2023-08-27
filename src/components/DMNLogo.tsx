import dmnLogo from "../assets/dmnlogo.webp"; // adjust the path as needed

const DMNLogo = () => {
  return (
    <div>
      <img
        src={dmnLogo}
        alt="DMN Logo"
        style={{
          width: "50%",
          margin: "auto",
          display: "block",
          transform: "translateY(-10px)",
        }}
      />
    </div>
  );
};

export default DMNLogo;
