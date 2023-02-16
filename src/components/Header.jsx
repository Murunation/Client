import Logo from "../components/icons/Logo";
import "../styles/header.css";
import Bag from "./icons/Bag";
import Sign from "./icons/Sign";
import React, { useContext, useState } from "react";
import { MainContext } from "../App";
import { useNavigate } from "react-router";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
export default function Header( ) {
  const { setLogin, login, setCloseModal } =
    useContext(MainContext);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
              >
                {" "}
                Hi, Log out
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
            <>
              <Button variant="primary" onClick={handleShow} className="bag-button">
                <Bag />
              </Button>
              <Offcanvas show={show} onHide={handleClose} placement={"end"} >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  Some text as placeholder. In real life you can have the
                  elements you have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
              </Offcanvas>
            </>

            <span>0</span>
          </div>
        </div>
      </div>
    </div>
  );
}
