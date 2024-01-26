import "./ExistingRecipient.scss";
import locationIcon from "../../assets/icons/location.png";
import arrow from "../../assets/icons/ep_arrow-up-bold.png";
import clock from "../../assets/icons/Screenshot 2024-01-26 at 12.01.43.png";

const ExistingRecipient = ({setRecipientType}) => {

  const handleOnClick = () => {
   setRecipientType("Existing")
  }
  return (
    <section className="existing-recipient">
      <div className="existing-recipient__draw">
        <h3 className="existing-recipient__title">Deliver to...</h3>
        <div className="existing-recipient__selection">
          <img src={locationIcon} alt="" className="existing-recipient__icon" />
          <div className="existing-recipient__person">
            <p className="existing-recipient__name"> Marie Antoinette</p>
            <p className="existing-recipient__location"> N12 W18</p>
          </div>
          <div className="existing-recipient__arrow">
            <img src={arrow} alt="" className="existing-recipient__icon" />
          </div>
        </div>
        <h3 className="existing-recipient__title">When?</h3>
        <div className="existing-recipient__selection">
        <img src={clock} alt="" className="existing-recipient__icon" />
          <div className="existing-recipient__date">
            <p className="existing-recipient__name">Now</p>
          </div>
          <div className="existing-recipient__arrow">
            <img src={arrow} alt="" className="existing-recipient__icon" />
          </div>
        </div>
        <div className="existing-recipient__button">
          <button className="existing-recipient__comfirm"  type="button"
            onClick={handleOnClick} >Confirm</button>
        </div>
      </div>
    </section>
  );
};

export default ExistingRecipient;
