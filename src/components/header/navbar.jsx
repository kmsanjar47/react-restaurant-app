import React from "react";

function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "black",
        color: "white",
      }}
    >
      <ul style={{ listStyle: "none", fontWeight: "bold" }}>
        <li>RESTAURANT APP</li>
      </ul>
    </div>
  );
}

export default Navbar;
