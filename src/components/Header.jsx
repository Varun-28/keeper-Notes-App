import React from "react";
import gitLogo from "../../public/Images/github.svg";

function Header() {
  return (
    <header className="nav">
      <h1>Keeper</h1>
      <a href="https://github.com/Varun-28" target="_blank">
        <img src={gitLogo} alt="" />
      </a>
    </header>
  );
}

export default Header;
