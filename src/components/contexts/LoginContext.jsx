import axios from "axios";
import React from "react";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

export const UseLoginContext = createContext();

export default function LoginContext({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      setCurrentUser(localStorage.getItem("currentUser"));
    }
  }, []);

  function loginHandler(userName, password) {
    axios
      .post(`http://localhost:4000/user`, {
        userName,
        password,
      })
      .then(
        (res) => (
          localStorage.setItem("currentUser", JSON.stringify(res.data)),
          setCurrentUser(res.data),
          navigate("/profile")
        )
      )
      .catch((res) => console.log(res.response.data));
  }
  function logOutHandler(){
    localStorage.removeItem("currentUser");
    setCurrentUser();
  }
  return (
    <UseLoginContext.Provider value={{loginHandler, logOutHandler, currentUser}}>
   
    </UseLoginContext.Provider>
  );
}
