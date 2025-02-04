import React, { useEffect, useContext, Fragment } from "react";
import MessageContext from "../../context/messageContext/messageContext";
import SortBtn from "./btn/SortBtn";
import RefreshBtn from "./btn/RefreshBtn";
import { Link } from "react-router-dom";
import Message from "./Message";

const Messages = () => {
  const { messages, loading, getMessages, sortType } = useContext(
    MessageContext
  );

  useEffect(() => {
    getMessages(sortType);
  }, [sortType]);

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100" style={{ backgroundColor: "#181718 ", color: "#ffffff"}}>
      <div className="w-100 " style={{ maxWidth: "600px", marginTop: "2rem"}}>
        <div className="card bg-dark text-white border-0 p-4 rounded">
          <div className="card-body">
            <h2 className="card-title text-center mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>My Messages</h2>
            <p className="my-4 text-center text-secondary">
              Scroll down to check out the messages that you have received.
            </p>

            {messages.length === 0 ? (
              <h2 className="my-3 text-center text-primary font-weight-light">
                {loading ? "Loading..." : "No messages found."}
              </h2>
            ) : (
              <div>
                <div className="d-flex justify-content-end mb-4">
                  <RefreshBtn />
                  <SortBtn />
                </div>
                {messages.map((message) => (
                  <Message key={message._id} message={message} />
                ))}
              </div>
            )}

            <hr className="my-4 border-secondary" />

            <Link
              className="btn btn-lg btn-outline-light btn-block text-uppercase py-2 rounded-pill"
              to="/profile"
            >
              Go Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;