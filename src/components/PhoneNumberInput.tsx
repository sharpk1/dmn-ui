import { useState } from "react";
import { CountrySelectorDropdown, PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import "../App.css";

type PhoneNumberInputProps = {
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  phone: string;
};

const PhoneNumberInput = (props: PhoneNumberInputProps) => {
  const { setPhone, phone } = props;

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
        onChange={(phone) => {
          console.log(phone);
          setPhone(phone);
        }}
      />
    </div>
  );
};

export default PhoneNumberInput;
