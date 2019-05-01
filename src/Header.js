import React from "react";
// import "./Header.css";

export default function Header(props) {
  return (
    <div className="navbar">
      <h3>All popular TV-Shows on one place</h3>
      <input
        style={{ opacity: "0.8" }}
        className="nav-item"
        type="text"
        onChange={props.onSearch}
      />
    </div>
  );
}
