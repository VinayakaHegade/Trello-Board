import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header-container">
      <img id="logo" src="/public/assets/Trello-logo.png"></img>
      <img id="menu-bar" src="/public/assets/burger-menu.svg"></img>
    </div>
  );
}

export default Header;
