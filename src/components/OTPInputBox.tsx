import React, { forwardRef, useEffect } from "react";

type OTPInputBoxProps = {
  isVerified: boolean;
  focusNext: () => void;
  focusPrev: () => void;
};

const OTPInputBox = forwardRef<HTMLInputElement, OTPInputBoxProps>(
  ({ isVerified, focusPrev, focusNext, ...props }, ref) => {
    useEffect(() => {
      if (ref && "current" in ref && ref.current) {
        ref.current.oninput = () => {
          if (ref.current?.value) {
            focusNext();
          }
        };
        ref.current.onkeydown = (event) => {
          if (event.key === "Backspace" && !ref.current?.value) {
            focusPrev();
          }
        };
      }
    }, [focusNext, focusPrev, ref]);

    return (
      <input
        autoComplete="one-time-code"
        ref={ref}
        {...props}
        maxLength={1}
        style={{
          width: "30px",
          height: "30px",
          margin: "0 5px",
          fontSize: "20px",
          textAlign: "center",
          borderRadius: "5px",
          border: `2px solid ${isVerified ? "green" : "white"}`,
          backgroundColor: "#1f2129",
          color: "white",
        }}
        type="tel"
        inputMode="numeric"
        pattern="[0-9]*"
      />
    );
  }
);

export default OTPInputBox;
