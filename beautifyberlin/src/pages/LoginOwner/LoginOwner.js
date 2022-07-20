import React, { useState } from "react";
import LoginFormOwner from "../../components/LoginFormOwner/LoginForm";
import "./LoginOwner.css";

export default function LoginOwner() {
  const adminUser = {
    email: "beauty@fy.com",
    password: "beautify",
  };

  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    )
      console.log("Logged in");
    else {
      console.log("Details do not match!");
      setError("Details do not match!");
    }
  };

  return (
    <div className="App">
      <LoginFormOwner Login={Login} error={error} />
    </div>
  );
}
