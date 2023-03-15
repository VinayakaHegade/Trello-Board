import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header-container">
      <img id="logo" src="/src/assets/Trello-logo.png"></img>
      <img id="menu-bar" src="/src/assets/burger-menu.svg"></img>
    </div>
  );
}

export default Header;
