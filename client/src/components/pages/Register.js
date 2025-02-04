import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/authContext/authContext";
import Alert from "../others/Alert";

const Register = (props) => {
  const { registerUser, userAuth, setError, clearError, errors } = useContext(
    AuthContext
  );

  useEffect(() => {
    if (userAuth) {
      props.history.push("/profile");
    }
  }, [userAuth, props.history]);

  const [user, setUser] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const { username, password, confirmPassword } = user;

  const handleChange = (e) => {
    clearError();
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError({ error: [{ message: "Password does'n match" }] });
    } else {
      registerUser({ username, password });
      setUser({
        username: "",
        password: "",
        confirmPassword: "",
      });
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100" style={{ backgroundColor: "#181718 ", color: "#ffffff" }}>
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <h2 className="text-center mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Register</h2>
        <form className="form-signin" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="inputUsername"
              className="form-control bg-dark text-white border-0 p-3 rounded"
              placeholder="Username"
              name="username"
              value={username}
              onChange={handleChange}
              required
              autoFocus
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              id="inputPassword"
              className="form-control bg-dark text-white border-0 p-3 rounded"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              id="confirmPassword"
              className="form-control bg-dark text-white border-0 p-3 rounded"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <button
            className="btn btn-lg btn-primary btn-block text-uppercase py-2 rounded-pill"
            type="submit"
            style={{ backgroundColor: "#007BFF", border: "none" }}
          >
            Register
          </button>

          <hr className="my-3 border-secondary" />

          {errors === null ? null : (
            <Alert
              alertType="alert-danger"
              alertMessage={errors.error[0].message}
            />
          )}

          <div className="text-center mt-3">
            <Link
              to="/login"
              style={{ fontSize: "16px", color: "#bbbbbb" }}
              className="text-decoration-none"
            >
              Already have an account? Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;