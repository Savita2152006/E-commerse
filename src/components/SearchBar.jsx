import React from "react";
import "./SearchBar.css";

export default function SearchBar() {
  return (
    <div className="search-bar-container">
      <input type="text" placeholder="Search..." className="search-input" />
      <button className="search-button">🔍</button>
    </div>
  );
}
