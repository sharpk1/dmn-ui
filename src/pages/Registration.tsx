import PhoneNumberInput from "../components/PhoneNumberInput";
import { Link, useNavigate } from "react-router-dom";
import DMNLogo from "../components/DMNLogo";
import OTPInputBox from "../components/OTPInputBox";
import { createRef, useEffect, useRef, useState } from "react";

const Registration = () => {
  const [isVerified, setIsVerified] = useState(false);
  const navigate = useNavigate();
  const handleButtonClick = () => {
    const otp = inputRefs.map((ref) => ref.current?.value).join("");
    console.log(otp); // This will print the concatenated values
    // @ts-ignore
    window.confirmationResult
      .confirm(otp)
      //   @ts-ignore
      .then(async (res) => {
        console.log(res);
        if (res.operationType && res.operationType === "signIn") {
          setIsVerified(true);
          navigate("/signup");
        }
        return;
      })
      .catch((err: string) => {
        console.log(err);
      });
    // navigate("/verification"); // Navigate to the /signup route
  };

  const ref1 = useRef<HTMLInputElement>(null);
  const ref2 = useRef<HTMLInputElement>(null);
  const ref3 = useRef<HTMLInputElement>(null);
  const ref4 = useRef<HTMLInputElement>(null);
  const ref5 = useRef<HTMLInputElement>(null);
  const ref6 = useRef<HTMLInputElement>(null);

  const inputRefs = [ref1, ref2, ref3, ref4, ref5, ref6];

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
      <DMNLogo />

      {/* Phone Number Input */}
      {/* <PhoneNumberInput /> */}
      <div style={{ display: "flex" }}>
        {inputRefs.map((ref, index) => (
          <OTPInputBox key={index} inputRef={ref} isVerified={isVerified} />
        ))}
      </div>

      {/* Log In Button */}
      <button
        onClick={handleButtonClick}
        style={{
          cursor: "pointer",
          marginTop: "20px",
          backgroundColor: "#7800ff",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Verify
      </button>
    </div>
  );
};

export default Registration;
