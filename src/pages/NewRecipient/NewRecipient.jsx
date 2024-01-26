import NewRecipientHeader from "../../components/NewRecipientHeader/NewRecipientHeader";
import "./NewRecipient.scss";
import NewRecipientForm from "../../components/NewRecipientForm/NewRecipientForm";

const NewRecipient = () => {
  return (
    <div className="app">
      <section className="new-recipient">
        <NewRecipientHeader />
        <NewRecipientForm />
      </section>
    </div>
  );
};

export default NewRecipient;
