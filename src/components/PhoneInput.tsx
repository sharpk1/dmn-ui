import React, { useState } from "react";

const PhoneInput = () => {
  const countries = [
    { code: "+1", flag: "🇺🇸", name: "USA" },
    { code: "+44", flag: "🇬🇧", name: "UK" },
    { code: "+61", flag: "🇦🇺", name: "Australia" },
    { code: "+91", flag: "🇮🇳", name: "India" },
    // ... add more as needed
  ];

  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        border: "1px solid gray",
        padding: "5px",
      }}
    >
      {/* Flag Dropdown */}
      <select
        value={selectedCountry.name}
        onChange={(e) => {
          const country = countries.find((c) => c.name === e.target.value);
          setSelectedCountry(country as any);
        }}
      >
        {countries.map((country, index) => (
          <option key={index} value={country.name}>
            {country.flag} {country.name}
          </option>
        ))}
      </select>

      {/* Country Code */}
      <span style={{ marginLeft: "10px" }}>{selectedCountry.code}</span>

      {/* Phone Number Input */}
      <input
        type="tel"
        value={phoneNumber}
        placeholder="Enter your phone number"
        onChange={(e) => setPhoneNumber(e.target.value)}
        style={{ marginLeft: "10px", flex: 1 }}
      />
    </div>
  );
};

export default PhoneInput;
