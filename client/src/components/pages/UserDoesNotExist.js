import React from "react";
import { Link, useParams } from "react-router-dom";

const UserDoesNotExist = () => {
  const { username } = useParams();

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100" style={{ backgroundColor: "#181718 ", color: "#ffffff" }}>
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <div className="card bg-dark text-white border-0 p-4 rounded">
          <div className="card-body text-center">
            <h2 className="card-title mb-4" style={{ fontFamily: 'Poppins, sans-serif', color: "#ffcc00" }}>Sorry!</h2>
            <p className="my-4 text-secondary">
              <span style={{ color: "#ff4444" }}>{username}</span> does not exist. Try a valid user.
            </p>

            <Link
              className="btn btn-lg btn-primary btn-block text-uppercase py-2 rounded-pill mb-3"
              to="/login"
              style={{ backgroundColor: "#007BFF", border: "none" }}
            >
              Login
            </Link>

            <Link
              className="btn btn-lg btn-outline-light btn-block text-uppercase py-2 rounded-pill"
              to="/register"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDoesNotExist;