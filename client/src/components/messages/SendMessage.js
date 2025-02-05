import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import MessageContext from "../../context/messageContext/messageContext";
import Alert from "../others/Alert";

const SendMessage = () => {
  const { sendMessage } = useContext(MessageContext);

  const [message, setMessage] = useState({ text: "" });
  const [charCounts, setCharCounts] = useState(0);
  const [warning, setWarning] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const { username } = useParams();
  const maxChars = 300;

  const { text } = message;

  const handleChange = (e) => {
    setWarning("");
    setSuccessMessage("");
    if (
      charCounts !== maxChars ||
      window.event.inputType === "deleteContentBackward"
    ) {
      setMessage({ text: e.target.value });
    }
  };

  useEffect(() => {
    setCharCounts(text.length);
  }, [text]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.length < 10) {
      setWarning("Please lengthen the message to a minimum of 10 characters.");
    } else {
      sendMessage(username, message);
      setMessage({ text: "" });
      setSuccessMessage("Message Sent!");
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100" style={{ backgroundColor: "#181718 ", color: "#ffffff" }}>
      <div className="w-100" style={{ maxWidth: "600px" }}>
        <div className="card bg-dark text-white border-0 p-4 rounded">
          <div className="card-body">
            <h2 className="card-title text-center mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Say Something to <span style={{ color: "#ff4444" }}>{username}</span>
            </h2>
            <p className="my-4 text-center text-secondary">
              Write your message below. Keep it respectful and meaningful!
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="text-white">Say Something..</label>
                <textarea
                  style={{ minHeight: "7rem", backgroundColor: "#1e1e1e", color: "#ffffff", border: "none" }}
                  className="form-control mb-3 p-3 rounded"
                  rows="3"
                  value={text}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              {warning === "" ? null : (
                <Alert alertType="alert-warning" alertMessage={warning} />
              )}
              {successMessage === "" ? null : (
                <Alert alertType="alert-success" alertMessage={successMessage} />
              )}

              <p style={{ fontSize: "18px" }}>
                <span style={{ color: "#ff4444" }}>{maxChars - charCounts}</span>{" "}
                characters remaining
              </p>

              <hr className="my-3 border-secondary" />

              <input
                type="submit"
                className="btn btn-lg btn-primary btn-block text-uppercase py-2 rounded-pill"
                value="Send"
                style={{ backgroundColor: "#007BFF", border: "none" }}
              />
            </form>

            <Link
              className="btn btn-lg btn-outline-light btn-block text-uppercase mt-3 py-2 rounded-pill"
              to="/"
            >
              Go Back To Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendMessage;