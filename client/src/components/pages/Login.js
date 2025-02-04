import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/authContext/authContext";
import Alert from "../others/Alert";

const Login = (props) => {
  const { loginUser, userAuth, errors, clearError } = useContext(AuthContext);
  useEffect(() => {
    if (userAuth) {
      props.history.push("/profile");
    }
  }, [userAuth, props.history]);

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const { username, password } = user;

  const handleChange = (e) => {
    clearError();
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(user);
    setUser({
      username: "",
      password: "",
    });
    console.log(errors);
  };
  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100" style={{ backgroundColor: "#181718 ", color: "#ffffff" }}>
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <h2 className="text-center mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Sign In</h2>
        <form className="form-signin" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="inputUsername"
              className="form-control bg-dark text-white border-0 p-3 rounded"
              placeholder="Username"
              name="username"
              value={username || ""}
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
          <button
            className="btn btn-lg btn-primary btn-block text-uppercase py-2 rounded-pill"
            type="submit"
          >
            Sign in
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
              to="/register"
              style={{ fontSize: "16px", color: "#bbbbbb" }}
              className="text-decoration-none"
            >
              Don't have an account? Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;