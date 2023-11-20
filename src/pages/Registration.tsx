import PhoneNumberInput from "../components/PhoneNumberInput";
import { Link, useNavigate } from "react-router-dom";
import DMNLogo from "../components/DMNLogo";
import OTPInputBox from "../components/OTPInputBox";
import { createRef, useEffect, useRef, useState } from "react";

const Registration = () => {
  const [isVerified, setIsVerified] = useState(false);
  const navigate = useNavigate();
  const handleButtonClick = () => {
    // TODO: to enable recaptcha uncomment all these lines in the scope except the tsignores
    // const otp = inputRefs.map((ref) => ref.current?.value).join("");
    // console.log(otp); // This will print the concatenated values
    // // @ts-ignore
    // window.confirmationResult
    //   .confirm(otp)
    //   //   @ts-ignore
    //   .then(async (res) => {
    //     console.log(res);
    //     if (res.operationType && res.operationType === "signIn") {
    //       setIsVerified(true);
    //       navigate("/signup");
    //     }
    //     return;
    //   })
    //   .catch((err: string) => {
    //     console.log(err);
    //   });
    // TODO: to enable recaptcha, remove these next lines.
    const otp = inputRefs.map((ref) => ref.current?.value).join("");
    if (otp === "123456") {
      navigate("/signup");
    }

    // navigate("/verification"); // Navigate to the /signup route
  };

  const inputRefs = Array.from({ length: 6 }, () =>
    createRef<HTMLInputElement>()
  );

  const focusNextInput = (index: number) => {
    return () => {
      if (index < inputRefs.length - 1) {
        inputRefs[index + 1].current?.focus();
      }
    };
  };

  const focusPrevInput = (index: number) => {
    return () => {
      if (index > 0) {
        inputRefs[index - 1].current?.focus();
      }
    };
  };

  return (
    <div
      style={{
        backgroundColor: "#1f2129",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem", // Add some padding
      }}
    >
      <DMNLogo />

      {/* Phone Number Input */}
      {/* <PhoneNumberInput /> */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          padding: "0 1rem",
        }}
      >
        {inputRefs.map((ref, index) => (
          <OTPInputBox
            key={index}
            ref={ref}
            isVerified={isVerified}
            focusNext={focusNextInput(index)}
            focusPrev={focusPrevInput(index)}
          />
        ))}
      </div>

      {/* Log In Button */}
      <button
        onClick={handleButtonClick}
        style={{
          marginTop: "1rem",
          cursor: "pointer",
          // marginTop: "20px",
          backgroundColor: "#7800ff",
          color: "white",
          padding: "0.5rem 1rem",
          border: "none",
          borderRadius: "0.25rem",
          fontSize: "1rem",
        }}
      >
        Verify
      </button>
    </div>
  );
};

export default Registration;
