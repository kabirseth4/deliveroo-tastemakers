import NewRecipientHeader from "../../components/NewRecipientHeader/NewRecipientHeader";
import "./NewRecipient.scss";
import NewRecipientForm from "../../components/NewRecipientForm/NewRecipientForm";

const NewRecipient = ({ setRecipient, setRecipientType }) => {
  return (
    <div className="app">
      <section className="new-recipient">
        <NewRecipientHeader />
        <NewRecipientForm
          setRecipient={setRecipient}
          setRecipientType={setRecipientType}
        />
      </section>
    </div>
  );
};

export default NewRecipient;
