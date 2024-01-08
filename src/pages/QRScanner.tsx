import React, { useState } from "react";
import { QrReader } from "react-qr-reader";

function QrScan() {
  const [data, setData] = useState("No result");

  const handleScan = (data: any) => {
    if (data) {
      setData(data);
    }
  };

  const handleError = (err: any) => {
    console.error(err);
  };

  return (
    <div>
      <QrReader
        //   @ts-ignore
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: "100%" }}
      />
      <p>{data}</p>
    </div>
  );
}

export default QrScan;
