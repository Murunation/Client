import React, { useState } from "react";
import { UsersData } from "../util/data";

export default function Login(prop) {
  const { alert, setLogin } = prop;
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <h1>Login page</h1>
      <input
        onChange={(e) => setUserName(e.target.value)}
        type="text"
        placeholder="User Name"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="text"
        placeholder="Password"
      />
      <button>Login</button>
    </div>
  );
}
