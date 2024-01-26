import { useState } from "react";
import "./Recipient.scss";
import { useNavigate } from "react-router-dom";

const Recipient = ({
  recipient,
  setRecipient,
  recipientType,
  setRecipientType,
}) => {
  const navigate = useNavigate();

  return (
    <div className="recipient">
      {!recipientType && (
        <p className="recipient__text">Who do you want to send a gift to?</p>
      )}
      <div className="recipient__button-container">
        <button
          className={`recipient__button${
            recipientType === "Existing" ? " recipient__button--active" : ""
          }`}
          onClick={() => {
            setRecipient("Marie Antoinette");
            setRecipientType("Existing");
          }}
        >
          Existing Recipient
        </button>
        <button
          className={`recipient__button${
            recipientType === "New" ? " recipient__button--active" : ""
          }`}
          onClick={() => {
            navigate("/new-recipient");
          }}
        >
          New Recipient
        </button>
        <button
          className={`recipient__button${
            recipientType === "Myself" ? " recipient__button--active" : ""
          }`}
          onClick={() => {
            setRecipientType("Myself");
          }}
        >
          Myself
        </button>
      </div>
      {(recipientType === "Existing" || recipientType === "New") && (
        <p className="recipient__text">
          Choose a gift for <strong>{recipient}</strong>
        </p>
      )}
      {recipientType === "Myself" && (
        <p className="recipient__text">Treat yourself ❤️</p>
      )}
    </div>
  );
};

export default Recipient;
