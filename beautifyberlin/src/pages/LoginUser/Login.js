import React, { useState } from "react";
import LoginForm from "../../components/LoginFormUser/LoginForm";
import "./Login.css";

export default function Login() {
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
      <LoginForm Login={Login} error={error} />
    </div>
  );
}
