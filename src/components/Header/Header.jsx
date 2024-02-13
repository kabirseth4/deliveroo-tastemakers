import "./Header.scss";
import backIcon from "../../assets/icons/back-icon.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="header__button">
        <img src={backIcon} />
      </div>
      <h1 className="header__title">Gifts</h1>
      <h3 className="header__subtitle">
        Explore gifts to shop now, or send straight to someone's door
      </h3>
    </div>
  );
};

export default Header;
