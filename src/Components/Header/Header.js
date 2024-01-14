import React from "react";
import "./Header.css";
import logo from "../../images/logo.svg";

function Header() {
  const options = ["Home", "About", "Contact", "Blog", "Careers"];

  let displayOptions =
    options.length && options.map((option) => <li key={option}>{option}</li>);

  return (
    <header className="header">
      <div className="container">
        <img
          className="headerImg"
          alt="Header"
          src={logo}
          width={100}
          height={50}
        />
        <ul>{displayOptions}</ul>
        <button className="btn btn-success btn-md btnRadius">
          Request Invite
        </button>
      </div>
    </header>
  );
}

export default Header;
