import React, { useState } from "react";
import { signup } from "../../services/auth";
import { useNavigate } from "react-router-dom";
import * as PATHS from "../../utils/paths";
import * as USER_HELPERS from "../../utils/userToken";
import "./styleSignup.css"

export default function Signup({ authenticate, ...props }) {
  console.log("lasprops", props)
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const { username, email, password, confirmPassword } = form;
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleInputChange(event) {
    const { name, value } = event.target;
    return setForm({ ...form, [name]: value });
  }

  function handleFormSubmission(event) {
    event.preventDefault();
    const credentials = {
      username,
      email,
      password,
      confirmPassword,
    };
    signup(credentials).then((res) => {
      if (!res.status) {
        // unsuccessful signup
        console.error("Signup was unsuccessful: ", res);
        return setError({
          message: "Signup failed! ",
        });
      } else {
          console.log("Accediste correctamente")
      }
      // successful signup
      USER_HELPERS.setUserToken(res.data.accessToken);
      authenticate(res.data.user);
      navigate(PATHS.LANDING);
    });
  }

  return (
    <div className="SIGNUPFULL">
    <div className="SIGNUPCARD">
      <h1>Sign Up</h1>
      <form onSubmit={handleFormSubmission} className="auth__form">
      <label htmlFor="input-username">Username</label>
        <input
          id="input-username"
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="input-email">Email</label>
        <input
          id="input-email"
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="input-password">Password</label>
        <input
          id="input-password"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleInputChange}
          required
          minLength="8"
        />

        <label htmlFor="input-confirmPassword">Confirm Password</label>
        <input
          id="input-confirmPassword"
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={handleInputChange}
          required
          minLength="8"
        />

        {error && (
          <div className="error-block">
            <p>There was an error submiting the form:</p>
            <p>{error.message}</p>
          </div>
        )}

        <button className="button__submit" type="submit">
          Submit
        </button>
      </form>
      </div>
    </div>
  );
}
