import React, { useState } from "react";
import { login } from "../../services/auth.js";
import { useNavigate } from "react-router-dom";
import * as PATHS from "../../utils/paths";
import * as USER_HELPERS from "../../utils/userToken";
import "./stylesLogin.css"

export default function LogIn({ authenticate }) {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { email, password } = form;
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleInputChange(event) {
    const { name, value } = event.target;
    return setForm({ ...form, [name]: value });
  }

  function handleFormSubmission(event) {
    event.preventDefault();
    const credentials = {
      email,
      password,
    };
    login(credentials).then((res) => {
      if (!res.status) {
        // unseccessful login
        return setError({ 
          message: "Invalid credentials" 
        });
      }
      navigate(PATHS.HOME);
    });
  }

  return (
    <div className="LOGINFULL">
      <div className="LOGINCARD">
      <h1>Log In</h1>
      <form onSubmit={handleFormSubmission} className="signup__form">
        <label htmlFor="input-email">email</label>
        <input
          id="input-email"
          type="text"
          name="email"
          placeholder="email"
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
