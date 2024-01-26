import "./ExistingRecipient.scss";
import locationIcon from "../../assets/icons/location.png";

const ExistingRecipient = () => {
  return (
    <section className="existing-recipient">
      <div className="existing-recipient__draw">
        <h3 className="existing-recipient__title">Deliver to...</h3>
        <div className="existing-recipient__selection">
          <img src={locationIcon} alt="" className="existing-recipient__icon" />
        </div>
        <h3 className="existing-recipient__title">When?</h3>
        <div className="existing-recipient__selection"></div>
      </div>
    </section>
  );
};

export default ExistingRecipient;
