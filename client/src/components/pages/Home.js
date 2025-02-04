import React, { useContext, Fragment } from "react";
import AuthContext from "../../context/authContext/authContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { userAuth } = useContext(AuthContext);
  return (
    <section className="d-flex flex-column align-items-center justify-content-center min-vh-100" style={{ backgroundColor: "#181718 ", color: "#ffffff" }}>
      <h1 className="display-3 font-weight-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>SecretChat</h1>
      <h3 className="font-weight-light text-secondary mt-2">Private & Anonymous Messaging</h3>
      <p className="lead text-muted mt-3 text-center" style={{ maxWidth: "600px" }}>
        Receive anonymous feedback and honest messages from friends. 
        Create your profile link, share it, and know what others says to you.
      </p>
      <div className="mt-4">
        {userAuth ? (
          <Link to="/profile" className="btn btn-success px-4 py-2 shadow-sm rounded-pill" style={{ backgroundColor: "#4CAF50", border: "none" }}>
            Go to Profile
          </Link>
        ) : (
          <Fragment>
            <Link to="/login" className="btn btn-outline-light mx-2 px-4 py-2 shadow-sm rounded-pill">
              Login
            </Link>
            <Link to="/register" className="btn btn-primary mx-2 px-4 py-2 shadow-sm rounded-pill" style={{ backgroundColor: "#007BFF", border: "none" }}>
              Sign Up
            </Link>
          </Fragment>
        )}
      </div>
    </section>
  );
};

export default Home;