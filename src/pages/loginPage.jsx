import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";
import { Link } from "react-router-dom";

const LoginPage = (props) => {
  const context = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    context.authenticate(email, password);
  };

  // Set 'from' to path where browser is redirected after a successful login.
  // Either / or the protected path user tried to access.
  // const { from } = props.location.state || { from: { pathname: "/" } };

  if (context.isAuthenticated === true) {
    return <Navigate to={"./home"} />;
  }
  return (
    <>
      <h2>Login page</h2>
      <p>You must log in to view the protected pages </p>
      <input
        id="email"
        placeholder="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      ></input>
      <br />
      <input
        id="password"
        type="password"
        placeholder="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      ></input>
      <br />
      {/* Login web form  */}
      <button onClick={login}>Log in</button>
      <p>
        Not Registered?
        <Link to="/signup">Sign Up!</Link>
      </p>
    </>
  );
};

export default LoginPage;
