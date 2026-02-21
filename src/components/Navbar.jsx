import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        flexDirection: "row",
        gap: "20px",
        margin: "20px",
        padding: "10px",
      }}
    >
      <Link to="/login">Login</Link>
      <Link to="/dashboard">Dashboard</Link>

      <Link to="/profile">Profile</Link>
    </div>
  );
};

export default Navbar;
