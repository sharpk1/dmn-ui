import dmnLogo from "../assets/dmnlogo.webp"; // adjust the path as needed

const DMNLogoAligned = () => {
  return (
    <div>
      <img
        src={dmnLogo}
        alt="DMN Logo"
        style={{
          width: "25%",
          transform: "translateY(-0px)",
        }}
      />
    </div>
  );
};

export default DMNLogoAligned;
