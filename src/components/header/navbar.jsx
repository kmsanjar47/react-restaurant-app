import React from "react";
import { Link } from "react-router-dom";
import "../../stylesheets/Navbar.css";

function Navbar() {
  return (
    <div
      style={{
        position: "sticky",
        height: "7.22543352601156vh",
        display: "flex",
        flexDirection: "row",
        backgroundColor: "black",
        color: "white",
        padding: "0px 16px",
        justifyContent: "space-between",
      }}
    >
      <div>
        <h4 style={{ padding: "0.5891016200294551vw" }}>Restaurant App</h4>
      </div>
      <div>
        <ul
          style={{
            padding: "0.5891016200294551vw",
            display: "flex",
            color: "white",
            listStyleType: "none",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <li style={{ marginRight: "12px" }}>
            <Link
              className="nav-link"
              style={{ textDecoration: "none" }}
              to="/"
            >
              Home
            </Link>
          </li>
          <li style={{ marginRight: "12px" }}>
            <Link
              className="nav-link"
              style={{ textDecoration: "none" }}
              to="/menu"
            >
              Menu
            </Link>
          </li>
          <li style={{ marginRight: "12px" }}>
            <Link
              className="nav-link"
              style={{ textDecoration: "none" }}
              to="/contact"
            >
              Contact
            </Link>
          </li>
          <li style={{ marginRight: "12px" }}>
            <Link
              className="nav-link"
              style={{ textDecoration: "none" }}
              to="/about"
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
