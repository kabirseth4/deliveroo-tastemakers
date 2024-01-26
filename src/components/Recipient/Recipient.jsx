import { useState } from "react";
import "./Recipient.scss";
import { useNavigate } from "react-router-dom";

const Recipient = () => {
  const navigate = useNavigate();
  const [recipientType, setRecipientType] = useState(null);

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
          Choose a gift for <strong>Marie Antoinette</strong>
        </p>
      )}
      {recipientType === "Myself" && (
        <p className="recipient__text">Treat yourself ❤️</p>
      )}
    </div>
  );
};

export default Recipient;
