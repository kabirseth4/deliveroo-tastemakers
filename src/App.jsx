import "./App.scss";
import Header from "./components/Header/Header";
import Recipient from "./components/Recipient/Recipient";
import Search from "./components/Search/Search";
import ExistingRecipient from "./components/ExistingRecipient/ExistingRecipient";


import { useState } from "react";


function App() {
  const [recipientType, setRecipientType] = useState(null); 
  console.log(recipientType)
  return (
    <div className="app">
      <Header />
      <Recipient recipientType={recipientType}  />
      <Search />
      <ExistingRecipient  setRecipientType={setRecipientType} />
    </div>
  );
}

export default App;
