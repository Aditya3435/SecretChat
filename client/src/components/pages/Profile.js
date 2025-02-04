import React, { useEffect, useContext } from "react";
import AuthContext from "../../context/authContext/authContext";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user, getUser, logoutUser } = useContext(AuthContext);

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100" style={{ backgroundColor: "#181718 ", color: "#ffffff" }}>
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <div className="card bg-dark text-white border-0 p-4 rounded">
          <div className="card-body text-center">
            <h2 className="card-title mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>{user}'s Profile</h2>
            <p className="my-4 text-secondary">
              Share your profile link to get responses from your friend. Go to
              "View Messages" to check out the responses.
            </p>

            <Link
              className="btn btn-lg btn-primary btn-block  py-2 rounded-pill mb-3"
              to="/messages"
              style={{ backgroundColor: "#007BFF", border: "none" }}
            >
              View Messages
            </Link>

            <button
              className="btn btn-lg btn-outline-light btn-block  py-2 rounded-pill mb-3"
              onClick={async () => {
                const profileLink = `http://secretchat-w193.onrender.com/${user}`;
                try {
                  await navigator.clipboard.writeText(profileLink);
                  alert("Profile Link Copied To Clipboard");
                } catch (err) {
                  console.error("Async: Could not copy text: ", err);
                }
              }}
            >
              Copy Profile Link
            </button>

            <button
              className="btn btn-lg btn-outline-danger btn-block  py-2 rounded-pill"
              onClick={() => logoutUser()}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;