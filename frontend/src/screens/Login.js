import React, { useState } from "react";
import '../styles/Login.css';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [roles, setRoles] = useState([]);
  const [error, setError] = useState("");

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    if (roles.includes(value)) {
      setRoles(roles.filter((role) => role !== value)); // Uncheck the role
    } else {
      setRoles([...roles, value]); // Add the role
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in both email and password.");
      return;
    }
    if (roles.length === 0) {
      setError("Please select at least one role.");
      return;
    }
    setError(""); // Clear any previous errors

    console.log("Logging in with:", { email, password, roles });
    // Handle login logic (API call)
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email/Username:</label>
            <input
              type="text"
              placeholder="Enter your email or username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Password:</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Select Roles:</label>
            <div className="checkbox-group">
              <label>
                <input
                  type="checkbox"
                  value="student"
                  onChange={handleCheckboxChange}
                />
                Student
              </label>
              <label>
                <input
                  type="checkbox"
                  value="tutor"
                  onChange={handleCheckboxChange}
                />
                Tutor
              </label>
              <label>
                <input
                  type="checkbox"
                  value="vendor"
                  onChange={handleCheckboxChange}
                />
                Vendor
              </label>
            </div>
          </div>
          {error && <div className="error">{error}</div>}
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <div className="links">
          <a href="/forgot-password">Forgot Password?</a>
          <p>
            New here? <a href="/signup">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
