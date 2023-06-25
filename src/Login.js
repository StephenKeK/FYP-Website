import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    //some fancy firebase login...
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => {
        let errorMessage;
        switch (error.code) {
          case "auth/wrong-password":
            errorMessage =
              "The password you entered is incorrect. Please try again.";
            break;
          case "auth/user-not-found":
            errorMessage =
              "No user found with this email. Please register below.";
            break;
          case "auth/too-many-requests":
            errorMessage =
              "Too many failed login attempts. Please try again later.";
            break;
          default:
            errorMessage = error.message;
        }
        alert(errorMessage);
      });
  };

  const register = (e) => {
    e.preventDefault();
    //some fancy firebase login...
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {})
      .catch((error) => {
        let errorMessage;
        switch (error.code) {
          case "auth/email-already-in-use":
            errorMessage =
              "This email is already registered. Please use a different email.";
            break;
          // Add more cases for other error codes as needed
          default:
            errorMessage = error.message;
        }
        alert(errorMessage);
      });
  };

  return (
    <div className="login">
      <Link to="./">
        <img
          className="login__logo"
          src={process.env.PUBLIC_URL + "/SwapLogoRB.png"}
          alt="Swaplogo"
        />
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={signIn}
            type="submit"
            className="login__signInButton"
          >
            {" "}
            Sign In
          </button>
          <p>By signing-in you agree to the terms and conditions.</p>
          <button onClick={register} className="login__registerButton">
            Create your Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
