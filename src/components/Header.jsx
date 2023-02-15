import Logo from "../components/icons/Logo";
import "../styles/header.css";
import Bag from "./icons/Bag";
import Sign from "./icons/Sign";
import React, { useState } from "react";
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
            <span>0</span>
          </div>
        </div>
      </div>
    </div>
  );
}
