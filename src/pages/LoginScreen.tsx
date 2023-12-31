import React, { useEffect, useState } from "react";
import PhoneNumberInput from "../components/PhoneNumberInput";
import PhoneInput from "../components/PhoneInput";
import { useNavigate } from "react-router-dom";
import DMNLogo from "../components/DMNLogo";
import { auth } from "../firebase.config.js";
import {
  RecaptchaVerifier,
  getAuth,
  signInWithPhoneNumber,
} from "firebase/auth";

const LoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberSubmitted, setPhoneNumberSubmitted] = useState(false);
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/signup"); // Navigate to the /signup route
  };

  const initializeCaptcha = () => {
    console.log("Initializing Captcha");
    // @ts-ignore
    if (!window.recaptchaVerifier) {
      // @ts-ignore
      window.recaptchaVerifier = new RecaptchaVerifier(auth, "login-screen", {
        size: "invisible",
        // @ts-ignore
        callback: (response) => {
          console.log("Captcha Verified Successfully");
          // Call the sign-in function only when the captcha is successfully verified
          signIn();
        },
        "expired-callback": () => {
          console.log(
            "Captcha Expired - Consider refreshing the captcha or alert the user!"
          );
        },
      });
    }
  };

  const signIn = async () => {
    try {
      console.log("onSignup");
      // TODO: to enable recaptcha, uncomment all these lines in the scope except the tsignores
      // @ts-ignore
      // const appVerifier = window.recaptchaVerifier;
      console.log(phoneNumber);

      // const confirmationResult = await signInWithPhoneNumber(
      //   auth,
      //   phoneNumber,
      //   appVerifier
      // );
      // @ts-ignore
      // window.confirmationResult = confirmationResult;
      // @ts-ignore
      // window.recaptchaVerifier.verify();
      navigate("/register");
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };

  const onSignupButtonClick = async () => {
    try {
      // TODO: TO enable recaptcha, uncomment the next line and the next two after it
      // initializeCaptcha();
      // @ts-ignore
      // await window.recaptchaVerifier.verify();
      console.log("reCAPTCHA verification succeeded!");
    } catch (error) {
      console.error("reCAPTCHA verification failed:", error);
    }
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
      }}
    >
      <div id="login-screen"></div>
      <DMNLogo />

      {/* Phone Number Input */}
      <PhoneNumberInput setPhone={setPhoneNumber} phone={phoneNumber} />

      {/* Log In Button */}
      <button
        // TODO: uncomment this next line and comment the signIn line for recaptcha
        // onClick={onSignupButtonClick}
        onClick={signIn}
        style={{
          cursor: "pointer",
          marginTop: "20px",
          backgroundColor: "#7800ff",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          fontSize: "1rem",
        }}
        id="verify-button"
      >
        Send Code
      </button>
    </div>
  );
};

export default LoginScreen;
