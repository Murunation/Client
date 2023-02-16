import axios from "axios";
import React, { useState, useEffect, useContext } from "react";

import { useNavigate } from "react-router";
import { MainContext } from "../App";
import "../styles/subcss/login.css";
import Logo from "./icons/Logo";

export default function Login(prop) {

  const {setCloseModal, setLogin} = useContext(MainContext);
  
  const [userData, setUserData] = useState();
  const [openRegister, setOpenRegister] = useState(true);
  const [oldRegitser, setOldRegitser] = useState(false);
  const [newRegister, setNewRegister] = useState(false);
//false and close
  useEffect(() => {
    axios.get("http://localhost:4000/users").then((res) => {
      setUserData(res.data);
    });
  }, []);

  function submitHandler(e) {
    e.preventDefault();
    let username = e.target.name.value;
    let password = e.target.password.value;

    userData &&
      userData.map((user) => {
        if (user.name === username || user.phone_number === username) {
          if (user.password === password) {
            localStorage.setItem("login", true);
            setLogin(JSON.parse(localStorage.getItem("login")));
            localStorage.setItem("userId", user.id);
            setCloseModal(false);
          } else {
            alert("Нууц үг эсвэл Мэйл буруу байна");
          }
        }
      });
  }

  function registerHandler(e) {
    e.preventDefault();
    let password = e.target.password.value;
    let passwordAgain = e.target.passwordAgain.value;
    let email = e.target.email.value;
    let last_name = e.target.lastName.value;
    let first_name = e.target.firstName.value;
    let phone_number = e.target.phoneNumber.value;
    let userObject = {
      password,

      email,
      last_name,
      first_name,
      phone_number,

    };
    userData &&
      userData.map((user) => {
        if (
          (user.last_name.toLowerCase() === last_name.toLowerCase() &&
            user.first_name.toLowerCase() === first_name.toLowerCase()) ||
          user.email.toLowerCase() === email.toLowerCase() ||
          user.phone_number.toLowerCase() === phone_number.toLowerCase()
        ) {
          setOldRegitser(false);
        } else {
          setOldRegitser(true);
        }
      });

    if (oldRegitser) {
      setNewRegister(true);
    } else {
      alert("You already have account");
    }

    if (newRegister) {
      if (password === passwordAgain) {
        if (password.length >= 8) {
          axios
            .post("http://localhost:4000/users", userObject)
            .then((res) => console.log(res));
          setCloseModal(false);
          setOpenRegister(true);
        } else {
          alert("The password have to more than 8 characters");
        }
      } else {
        alert("Passwords must have the same ");
      }
    }
  }
  return (
    <div className="signInModal">
      <div className="modalcontent">
        <div className="modalHeater">
          <Logo/>
          <h2>Login</h2>
          <button
            onClick={() => {
              setCloseModal(false);
              setOpenRegister(true);
            }}
          >
            <svg
              width="14"
              height="15"
              viewBox="0 0 14 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.43164 2.05652L12.5686 13.1935L1.43164 2.05652ZM11.7731 1.26102C12.2124 0.821684 12.9247 0.821684 13.3641 1.26102C13.8034 1.70036 13.8034 2.41267 13.3641 2.85201L8.59064 7.62452L13.3641 12.398C13.8034 12.8373 13.8034 13.5496 13.3641 13.9889C12.9247 14.4283 12.2124 14.4283 11.7731 13.9889L6.99964 9.21552L2.22714 13.9889C1.81918 14.3969 1.17585 14.426 0.734269 14.0764L0.636145 13.9889C0.196806 13.5496 0.196806 12.8373 0.636145 12.398L5.40864 7.62452L0.636145 2.85201C0.196806 2.41267 0.196806 1.70036 0.636145 1.26102C1.07549 0.821684 1.7878 0.821684 2.22714 1.26102L6.99964 6.03352L11.7731 1.26102Z"
                fill="#AFADB5"
              />
            </svg>
          </button>
        </div>
        <form
          className="signInForm"
          onSubmit={openRegister ? submitHandler : registerHandler}
        >
          {openRegister ? (
            <>
              <input
                name="name"
                type="text"
                placeholder="User Name or Phone number"
                className="formInput"
              />
              <input
                type="password"
                placeholder="Password"
                className="formInput"
                name="password"
              />
              <a href="#">Forgot the password?</a>{" "}
              <button className="formButton" id="Signin" type="submit">
                Log in
              </button>
              <div className="or">
                <span className="lineText">Or</span>
                <p className="line"></p>
              </div>
            </>
          ) : (
            <>
              {" "}
              <input
                name="email"
                type="text"
                placeholder="Email"
                className="formInput"
                required
              />
              <input
                name="lastName"
                type="text"
                placeholder="Last name"
                className="formInput"
                required
              />
              <input
                name="firstName"
                type="text"
                placeholder="First Name"
                className="formInput"
                required
              />
              <input
                name="phoneNumber"
                type="number"
                placeholder="Phone number"
                className="formInput"
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="formInput"
                name="password"
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="formInput"
                name="passwordAgain"
                required
              />
              <button id="register" type="submit" className="formButton">
                Sign up
              </button>
            </>
          )}

          {openRegister && (
            <input
              className="formButton"
              id="register"
              type="button"
              value="Sign up"
              onClick={() => {
                setOpenRegister(false);
              }}
            />
          )}
        </form>
      </div>
    </div>
  );
}
