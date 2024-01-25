import "./Recipient.scss";

const Recipient = () => {
  return (
    <div className="recipient">
      <p className="recipient__question">Who do you want to send a gift to?</p>
      <div className="recipient__button-container">
        <button className="recipient__button">Existing Recipient</button>
        <button className="recipient__button">New Recipient</button>
        <button className="recipient__button">Myself</button>
      </div>
    </div>
  );
};

export default Recipient;
