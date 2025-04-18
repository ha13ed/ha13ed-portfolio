import React from "react";

export default function Divider() {
  return (
    <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
      <svg
        viewBox="0 0 1200 100"
        preserveAspectRatio="none"
        style={{ display: "block", width: "100%", height: "100px" }}
      >
        <path
          d="M0,0 C600,100 600,100 1200,0 L1200,100 L0,100 Z"
          style={{ fill: "#EAEBEB" }}
        ></path>
      </svg>
      <div
        style={{
          position: "absolute",
          top: "20px",
          width: "100%",
          textAlign: "center",
          color: "#2C2C2C",
          fontSize: "16px",
          fontWeight: "bold",
        }}
      >
        © 2025 Hamed Abedi. All rights reserved.
      </div>
    </div>
  );
}