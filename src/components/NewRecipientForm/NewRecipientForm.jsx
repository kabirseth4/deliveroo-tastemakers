import "./NewRecipientForm.scss";

const ContactName = () => {
  return (
    <form className="new-recipient-form">
      <h2 className="new-recipient-form__title">Contact Name</h2>
      <div className="new-recipient-form__inputs">
        <div className="new-recipient-form__input-group">
          <label htmlFor="firstName" className="new-recipient-form__label">
            First Name *
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Enter first name"
            className="new-recipient-form__input"
          />
        </div>
        <div className="new-recipient-form__input-group">
          <label htmlFor="lastName" className="new-recipient-form__label">
            Last Name *
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Enter last name"
            className="new-recipient-form__input"
          />
        </div>
        <div className="new-recipient-form__input-group">
          <label htmlFor="relationship" className="new-recipient-form__label">
            Who are they to you?
          </label>
          <input
            type="text"
            name="relationship"
            id="relationship"
            placeholder="Enter their relationship to you"
            className="new-recipient-form__input"
          />
          <p className="new-recipient-form__input-subtext">optional</p>
        </div>
      </div>
      <h2 className="new-recipient-form__title">Contact Details</h2>
      <div className="new-recipient-form__inputs new-recipient-form__inputs--compact">
        <div className="new-recipient-form__input-group">
          <input
            type="text"
            name="addressNo"
            id="addressNo"
            placeholder="Flat Number/Building Name (optional)"
            className="new-recipient-form__input"
          />
        </div>
        <div className="new-recipient-form__input-group">
          <input
            type="text"
            name="addressLine"
            id="addressLine"
            placeholder="Address Line 1"
            className="new-recipient-form__input new-recipient-form__input--no-border"
          />
        </div>
        <div className="new-recipient-form__input-group">
          <input
            type="text"
            name="postcode"
            id="postcode"
            placeholder="Postcode"
            className="new-recipient-form__input"
          />
        </div>
      </div>
      <h2 className="new-recipient-form__title">Contact Details</h2>
      <div className="new-recipient-form__inputs">
        <div className="new-recipient-form__input-group">
          <label htmlFor="email" className="new-recipient-form__label">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter email"
            className="new-recipient-form__input"
          />
          <p className="new-recipient-form__input-subtext">optional</p>
        </div>
        <div className="new-recipient-form__input-group">
          <label htmlFor="phone" className="new-recipient-form__label">
            Phone
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Enter email"
            className="new-recipient-form__input"
          />
          <p className="new-recipient-form__input-subtext">optional</p>
        </div>
      </div>
    </form>
  );
};

export default ContactName;
