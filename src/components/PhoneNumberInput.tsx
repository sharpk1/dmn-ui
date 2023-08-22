import { useState } from "react";
import { CountrySelectorDropdown, PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const PhoneNumberInput = () => {
  const [phone, setPhone] = useState("");

  return (
    <div>
      <PhoneInput
        countrySelectorStyleProps={{
          buttonStyle: {
            paddingLeft: "10px",
            borderTopLeftRadius: "500px",
            borderBottomLeftRadius: "500px",
          },
        }}
        inputStyle={{
          borderTopRightRadius: "500px",
          borderBottomRightRadius: "500px",
        }}
        defaultCountry="us"
        value={phone}
        onChange={(phone) => setPhone(phone)}
      />
    </div>
  );
};

export default PhoneNumberInput;
