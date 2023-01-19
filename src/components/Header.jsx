import React from "react";
import Logo from "../components/icons/Logo";
import "../styles/header.css";
import Sign from "./icons/Sign";
import Bag from "./icons/Bag";

export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <a href="/">
          <Logo />
        </a>

        <div className="search">
          <input type="search" placeholder="Search any things" />
          <button>Search</button>
        </div>

        <div className="rightSide">
          <div className="sign">
            <Sign />
            <a href="login">Sign in</a>
          </div>
          <div className="bag">
            <Bag />
          </div>
        </div>
      </div>
    </div>
  );
}
