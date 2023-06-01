import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/SignUp.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [duplicatePassword, setDuplicatePassword] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleDuplicatePasswordChange = (e) => {
    setDuplicatePassword(e.target.value);

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    // Reset form fields
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            placeholder="First and last name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="At least 6 characters"
          />
        </div>
        <div className="form-group">
          <label htmlFor="re-password">Re-enter password:</label>
          <input
            type="password"
            id="re-password"
            value={duplicatePassword}
            onChange={handleDuplicatePasswordChange}
          />
        </div>
        <button className="signupbtn" type="submit">
          Sign Up
        </button>
        <p className="text-center">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
