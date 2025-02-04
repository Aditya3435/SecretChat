import React, { useEffect, useContext, Fragment } from "react";
import { useParams } from "react-router-dom";
import AuthContext from "../../context/authContext/authContext";
import SendMessage from "../messages/SendMessage";
import UserDoesNotExist from "./UserDoesNotExist";

const UserValidity = () => {
  const { checkUser, userExist } = useContext(AuthContext);
  const { username } = useParams();

  useEffect(() => {
    checkUser(username);
  }, [username, checkUser]);

  return (
    <Fragment>
      {userExist === null ? (
        <div className="d-flex align-items-center justify-content-center min-vh-100" style={{ backgroundColor: "#181718 ", color: "#ffffff" }}>
          <div className="w-100" style={{ maxWidth: "400px" }}>
            <div className="card bg-dark text-white border-0 p-4 rounded">
              <div className="card-body text-center">
                <h2 className="card-title mb-4" style={{ fontFamily: 'Poppins, sans-serif', color: "#ffcc00" }}>Checking...</h2>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Fragment>
          {userExist ? <SendMessage /> : <UserDoesNotExist />}
        </Fragment>
      )}
    </Fragment>
  );
};

export default UserValidity;