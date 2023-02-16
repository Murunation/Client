import Logo from "../components/icons/Logo";
import "../styles/header.css";
import Bag from "./icons/Bag";
import Sign from "./icons/Sign";
import React, { useContext, useState } from "react";
import { MainContext } from "../App";
import {useNavigate } from "react-router";
export default function Header() {
  const { setLogin, login, setCloseModal, data, setFilter } = useContext(MainContext);
  const navigate = useNavigate();
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
            {login ? (
            <button
              className="signIn"
              onClick={() => {
                navigate("/");
                setCloseModal(false);
                localStorage.setItem("login", false);
                setLogin(JSON.parse(localStorage.getItem("login")));
                localStorage.removeItem("userId");
              }}
            > Hi,
               Log out
            </button>
          ) : (
            <button
              className="signIn"
              onClick={() => {
                setCloseModal(true);
              }}
            >
               Sign in
            </button>
          )}
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
