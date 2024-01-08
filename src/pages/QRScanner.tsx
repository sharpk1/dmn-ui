import { QrScanner } from "@yudiel/react-qr-scanner";
import { useState } from "react";

const Scanner = () => {
  const [result, setResult] = useState("");
  // const [error, setError] = useState("");
  return (
    <>
      <QrScanner
        onDecode={(result) => setResult(result)}
        onError={(error) => console.log(error)}
      />
      <div>{result || "nothing"}</div>
      {/* <div>{error}</div> */}
    </>
  );
};

export default Scanner;
