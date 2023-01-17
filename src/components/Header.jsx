import React from "react";
import Logo from "../components/icons/Logo";
import "../styles/header.css";
import Sign from "./icons/Sign";
import Bag from "./icons/Bag";

export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <Logo />
        <div className="search">
          <input type="search" placeholder="Search any things" />
          <button>Search</button>
        </div>

        <div className="rightSide">
          <div className="sign">
            <Sign />
            <a href="https://www.google.com/search?q=google+fonts&oq=google&aqs=chrome.0.69i59j46i199i465i512j69i60l3j69i65j69i60j5.4601j0j7&sourceid=chrome&ie=UTF-8">
              Sign in
            </a>
          </div>
          <div className="bag">
            <Bag />
          </div>
        </div>
      </div>
    </div>
  );
}
