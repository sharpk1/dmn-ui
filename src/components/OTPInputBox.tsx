type OTPInputBoxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  inputRef: React.RefObject<HTMLInputElement>;
  isVerified: boolean;
};
const OTPInputBox: React.FC<OTPInputBoxProps> = ({ inputRef, ...props }) => {
  const { isVerified } = props;
  return (
    <input
      ref={inputRef}
      onChange={(e) => {
        if (e.target.value) {
          // Check the next sibling and focus if it exists
          const nextSibling = e.target.nextElementSibling as HTMLInputElement;
          if (nextSibling) {
            nextSibling.focus();
          }
        }
        if (props.onChange) {
          props.onChange(e);
        }
      }}
      type="text"
      maxLength={1}
      style={{
        boxShadow: isVerified ? "0 0 5px 2px #00FF00" : "none",
        padding: "10px",
        margin: "10px",
        backgroundColor: "#1f2129",
        color: "white",
        border: "1px solid #444",
        // borderRadius: "500px",
        width: "20px",
        textAlign: "center",
      }}
      {...props}
    />
  );
};

export default OTPInputBox;
