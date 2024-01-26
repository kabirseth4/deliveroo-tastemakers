import { Link } from "react-router-dom";
import "./NewRecipientHeader.scss";
import backIcon from "../../assets/icons/back-icon.svg";

const NewRecipientHeader = () => {
  return (
    <div className="new-recipient-header">
      <Link className="new-recipient-header__link" to="/">
        <img className="new-recipient-header__img" src={backIcon} alt="back" />
      </Link>
      <h2 className="new-recipient-header__title">Add a new recipient</h2>
    </div>
  );
};

export default NewRecipientHeader;
