import "./GiftOptions.scss";
import flower from "../../assets/images/Screenshot 2024-01-26 at 09.54.10.png";
import Experience from "../../assets/images/image 11.png";
import Beauty from "../../assets/images/Screenshot 2024-01-26 at 09.56.28.png";
import HomeStuff from "../../assets/images/Screenshot 2024-01-26 at 09.58.30.png";
import Pet from "../../assets/images/Screenshot 2024-01-26 at 10.00.46.png";
const GiftOptions = () => {
  return (
    <div className="Gift">
      <div className="Gift__item">
        <img src={flower} className="Gift__item-image" />
        <p className="Gift__item-option">Flowers</p>
      </div>

      <div className="Gift__item">
        <img src={Experience} className="Gift__item-image" />
        <p className="Gift__item-option">Experiences</p>
      </div>

      <div className="Gift__item">
        <img src={Beauty} className="Gift__item-image" />
        <p className="Gift__item-option">Beauty and <br/> toiletries</p>
      </div>

      <div className="Gift__item">
        <img src={HomeStuff} className="Gift__item-image" />
        <p className="Gift__item-option">Home and <br/> Kitchen</p>
      </div>

      <div className="Gift__item">
        <img src={Pet} className="Gift__item-image" />
        <p className="Gift__item-option">Pet</p>
      </div>
    </div>
  );
};

export default GiftOptions;
