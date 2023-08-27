import React from "react";

const EyeWithCornersIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    {/* Outer squares/corners */}
    <rect x="0" y="0" width="6" height="6" fill="#000" />
    <rect x="18" y="0" width="6" height="6" fill="#000" />
    <rect x="0" y="18" width="6" height="6" fill="#000" />
    <rect x="18" y="18" width="6" height="6" fill="#000" />
    {/* Eye shape */}
    <path
      d="M12 4.5C7 4.5 2.73 7.61 1 12a16.12 16.12 0 0022 0C21.27 7.61 17 4.5 12 4.5zm0 13a9.77 9.77 0 01-9-6 9.77 9.77 0 0118 0 9.77 9.77 0 01-9 6zM12 9a3 3 0 103 3 3 3 0 00-3-3z"
      fill="#000"
    />
  </svg>
);

export default EyeWithCornersIcon;
